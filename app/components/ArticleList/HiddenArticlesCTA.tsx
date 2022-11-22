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
    <div className="flex">
      <Icon hidden={!show} />
      <div className="ml-4">
        <Title hidden={!show} count={hiddenCount} />
        <Button hidden={!show} onClick={onToggle} />
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
    : "Ack! Too scary!";

  return <p className="my-2 text-lg leading-tight">{message}</p>;
};

interface IconProps {
  hidden: boolean;
}
const Icon = ({ hidden }: IconProps) => {
  return (
    <span className="text-3xl">{hidden ? SEE_NO_EVIL : HEAR_NO_EVIL}</span>
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
