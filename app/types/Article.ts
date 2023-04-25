export type Article = {
  title?: string;
  abstract?: string;
  image?: {
    url: string;
    caption?: string;
  };
  created_date?: string;
  url?: string;
  byline?: string;
  source?: string;
}