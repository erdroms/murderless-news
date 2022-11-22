import type { Article } from "api/types/nyt";

type ArticleShortAbstractProps = Pick<Article, "abstract">;

export const ArticleShortAbstract = ({
  abstract,
}: ArticleShortAbstractProps) => {
  return <p className="text-lg leading-snug">{abstract}</p>;
};
