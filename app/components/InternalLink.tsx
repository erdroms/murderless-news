import type { LinkProps } from "@remix-run/react";
import { Link } from "@remix-run/react";
import type { LinkComponentProps } from "./LinkComponent";
import { LinkComponent } from "./LinkComponent";

interface InternalLinkProps extends LinkComponentProps {
  to: LinkProps["to"];
}

export const InternalLink = ({ to, icon, text }: InternalLinkProps) => {
  return (
    <Link to={to}>
      <LinkComponent text={text} icon={icon} />
    </Link>
  );
};
