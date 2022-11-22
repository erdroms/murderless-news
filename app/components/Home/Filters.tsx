import { Form, useSubmit } from "@remix-run/react";
import type { FilterCategory } from "~/constants";
import { CategoryBubble } from "../CategoryBubble";

interface FiltersProps {
  categories: FilterCategory[];
  shownCategories?: string[];
}

export const Filters = ({ categories, shownCategories = [] }: FiltersProps) => {
  const submit = useSubmit();

  return (
    <Form
      onChange={(e) => submit(e.currentTarget)}
      className="grid gap-y-4 justify-center"
    >
      {categories.map((category) => {
        const isHidden = !shownCategories.includes(category.id);
        const backgroundColor = isHidden ? "bg-grey" : "bg-teal";
        const iconBackgroundColor = isHidden
          ? "bg-grey/[0.3]"
          : "bg-white/[0.75]";
        const eyeCon = isHidden ? "ri-eye-close-line" : "ri-eye-line";

        return (
          <label
            key={category.id}
            className={`rounded-md px-4 py-2 ${backgroundColor}`}
          >
            <input
              type="checkbox"
              name="show"
              className="hidden"
              value={category.id}
              defaultChecked={!isHidden}
            />
            <div className="flex items-center text-dark text-lg">
              <i className={`${eyeCon} text-2xl`} />
              <span className="mx-4">{category.title}</span>
              <CategoryBubble
                backgroundColor={iconBackgroundColor}
                icon={{
                  name: category.icon.name,
                  color: isHidden ? "text-dark/[0.2]" : category.icon.color,
                }}
              />
            </div>
          </label>
        );
      })}
    </Form>
  );
};
