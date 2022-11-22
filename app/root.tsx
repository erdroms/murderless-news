import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import type { FilterCategory } from "./constants";
import { DEFAULT_FILTER_CATEGORIES } from "./constants";
import { FilterContext } from "./contexts/FilterContext";
import styles from "./styles/app.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Murderless News",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [filterCategories, setFilterCategories] = useState<FilterCategory[]>(
    DEFAULT_FILTER_CATEGORIES
  );

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <FilterContext.Provider
            value={{
              categories: filterCategories,
              updateCategories: setFilterCategories,
            }}
          >
            <Outlet />
          </FilterContext.Provider>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
