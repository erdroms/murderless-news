interface ArticleShortPhotoProps {
  url: string;
  caption?: string;
  source?: string;
};

export const ArticleShortPhoto = ({ url, caption, source }: ArticleShortPhotoProps) => {
  return (
    <figure className="max-w-[600px]">
      <img src={url} alt={caption} />
      <figcaption className="italic text-sm text-slate mt-1">
        {source}{caption && ` | ${caption}`}
      </figcaption>
    </figure>
  );
};
