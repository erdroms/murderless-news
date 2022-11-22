import { Form, useSubmit } from "@remix-run/react";
import type { FilterCategory } from "~/constants";

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

        return (
          <label
            key={category.id}
            className={`rounded-md p-4  ${isHidden ? "bg-grey" : "bg-teal"}`}
          >
            <input
              type="checkbox"
              name="show"
              className="hidden"
              value={category.id}
              defaultChecked={!isHidden}
            />
            <span className="flex items-center text-dark text-lg">
              <i
                className={`${
                  isHidden ? "ri-eye-close-line" : "ri-eye-line"
                } text-2xl`}
              />
              <span className="ml-4">{category.title}</span>
            </span>
          </label>
        );
      })}
    </Form>
  );
};
