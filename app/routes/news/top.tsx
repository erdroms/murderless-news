import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Article, NYTResponse } from "api/types/nyt";
import { ArticleShort } from "~/components/Article/Short/ArticleShort";
import { HiddenArticlesSection } from "~/components/ArticleList/HiddenArticlesSection";
import { Page } from "~/components/containers/Page";
import type { FilterCategory } from "~/constants";
import { DEFAULT_FILTER_CATEGORIES } from "~/constants";

interface GroupedArticles {
  murderless: Article[];
  murdery: Article[];
}

const matchesFilter = (test: string[], includedCategoryIds?: string[]) => {
  const filteredCategories = DEFAULT_FILTER_CATEGORIES.filter(
    (cat) => !includedCategoryIds?.includes(cat.id)
  );

  let testString = typeof test === "string" ? test : test.join(" ");

  return filteredCategories.some((category: FilterCategory) =>
    category.filters.some((filter) => testString.toLowerCase().includes(filter))
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  const includedCategoryIds = new URL(request.url).searchParams.getAll("show");

  const res = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=MNwN1ovbEnjSrtH9r1kTLsQxCEuBqTlh",
    {
      method: "GET",
    }
  );

  const { results = [] }: NYTResponse = await res.json();

  const groupedResults = results.reduce(
    (grouped: GroupedArticles, curr: Article) => {
      const title = curr.title || "";
      const abstract = curr.abstract || "";
      const caption = curr.multimedia?.[0].caption || "";
      const isMurdery = matchesFilter(
        [title, abstract, caption],
        includedCategoryIds
      );

      if (isMurdery) {
        grouped.murdery.push(curr);
      } else {
        grouped.murderless.push(curr);
      }

      return grouped;
    },
    { murdery: [], murderless: [] }
  );

  return json(groupedResults);
};

export default function Top() {
  const { murdery, murderless } = useLoaderData<GroupedArticles>();

  return (
    <Page>
      <h1 className="text-6xl mb-6">Top stories</h1>

      <div className="grid">
        <section className="order-last">
          <div className="grid grid-cols-1 auto-rows-auto gap-6 my-6">
            {murderless.map((article) => (
              <ArticleShort key={article.url} article={article} />
            ))}
          </div>
        </section>
        <aside>
          <HiddenArticlesSection articles={murdery} />
        </aside>
      </div>
    </Page>
  );
}
