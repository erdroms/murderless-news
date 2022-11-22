import type { Article } from "api/types/nyt";
import type { FilterCategory } from "~/constants";
import { CategoryIndicator } from "./CategoryIndicator";
import { HiddenArticleTitle } from "./HiddenArticleTitle";

export type HiddenArticle = {
  article: Article;
  categories: FilterCategory[];
};

export const HiddenArticleItem = ({ article, categories }: HiddenArticle) => (
  <div className="flex items-center">
    <CategoryIndicator categories={categories} />
    <a href={article.url} className="link" key={article.url}>
      <HiddenArticleTitle
        title={article.title || "Untitled"}
        categories={categories}
      />
    </a>
  </div>
);
