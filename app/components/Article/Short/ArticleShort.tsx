import type { Article } from "api/types/nyt";
import dayjs from "dayjs";
import { useState } from "react";
import { ArticleShortAbstract } from "./ArticleShortAbstract";
import { ArticleShortLink } from "./ArticleShortLink";
import { ArticleShortPhoto } from "./ArticleShortPhoto";
import { ArticleShortTitle } from "./ArticleShortTitle";
import { ArticleShortToggle } from "./ArticleShortToggle";

interface ArticleShortProps {
  article: Article;
}

export const ArticleShort = ({ article }: ArticleShortProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function handleToggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <article className="grid gap-3 p-4 pt-3 shadow-[0_0_5px_0_rgba(122,122,122,0.3)]">
      <div
        className={`flex justify-between overflow-hidden md:my-2 ${
          isOpen ? "items-start" : "items-center"
        }`}
      >
        <ArticleShortTitle
          title={article.title}
          url={article.url}
          collapsed={!isOpen}
        />
        <div className="ml-4">
          <ArticleShortToggle isExpanded={isOpen} onToggle={handleToggleOpen} />
        </div>
      </div>

      {isOpen && (
        <>
          <ArticleShortPhoto multimedia={article.multimedia} />
          <ArticleShortAbstract abstract={article.abstract} />
          <div className="flex justify-self-stretch items-center justify-between">
            <time dateTime={article.created_date}>
              {dayjs(article.created_date).format("MMM DD, YYYY")}
            </time>
            <ArticleShortLink url={article.url} />
          </div>
        </>
      )}
    </article>
  );
};

ArticleShort.Title = ArticleShortTitle;
ArticleShort.Abstract = ArticleShortAbstract;
