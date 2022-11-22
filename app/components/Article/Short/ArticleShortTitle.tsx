import type { Article } from "api/types/nyt";

type ArticleShortTitleProps = Pick<Article, "title" | "url">;

export const ArticleShortTitle = ({ title, url }: ArticleShortTitleProps) => {
  return (
    <a href={url}>
      <h2 className="text-2xl mb-2 underline text-deep">{title}</h2>
    </a>
  );
};
