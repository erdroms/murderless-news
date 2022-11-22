import { EyeCon } from "~/components/EyeCon";

interface ArticleShortToggleProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export const ArticleShortToggle = ({
  isExpanded,
  onToggle,
}: ArticleShortToggleProps) => (
  <button
    onClick={onToggle}
    aria-label={isExpanded ? "Hide article" : "Show article"}
  >
    <EyeCon isOpen={isExpanded} color="text-blue-700" />
  </button>
);
