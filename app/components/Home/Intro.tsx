import { SEE_NO_EVIL } from "~/constants";

export const Intro = () => {
  return (
    <div>
      <p className="mb-2">
        We've filtered out some bad news for you already{" "}
        <span className="text-lg">{SEE_NO_EVIL}</span>.
      </p>
      <p>
        If you{" "}
        <em>
          <b>would</b>
        </em>{" "}
        like to see any of these bad news categories, simply press the
        associated button (and beware)!
      </p>
    </div>
  );
};
