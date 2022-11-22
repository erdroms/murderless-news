import type { Article } from "api/types/nyt";

type ArticleShortTitleProps = Pick<Article, "title">;

export const ArticleShortTitle = ({ title }: ArticleShortTitleProps) => {
  return <h2 className="text-2xl mb-2">{title}</h2>;
};
