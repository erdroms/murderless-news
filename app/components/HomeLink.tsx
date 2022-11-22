import { InternalLink } from "./InternalLink";

export const HomeLink = () => (
  <InternalLink
    to="/"
    text="Home"
    icon={{ name: "ri-arrow-left-fill", position: "leading" }}
  />
);
