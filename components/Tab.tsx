type Props = {
  text: string;
  isActive: boolean;
  onClick(): void;
};

const Tab: React.FC<Props> = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "text-white basis-full p-2 rounded-t-xl flex items-center justify-center transition-colors leading-4 focus-visible:outline-black " +
        (isActive ? `h-12 bg-gray-700` : "h-10 bg-gray-400 hover:bg-black")
      }
    >
      {text}
    </button>
  );
};

export default Tab;
