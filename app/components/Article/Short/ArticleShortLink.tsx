import { ExternalLink } from "~/components/ExternalLink";

interface ArticleShortLinkProps {
  url?: string;
}

export const ArticleShortLink = ({ url }: ArticleShortLinkProps) => {
  if (!url) return null;

  return (
    <ExternalLink
      url={url}
      text="Read article"
      icon={{ name: "ri-arrow-right-fill", position: "trailing" }}
    />
  );
};
