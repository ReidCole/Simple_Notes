import { useState } from "react";
import Tab from "./Tab";

type Props = {
  tabs: TabType[];
  activeIndex: number;
  setActiveIndex(index: number): void;
};

type TabType = {
  text: string;
};

const Tabs: React.FC<Props> = ({ tabs, activeIndex, setActiveIndex }) => {
  return (
    <div className="w-full flex flex-row px-2 gap-2 border-b border-black h-16 items-end">
      {tabs.map((tab, index) => (
        <Tab
          key={tab.text}
          text={tab.text}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default Tabs;
