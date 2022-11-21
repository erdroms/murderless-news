import type { Article } from "api/types/nyt";
import { ArticleShortAbstract } from "./ArticleShortAbstract";
import { ArticleShortPhoto } from "./ArticleShortPhoto";
import { ArticleShortTitle } from "./ArticleShortTitle";

interface ArticleShortProps {
  article: Article;
}

export const ArticleShort = ({ article }: ArticleShortProps) => {
  return (
    <article className="mb-6 max-w-2xl">
      <ArticleShortPhoto multimedia={article.multimedia} />
      <ArticleShortTitle title={article.title} />
      <ArticleShortAbstract abstract={article.abstract} />
    </article>
  );
};

ArticleShort.Title = ArticleShortTitle;
ArticleShort.Abstract = ArticleShortAbstract;
