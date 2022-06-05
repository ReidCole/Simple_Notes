type Props = {
  text: string;
  colorClass: string;
  isActive: boolean;
};

const Tab: React.FC<Props> = ({ text, colorClass, isActive }) => {
  return (
    <button
      className={
        "text-white basis-full p-2 rounded-t-xl flex items-center justify-center " +
        (isActive ? `h-12 ${colorClass}` : "h-10 bg-gray-400")
      }
    >
      {text}
    </button>
  );
};

export default Tab;
