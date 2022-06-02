import { ReactNode, useContext } from "react";
import { UIContext } from "../context/UIContext";

type Props = {
  children: ReactNode;
};

const MainContainer: React.FC<Props> = ({ children }) => {
  const uiContext = useContext(UIContext);

  return (
    <main className="flex flex-col" style={{ height: `${uiContext.windowHeight}px` }}>
      {children}
    </main>
  );
};

export default MainContainer;
