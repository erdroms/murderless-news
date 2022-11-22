import React, { useContext } from "react";
import type { FilterCategory } from "~/constants";

export const FilterContext = React.createContext({
  categories: [] as FilterCategory[],
  updateCategories: (categories: FilterCategory[]) => {},
});

export const useFilterContext = () => useContext(FilterContext);
