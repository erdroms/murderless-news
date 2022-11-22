import type { Article } from "api/types/nyt";

type ArticleShortTitleProps = Pick<Article, "title" | "url"> & {
  collapsed?: boolean;
};

export const ArticleShortTitle = ({
  title,
  url,
  collapsed = false,
}: ArticleShortTitleProps) => (
  <a href={url} className="overflow-hidden">
    <h2
      className={`${
        collapsed ? "text-sm truncate" : "text-2xl"
      } underline text-deep}`}
    >
      {title}
    </h2>
  </a>
);
