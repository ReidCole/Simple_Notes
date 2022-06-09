import React from "react";

type Props = {
  children: React.ReactNode;
};

const WidthContainer: React.FC<Props> = ({ children }) => {
  return <div className="max-w-xl">{children}</div>;
};

export default WidthContainer;
