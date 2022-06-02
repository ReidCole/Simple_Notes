import { ChangeEventHandler } from "react";

type Props = {
  className?: string;
  type?: string;
  title?: string;
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  name: string;
};

const Input: React.FC<Props> = ({
  className,
  type,
  title,
  placeholder,
  value,
  onChange,
  required = false,
  name,
}) => {
  return (
    <input
      type={type}
      title={title}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={
        "bg-gray-200 w-full border border-gray-300 rounded-lg focus-visible:outline-none focus-visible:border-gray-600 resize-none p-2 transition-colors placeholder:text-gray-500 " +
        className
      }
    />
  );
};

export default Input;
