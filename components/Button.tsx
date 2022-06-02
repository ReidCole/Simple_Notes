import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  title?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  className,
  children,
  onClick,
  title,
  type,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        className +
        " p-2 rounded-lg flex flex-row items-center justify-center transition-colors focus-visible:outline-black " +
        (disabled ? "bg-gray-200 text-gray-500" : "hover:text-white hover:bg-black")
      }
      title={title}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
