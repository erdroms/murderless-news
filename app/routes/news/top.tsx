import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Article, NYTResponse } from "api/types/nyt";
import { ArticleShort } from "~/components/Article/Short/ArticleShort";
import { HiddenArticlesSection } from "~/components/Article/Hidden/HiddenArticlesSection";
import { HomeLink } from "~/components/HomeLink";
import { Page } from "~/components/Page";
import type { FilterCategory } from "~/constants";
import { DEFAULT_FILTER_CATEGORIES } from "~/constants";

interface GroupedArticles {
  murderless: Article[];
  murdery: { article: Article; categories: FilterCategory[] }[];
}

function categorizeArticles(
  articles: Article[],
  includedCategoryIds?: string[]
): GroupedArticles {
  const categorized = articles.reduce(
    (grouped: GroupedArticles, curr: Article) => {
      const title = curr.title || "";
      const abstract = curr.abstract || "";
      const caption = curr.multimedia?.[0].caption || "";

      const { isMurdery, categories } = getMurderCategory(
        [title, abstract, caption],
        includedCategoryIds
      );

      if (isMurdery) {
        grouped.murdery.push({ article: curr, categories });
      } else {
        grouped.murderless.push(curr);
      }

      return grouped;
    },
    { murdery: [], murderless: [] }
  );

  return categorized;
}

function getMurderCategory(
  test: string[],
  displayedCategoryIds?: string[]
): { isMurdery: boolean; categories: FilterCategory[] } {
  // search on all testable values
  const testString = test.join(" ");

  // get the list of categories to hide
  const hiddenCategories = DEFAULT_FILTER_CATEGORIES.filter(
    (cat) => !displayedCategoryIds?.includes(cat.id)
  );

  let categoryMatches = [];

  for (let i = 0; i < hiddenCategories.length; i++) {
    const filters = hiddenCategories[i]?.filters || [];

    if (filters.some((filter) => testString.toLowerCase().includes(filter))) {
      categoryMatches.push(hiddenCategories[i]);
    }
  }

  return {
    isMurdery: categoryMatches.length > 0,
    categories: categoryMatches,
  };
}

export const loader: LoaderFunction = async ({ request }) => {
  const includedCategoryIds = new URL(request.url).searchParams.getAll("show");

  const res = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=MNwN1ovbEnjSrtH9r1kTLsQxCEuBqTlh",
    {
      method: "GET",
    }
  );

  const { results = [] }: NYTResponse = await res.json();

  const categorizedResults = categorizeArticles(results, includedCategoryIds);

  return json(categorizedResults);
};

export default function Top() {
  const { murdery, murderless } = useLoaderData<GroupedArticles>();

  return (
    <Page>
      <Page.Heading left={<HomeLink />} title="Top stories" />

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
