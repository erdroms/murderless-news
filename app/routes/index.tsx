import { Form, Link, useSearchParams, useSubmit } from "@remix-run/react";
import { Page } from "~/components/containers/Page";
import { SEE_NO_EVIL } from "~/constants";
import { FilterContext } from "~/contexts/FilterContext";

export default function Index() {
  const submit = useSubmit();
  const [searchParams] = useSearchParams();

  const shownCategories = searchParams.getAll("show");

  return (
    <FilterContext.Consumer>
      {({ categories }) => (
        <Page>
          <h1 className="text-3xl">Welcome to Murderless News</h1>
          <p className="my-4">
            We've filtered out some Bad News Bears for you already {SEE_NO_EVIL}
            . If you would like to see any of these bad news categories, simply
            press the associated button!
          </p>

          <Form
            onChange={(e) => submit(e.currentTarget)}
            className="grid gap-y-4 justify-center"
          >
            {categories.map((category) => {
              const isHidden = !shownCategories.includes(category.id);
              return (
                <label
                  key={category.id}
                  className={`rounded-md p-4 bg-${
                    isHidden ? "slate-300" : "blue-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="show"
                    className="hidden"
                    value={category.id}
                  />
                  <span className="flex items-center text-white text-lg">
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

          <Link
            className="block rounded-md p-4 bg-red-300 mt-6 text-white"
            to={`/news/top?${searchParams.toString()}`}
          >
            Let's see some news!
          </Link>
        </Page>
      )}
    </FilterContext.Consumer>
  );
}
