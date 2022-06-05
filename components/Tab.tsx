type Props = {
  text: string;
  colorClass: string;
  isActive: boolean;
  onClick(): void;
};

const Tab: React.FC<Props> = ({ text, colorClass, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "text-white basis-full p-2 rounded-t-xl flex items-center justify-center transition-colors " +
        (isActive ? `h-12 ${colorClass}` : "h-10 bg-gray-400 hover:bg-black")
      }
    >
      {text}
    </button>
  );
};

export default Tab;
