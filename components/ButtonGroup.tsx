type Props = {
  children: React.ReactNode;
};

const ButtonGroup: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-center mb-2 px-2 flex flex-col xs:flex-row gap-2 justify-center">
      {children}
    </div>
  );
};

export default ButtonGroup;
