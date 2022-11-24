export const DEFAULT_FILTER_CATEGORIES: FilterCategory[] = [
  {
    id: "murder",
    title: "Murder & Mayhem",
    filters: [
      "kill",
      "murder",
      "shooting",
      "dead",
      "gunman",
      "shooter",
      "massacre",
    ],
    icon: { name: "ri-knife-blood-line -rotate-90", color: "text-red-600" },
  },
  {
    id: "war",
    title: "War",
    filters: ["war", "bomb", "massacre"],
    icon: { name: "ri-rocket-2-fill rotate-180", color: "text-slate" },
  },
  {
    id: "trump",
    title: "Trump",
    filters: ["trump"],
    icon: { name: "ri-criminal-line", color: "text-amber-400" },
  },
];

export type FilterCategory = {
  id: string;
  title: string;
  filters: string[];
  icon: { name: string; color?: string };
};

export const SEE_NO_EVIL = "🙈";
export const HEAR_NO_EVIL = "🙉";
