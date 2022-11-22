export interface LinkComponentProps {
  text: string;
  icon?: LinkComponentIconProps;
}

export const LinkComponent = ({ icon, text }: LinkComponentProps) => {
  return (
    <span className="flex items-center">
      <span className="link">{text}</span>
      {icon && <LinkComponentIcon {...icon} />}
    </span>
  );
};

interface LinkComponentIconProps {
  name: string;
  position?: "leading" | "trailing";
}

export const LinkComponentIcon = ({
  name,
  position = "trailing",
}: LinkComponentIconProps) => {
  const isLeading = position === "leading";

  return (
    <i
      className={`${name} ${
        isLeading ? "mr-1 order-first" : "ml-1"
      } link no-underline translate-y-[0.05rem]`}
    />
  );
};
