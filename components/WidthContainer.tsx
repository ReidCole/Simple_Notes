import React from "react";

type Props = {
  children: React.ReactNode;
};

const WidthContainer: React.FC<Props> = ({ children }) => {
  return <div className="md:max-w-xl mx-auto w-full flex flex-col h-full">{children}</div>;
};

export default WidthContainer;
