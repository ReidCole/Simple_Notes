import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  title?: string;
};

const Button: React.FC<Props> = ({ className, children, onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className={
        "text-black p-2 rounded-lg flex flex-row items-center justify-center hover:text-white hover:bg-black transition-colors " +
        className
      }
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
