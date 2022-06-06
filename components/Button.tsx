import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  title?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  enabledClasses?: string;
};

const Button: React.FC<Props> = ({
  className,
  enabledClasses,
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
        (disabled
          ? "bg-gray-200 text-gray-700"
          : `hover:text-white hover:hover-hover:bg-black ${enabledClasses}`)
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
