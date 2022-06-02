type Props = {
  children: string;
};

const PageHeading: React.FC<Props> = ({ children }) => {
  return <h1 className="text-2xl font-bold text-center my-2">{children}</h1>;
};

export default PageHeading;
