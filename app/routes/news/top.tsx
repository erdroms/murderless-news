import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Article, NYTResponse } from "api/types/nyt";
import { ArticleShort } from "~/components/Article/Short/ArticleShort";

interface GroupedArticles {
  murderless: Article[];
  murdery: Article[];
}

const filters = ["kill", "murder", "shooting", "trump", "bomb", "dead"];
const matchesFilter = (title: string) =>
  filters.some((filter) => title.toLowerCase().includes(filter));

export const loader: LoaderFunction = async () => {
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
      const isMurdery = matchesFilter(title);

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
    <>
      <h1 className="text-3xl">Top stories</h1>
      <div className="grid grid-cols-8 gap-6">
        <section className="col-start-2 col-span-4">
          <div className="grid grid-cols-1 auto-rows-auto gap-6">
            {murderless.map((article) => {
              return <ArticleShort key={article.url} article={article} />;
            })}
          </div>
        </section>
        <section className="col-span-2">
          <h3 className="text-lg">
            🙈 We hid {murdery.length} murdery articles from you.
          </h3>
          <p>
            If you're feeling brave today, you can display the titles by
            clicking here
          </p>
        </section>
      </div>
    </>
  );
}
