import { useState } from "react";
import Tab from "./Tab";

type Props = {
  tabs: TabType[];
};

type TabType = {
  text: string;
  colorClass: string;
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-row px-2 gap-2 border-b border-black h-16 items-end">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          text={tab.text}
          colorClass={tab.colorClass}
          isActive={activeIndex === index}
        />
      ))}
    </div>
  );
};

export default Tabs;
