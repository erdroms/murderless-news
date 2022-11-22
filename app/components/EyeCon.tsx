interface EyeConProps {
  isOpen: boolean;
  color?: `text-${string}`;
}

export const EyeCon = ({ isOpen, color }: EyeConProps) => (
  <i
    className={`${
      isOpen ? "ri-eye-line" : "ri-eye-close-line"
    } text-2xl ${color}`}
  />
);
