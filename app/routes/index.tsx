import { Link, useSearchParams } from "@remix-run/react";
import { Page } from "~/components/Page";
import { Filters } from "~/components/Home/Filters";
import { Intro } from "~/components/Home/Intro";
import { FilterContext } from "~/contexts/FilterContext";

export default function Index() {
  const [searchParams] = useSearchParams();
  const shownCategories = searchParams.getAll("show");

  return (
    <FilterContext.Consumer>
      {({ categories }) => (
        <Page>
          <div className="mx-4">
            <div className="my-6">
              <Intro />
            </div>

            <Filters
              categories={categories}
              shownCategories={shownCategories}
            />

            <div className="mt-12 text-center">
              <Link
                className="rounded-md py-4 px-12 bg-mustard text-lg"
                to={`/news/top?${searchParams.toString()}`}
              >
                Let's see some news!
              </Link>
            </div>
          </div>
        </Page>
      )}
    </FilterContext.Consumer>
  );
}
