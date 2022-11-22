import type { Article } from "api/types/nyt";
import { useState } from "react";
import { HiddenArticlesCTA } from "./HiddenArticlesCTA";

interface HiddenArticlesSectionProps {
  articles: Article[];
}

export const HiddenArticlesSection = ({
  articles,
}: HiddenArticlesSectionProps) => {
  const [revealEvil, setRevealEvil] = useState<boolean>(false);

  function toggleEvil() {
    setRevealEvil((prev) => !prev);
  }
  return (
    <section className="bg-yellow-100 rounded-md p-4 transition-all">
      <HiddenArticlesCTA
        show={revealEvil}
        onToggle={toggleEvil}
        hiddenCount={articles.length}
      />
      {revealEvil &&
        articles.map((article) => (
          <h4 key={article.url} className="mt-4 italic">
            {article.title}
          </h4>
        ))}
    </section>
  );
};
