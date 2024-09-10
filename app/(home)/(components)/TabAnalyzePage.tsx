"use client";

import SocIcon from "/public/images/icon/Msoccer.png";
import BaseIcon from "/public/images/icon/Mbase.png";
import BaskIcon from "/public/images/icon/Mbasketball.png";
import VolleyIcon from "/public/images/icon/Mvolleyball.png";
import Image from "next/image";
import { useState } from "react";
import NewIcon from "@/app/components/NewIcon";
import HotIcon from "@/app/components/HotIcon";

const TabAnalyzePage = () => {
  const tabs = [
    {
      label: "축구 분석",
      content: ["축구1", "축구2", "축구3", "축구4", "축구5"],
      icon: <Image src={SocIcon} width={14} height={14} alt="menuIcon" />,
    },
    {
      label: "야구 분석",
      content: ["야구1", "야구2", "야구3", "야구4", "야구5"],
      icon: <Image src={BaseIcon} width={14} height={14} alt="menuIcon" />,
    },
    {
      label: "농구 분석",
      content: ["농구1", "농구2", "농구3", "농구4", "농구6"],
      icon: <Image src={BaskIcon} width={14} height={14} alt="menuIcon" />,
    },
    {
      label: "배구 분석",
      content: ["배구1", "배구2", "배구3", "배구4", "배구5"],
      icon: <Image src={VolleyIcon} width={14} height={14} alt="menuIcon" />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full truncate bg-white rounded-2xl flex flex-col gap-5 border border-solid border-gray-200">
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
    </div>
  );
};

export default TabAnalyzePage;
