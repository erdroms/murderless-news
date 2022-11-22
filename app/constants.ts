export const DEFAULT_FILTER_CATEGORIES = [
  {
    id: "murder",
    title: "Murder & Mayhem",
    filters: ["kill", "murder", "shooting", "dead", "gunman", "shooter"],
  },
  { id: "trump", title: "Trump", filters: ["trump"] },
  { id: "war", title: "War", filters: ["bomb"] },
];

export type FilterCategory = {
  id: string;
  title: string;
  filters: string[];
};

export const SEE_NO_EVIL = "🙈";
export const HEAR_NO_EVIL = "🙉";