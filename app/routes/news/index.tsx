import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { HiddenArticlesSection } from "~/components/Article/Hidden/HiddenArticlesSection";
import { ArticleShort } from "~/components/Article/Short/ArticleShort";
import { HomeLink } from "~/components/HomeLink";
import { Page } from "~/components/Page";
import { NEWS_SOURCES } from "~/constants";
import type { GroupedArticles } from "~/helpers";
import { categorizeArticles } from "~/helpers";

export const loader: LoaderFunction = async ({ request }) => {
  const includedCategoryIds = new URL(request.url).searchParams.getAll("show");

  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=0795a9fc3aa748bbb06c4a4e70199db4&sources=${NEWS_SOURCES.join(',')}&country=us`,
    {
      method: "GET",
    }
  );

  const { data = [], sources = [], categories } = await res.json();

  const articles = data.map((datum) => {
    sources.push(datum.source);

    return {
      ...datum,
      image: { url: datum.image, caption: "" },
    };
  });

  const categorizedResults = categorizeArticles(articles, includedCategoryIds);

  return json({ articles: categorizedResults, categories, sources });
};

export default function News() {
  const {
    articles: { murdery, murderless },
  } = useLoaderData<{
    articles: GroupedArticles;
    sources: string[];
  }>();

  return (
    <Page>
      <Page.Heading left={<HomeLink />} title="Recent stories" />
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
