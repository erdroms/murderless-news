import { Link } from "@remix-run/react";
import { Stabby } from "./Stabby";

export const Header = () => {
  return (
    <header className="shadow-md flex justify-center p-2">
      <Link to="/">
        <h1 className="flex items-center text-3xl text-deep font-bold">
          <Stabby />
          <span className="inline-block ml-3">Murderless News</span>
        </h1>
      </Link>
    </header>
  );
};
