import { Form, Link, useSearchParams, useSubmit } from "@remix-run/react";
import { Page } from "~/components/containers/Page";
import { Stabby } from "~/components/Stabby";
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
          <h1 className="text-3xl text-deep font-bold">
            <Stabby />
            <span className="ml-2">Murderless News</span>
          </h1>
          <div className="my-6">
            <p>
              We've filtered out some bad news for you already{" "}
              <span className="text-lg">{SEE_NO_EVIL}</span>.
            </p>
            <br />
            <p>
              If you <em>would</em> like to see any of these bad news
              categories, simply press the associated button!
            </p>
          </div>
          <Form
            onChange={(e) => submit(e.currentTarget)}
            className="grid gap-y-4 justify-center"
          >
            {categories.map((category) => {
              const isHidden = !shownCategories.includes(category.id);

              return (
                <label
                  key={category.id}
                  className={`rounded-md p-4  ${
                    isHidden ? "bg-grey" : "bg-teal"
                  }`}
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

          <div className="mt-10">
            <Link
              className="block rounded-md py-4 px-8 bg-mustard text-lg"
              to={`/news/top?${searchParams.toString()}`}
            >
              Let's see some news!
            </Link>
          </div>
        </Page>
      )}
    </FilterContext.Consumer>
  );
}
