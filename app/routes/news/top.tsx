import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { NYTResponse } from "api/types/nyt";
import { ArticleShort } from "~/components/Article/Short/ArticleShort";
import { HiddenArticlesSection } from "~/components/Article/Hidden/HiddenArticlesSection";
import { HomeLink } from "~/components/HomeLink";
import { Page } from "~/components/Page";
import type { GroupedArticles } from "~/helpers";
import { categorizeArticles } from "~/helpers";

export const loader: LoaderFunction = async ({ request }) => {
  const includedCategoryIds = new URL(request.url).searchParams.getAll("show");

  const res = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=MNwN1ovbEnjSrtH9r1kTLsQxCEuBqTlh",
    {
      method: "GET",
    }
  );

  const { results = [] }: NYTResponse = await res.json();
  const articles = results.map(result => {
    const coverImage = result.multimedia?.[0]?.url ? {
      url: result.multimedia[0].url,
      caption: result.multimedia[0].caption
    } : undefined;
    
    return {
      ...result,
      source: "The New York Times",
      image: coverImage
    }
  })

  const categorizedResults = categorizeArticles(articles, includedCategoryIds);

  return json({ articles: categorizedResults });
};

export default function Top() {
  const { articles: { murdery, murderless } } = useLoaderData<{ articles: GroupedArticles }>();

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
