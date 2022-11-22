import type { HiddenArticle } from "./HiddenArticle";
import { HiddenArticleItem } from "./HiddenArticle";

interface HiddenArticlesProps {
  articles: HiddenArticle[];
}

export const HiddenArticles = ({ articles = [] }: HiddenArticlesProps) => (
  <section className="grid gap-3 my-3">
    {articles.map(({ article, categories }) => (
      <HiddenArticleItem
        key={article.url}
        article={article}
        categories={categories}
      />
    ))}
  </section>
);
