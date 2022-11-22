import { CategoryBubble } from "~/components/CategoryBubble";
import type { FilterCategory } from "~/constants";

interface CategoryIndicatorProps {
  categories: FilterCategory[];
}

export const CategoryIndicator = ({ categories }: CategoryIndicatorProps) => (
  <span className="mr-2 -ml-1">
    {categories.map((category) => (
      <CategoryBubble
        key={category.id}
        backgroundColor="bg-white/[0.65]"
        icon={category.icon}
        size="small"
      />
    ))}
  </span>
);
