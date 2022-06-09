import React from "react";

type Props = {
  children: React.ReactNode;
};

const WidthContainer: React.FC<Props> = ({ children }) => {
  return <div className="md:max-w-xl w-full flex flex-col h-full mx-auto">{children}</div>;
};

export default WidthContainer;
