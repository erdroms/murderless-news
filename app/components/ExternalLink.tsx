import type { LinkComponentProps } from "./LinkComponent";
import { LinkComponent } from "./LinkComponent";

interface ExternalLinkProps extends LinkComponentProps {
  url: string;
}

export const ExternalLink = ({ url, icon, text }: ExternalLinkProps) => (
  <a href={url}>
    <LinkComponent text={text} icon={icon} />
  </a>
);
