import { HEAR_NO_EVIL, SEE_NO_EVIL } from "~/constants";

interface HiddenArticlesCTAProps {
  hiddenCount?: number;
  show?: boolean;
  onToggle: () => void;
}

export const HiddenArticlesCTA = ({
  hiddenCount = 0,
  show = false,
  onToggle,
}: HiddenArticlesCTAProps) => {
  return (
    <div className="flex items-center">
      <Icon hidden={!show} />
      <div className="ml-2">
        <Title hidden={!show} count={hiddenCount} />
      </div>
      <div className="ml-auto flex-shrink-0">
        {hiddenCount === 0 ? (
          <p className="text-slate">You're so brave!</p>
        ) : (
          <Button hidden={!show} onClick={onToggle} />
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  hidden: boolean;
  count: number;
}
const Title = ({ hidden, count }: TitleProps) => {
  const message = hidden
    ? `${count} murdery articles were hidden`
    : "Eeek! Too scary!";

  return <p className="text-dark italic leading-tight">{message}</p>;
};

interface IconProps {
  hidden: boolean;
}
const Icon = ({ hidden }: IconProps) => {
  return (
    <span className="text-2xl">{hidden ? SEE_NO_EVIL : HEAR_NO_EVIL}</span>
  );
};

interface ButtonProps {
  hidden: boolean;
  onClick: () => void;
}

const Button = ({ hidden, onClick }: ButtonProps) => {
  return (
    <button className="underline text-blue-600" onClick={onClick}>
      {hidden ? "Feeling brave?" : "Hide them!"}
    </button>
  );
};