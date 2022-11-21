import type { Article } from "api/types/nyt";

type ArticleShortPhotoProps = Pick<Article, "multimedia">;

export const ArticleShortPhoto = ({ multimedia }: ArticleShortPhotoProps) => {
  const coverPhoto = multimedia?.[1];

  if (!coverPhoto) return null;

  return (
    <figure className="mb-4">
      <img src={coverPhoto.url} alt={coverPhoto.caption} />
      <figcaption>{coverPhoto.caption}</figcaption>
    </figure>
  );
};
