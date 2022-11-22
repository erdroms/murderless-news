import type { Article } from "api/types/nyt";

type ArticleShortPhotoProps = Pick<Article, "multimedia">;

export const ArticleShortPhoto = ({ multimedia }: ArticleShortPhotoProps) => {
  const coverPhoto = multimedia?.[1];

  if (!coverPhoto) return null;

  return (
    <figure className="max-w-[600px]">
      <img src={coverPhoto.url} alt={coverPhoto.caption} />
      <figcaption className="italic text-sm text-slate mt-1">
        {coverPhoto.caption}
      </figcaption>
    </figure>
  );
};
