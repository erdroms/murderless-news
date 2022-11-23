import { CategoryBubble } from "~/components/CategoryBubble";
import type { FilterCategory } from "~/constants";

interface CategoryIndicatorProps {
  categories: FilterCategory[];
}

export const CategoryIndicator = ({ categories }: CategoryIndicatorProps) => (
  <div className="flex mr-5">
    {categories.map((category) => (
      <span key={category.id} className="w-5 overflow-visible">
        <CategoryBubble
          backgroundColor="bg-white/[0.65]"
          icon={category.icon}
          size="small"
        />
      </span>
    ))}
  </div>
);
