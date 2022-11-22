import type { FilterCategory } from "~/constants";

interface HiddenArticleTitleProps {
  title: string;
  categories: FilterCategory[];
}

export const HiddenArticleTitle = ({ title }: HiddenArticleTitleProps) => (
  <h4 className="my-2 italic">{title}</h4>
);
