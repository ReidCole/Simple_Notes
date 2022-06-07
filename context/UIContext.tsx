import React, { useEffect, useState } from "react";

export const UIContext = React.createContext<ContextType>({
  windowHeight: 0,
});

type Props = {
  children: React.ReactNode;
};

const UIContextProvider: React.FC<Props> = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    function callback() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", callback);
    callback();
    return () => window.removeEventListener("resize", callback);
  }, []);

  if (windowHeight === 0) return <></>;

  const value = {
    windowHeight: windowHeight,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

type ContextType = {
  windowHeight: number;
};

export default UIContextProvider;
