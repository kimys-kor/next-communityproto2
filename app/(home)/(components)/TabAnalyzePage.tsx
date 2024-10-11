"use client";
import { useEffect } from "react";
import SocIcon from "/public/images/icon/Msoccer.png";
import BaseIcon from "/public/images/icon/Mbase.png";
import BaskIcon from "/public/images/icon/Mbasketball.png";
import VolleyIcon from "/public/images/icon/Mvolleyball.png";
import Image from "next/image";
import { useState } from "react";
import NewIcon from "@/app/components/NewIcon";
import HotIcon from "@/app/components/HotIcon";
import Link from "next/link";

// Define the interface for board items
interface BoardItem {
  id: number;
  username: string;
  nickname: string;
  userIp: string;
  title: string;
  hit: number;
  hate: number;
  likes: number;
  replyNum: number;
}

const TabAnalyzePage = () => {
  const tabs = [
    {
      label: "축구 분석",
      icon: <Image src={SocIcon} width={14} height={14} alt="menuIcon" />,
    },
    {
      label: "야구 분석",
      icon: <Image src={BaseIcon} width={14} height={14} alt="menuIcon" />,
    },
    {
      label: "농구 분석",
      icon: <Image src={BaskIcon} width={14} height={14} alt="menuIcon" />,
    },
    {
      label: "배구 분석",
      icon: <Image src={VolleyIcon} width={14} height={14} alt="menuIcon" />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [boardList, setBoardList] = useState<BoardItem[]>([]); // Specify the type here

  useEffect(() => {
    const loadBoardList = async () => {
      const typMap = [2, 3, 4, 5]; // Map activeTab to types
      const typ = typMap[activeTab]; // Get the corresponding typ value

      try {
        const response = await fetch(
          `/api/board/list?typ=${typ}&keyword=&page=0&size=5`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching board list");
        }

        const data = await response.json();
        setBoardList(data.data.content); // Adjust according to your API response structure
      } catch (error) {
        console.error("Failed to load board list:", error);
      }
    };

    loadBoardList();
  }, [activeTab]); // Trigger API call on activeTab change

  useEffect(() => {
    console.log(boardList, "보드리스트");
  }, [boardList]);

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
          {boardList.map((item) => (
            <Link
              key={item.id}
              href={
                activeTab === 0
                  ? `/sport/${item.id}`
                  : activeTab === 1
                    ? `/sport/base/${item.id}`
                    : activeTab === 2
                      ? `/sport/basket/${item.id}`
                      : `/sport/volley/${item.id}`
              }
            >
              <div
                className={`px-3 flex justify-between hover:bg-slate-200 hover:cursor-pointer ${
                  item.id !== boardList[boardList.length - 1]?.id
                    ? "border-b border-dashed border-slate-200"
                    : ""
                }`}
              >
                <div className={`flex gap-2 items-center p-2`}>
                  <NewIcon />
                  <HotIcon />
                  <div className="text-sm font-medium">{item.title}</div>
                </div>
                <div className="flex justify-center items-center">06-13</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabAnalyzePage;
