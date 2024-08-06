"use client";

import { useState } from "react";
import NewIcon from "../../components/NewIcon";
import HotIcon from "../../components/HotIcon";

type Tab = {
  label: string;
  content: string[];
  icon: React.ReactNode;
};

const TabAnalyze: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col">
      {/* button */}
      <div className="h-12 px-3 flex justify-start items-center gap-1 rounded-t bg-[#FAFAFA]">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`border-solid border rounded-2xl cursor-pointer font-semibold text-sm px-2 py-1 transition-all hover:text-blue
              ${activeTab === index ? "text-blue border-blue bg-[#F2F5FF]" : "text-[#999999] border-[#999999]"}
            `}
            onClick={() => setActiveTab(index)}
          >
            <div className="flex justify-center items-center gap-1">
              {tab.icon}
              {tab.label}
            </div>
          </div>
        ))}
      </div>
      {/* content */}
      <div className="text-sm w-full">
        {tabs[activeTab].content.map((title, index) => (
          <div
            key={index}
            className={`px-3 flex justify-between hover:bg-slate-200 hover:cursor-pointer ${index !== tabs[activeTab].content.length - 1 ? "border-b border-dashed border-slate-200" : ""}`}
          >
            <div className={`flex gap-2 items-center p-2`}>
              <NewIcon />
              <HotIcon />
              <div className="text-sm font-medium">{title}</div>
            </div>
            <div className="flex justify-center items-center">06-13</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabAnalyze;
