import type { FilterCategory } from "~/constants";

interface CategoryBubbleProps {
  backgroundColor: string;
  icon: FilterCategory["icon"];
  size?: "large" | "small";
}

export const CategoryBubble = ({
  icon,
  backgroundColor,
  size = "large",
}: CategoryBubbleProps) => {
  const bubbleSize = size === "small" ? "w-8 h-8" : "w-11 h-11";
  const iconSize = size === "small" ? "text-xl" : "text-3xl";
  return (
    <div
      className={`${backgroundColor} ${bubbleSize} shadow-inner rounded-full ml-auto flex items-center justify-center`}
    >
      <i className={`${icon.name} ${icon.color} ${iconSize}`} />
    </div>
  );
};
