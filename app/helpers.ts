import type { FilterCategory } from "./constants";
import { DEFAULT_FILTER_CATEGORIES } from "./constants";
import type { Article } from "./types/Article";

export interface GroupedArticles {
  murderless: Article[];
  murdery: { article: Article; categories: FilterCategory[] }[];
}

export function categorizeArticles(
  articles: Article[],
  includedCategoryIds?: string[]
): GroupedArticles {
  const categorized = articles.reduce(
    (grouped: GroupedArticles, curr: Article) => {
      const title = curr.title || "";
      const abstract = curr.abstract || "";
      const caption = curr.image?.caption || "";

      const { isMurdery, categories } = getMurderCategory(
        [title, abstract, caption],
        includedCategoryIds
      );

      if (isMurdery) {
        grouped.murdery.push({ article: curr, categories });
      } else {
        grouped.murderless.push(curr);
      }

      return grouped;
    },
    { murdery: [], murderless: [] }
  );

  return categorized;
}

function getMurderCategory(
  test: string[],
  displayedCategoryIds?: string[]
): { isMurdery: boolean; categories: FilterCategory[] } {
  // search on all testable values
  const testString = test.join(" ");

  // get the list of categories to hide
  const hiddenCategories = DEFAULT_FILTER_CATEGORIES.filter(
    (cat) => !displayedCategoryIds?.includes(cat.id)
  );

  let categoryMatches = [];

  for (let i = 0; i < hiddenCategories.length; i++) {
    const filters = hiddenCategories[i]?.filters || [];

    if (filters.some((filter) => {
      return filter.split("+").reduce((present, word) => {
        if (testString.toLowerCase().indexOf(word) !== -1) {
          return true;
        }
        return present;
      }, false);
    })) {
      categoryMatches.push(hiddenCategories[i]);
    }
  }

  return {
    isMurdery: categoryMatches.length > 0,
    categories: categoryMatches,
  };
}