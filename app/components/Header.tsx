import { Stabby } from "./Stabby";

export const Header = () => {
  return (
    <div>
      <h1 className="text-3xl text-deep font-bold">
        <Stabby />
        <span className="ml-2">Murderless News</span>
      </h1>
    </div>
  );
};
