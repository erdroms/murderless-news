import { SEE_NO_EVIL } from "~/constants";

export const Intro = () => {
  return (
    <div>
      <p>
        We've filtered out some bad news for you already{" "}
        <span className="text-lg">{SEE_NO_EVIL}</span>.
      </p>
      <br />
      <p>
        If you <em>would</em> like to see any of these bad news categories,
        simply press the associated button!
      </p>
    </div>
  );
};
