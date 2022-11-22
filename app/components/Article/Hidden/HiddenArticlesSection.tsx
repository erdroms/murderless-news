import type { Article } from "api/types/nyt";
import { useState } from "react";
import type { FilterCategory } from "~/constants";
import { HiddenArticles } from "./HiddenArticles";
import { HiddenArticlesCTA } from "./HiddenArticlesCTA";

interface HiddenArticlesSectionProps {
  articles: { article: Article; categories: FilterCategory[] }[];
}

export const HiddenArticlesSection = ({
  articles,
}: HiddenArticlesSectionProps) => {
  const [revealEvil, setRevealEvil] = useState<boolean>(false);

  function toggleEvil() {
    setRevealEvil((prev) => !prev);
  }

  return (
    <section className="bg-teal-light/[.3] rounded-md py-2 px-4 text-sm shadow-md">
      <HiddenArticlesCTA
        show={revealEvil}
        onToggle={toggleEvil}
        hiddenCount={articles.length}
      />

      {revealEvil && <HiddenArticles articles={articles} />}
    </section>
  );
};
