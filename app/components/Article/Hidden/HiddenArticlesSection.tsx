import { useState } from "react";
import type { FilterCategory } from "~/constants";
import type { HiddenArticle } from "./HiddenArticle";
import { HiddenArticles } from "./HiddenArticles";
import { HiddenArticlesCTA } from "./HiddenArticlesCTA";

interface HiddenArticlesSectionProps {
  articles: HiddenArticle[];
}

export const HiddenArticlesSection = ({
  articles,
}: HiddenArticlesSectionProps) => {
  const [revealEvil, setRevealEvil] = useState<boolean>(false);
  const hiddenCategories = getUniqueFilterCategories(articles);

  function toggleEvil() {
    setRevealEvil((prev) => !prev);
  }

  return (
    <section className="border-4 border-[#FCD397]/[.4] bg-[#FCD397]/[.2] rounded-md py-2 px-4 text-sm shadow-sm">
      <HiddenArticlesCTA
        show={revealEvil}
        onToggle={toggleEvil}
        hiddenCount={articles.length}
        hiddenCategories={hiddenCategories}
      />

      {revealEvil && <HiddenArticles articles={articles} />}
    </section>
  );
};

function getUniqueFilterCategories(articles: HiddenArticle[]) {
  return articles.reduce((result: FilterCategory[], { categories }) => {
    const newCats = categories.filter(
      (cat) => !result.some((res) => res.id === cat.id)
    );
    return [...result, ...newCats];
  }, []);
}
