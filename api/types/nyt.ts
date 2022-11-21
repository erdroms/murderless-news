import type { components, paths } from "../schemas/nyt";


export type NYTResponse = paths["/{section}.json"]['get']['responses'][200]["content"]["application/json"];
export type Article = components["schemas"]["Article"];
