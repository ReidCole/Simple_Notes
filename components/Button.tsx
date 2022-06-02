import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  title?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<Props> = ({ className, children, onClick, title, type }) => {
  return (
    <button
      onClick={onClick}
      className={
        "text-black p-2 rounded-lg flex flex-row items-center justify-center hover:text-white hover:bg-black transition-colors focus-visible:outline-black " +
        className
      }
      title={title}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
