"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import event from "/public/images/icon/event.png";
import analyze from "/public/images/icon/analyze.png";
import photoIcon from "/public/images/icon/photoIcon.png";
import gameIcon from "/public/images/icon/gameIcon.png";

type TabContent = {
  id: number;
  title: string;
  img: string;
  date: string;
  writer: string;
}[];

const TabACommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabContent, setTabContent] = useState<TabContent | any[]>([]);

  const tabs = [
    {
      label: "안구정화",
      typ: 2,
      icon: <Image src={photoIcon} width={20} height={20} alt="menuIcon" />,
    },
    {
      label: "이벤트",
      typ: 3,
      icon: <Image src={event} width={20} height={20} alt="menuIcon" />,
    },
    {
      label: "자유게시판",
      typ: 4,
      icon: <Image src={gameIcon} width={20} height={20} alt="menuIcon" />,
    },
    {
      label: "분석왕",
      typ: 5,
      icon: <Image src={analyze} width={20} height={20} alt="menuIcon" />,
    },
  ];

  useEffect(() => {
    const typMap = [6, 11, 9, 8];
    const typ = typMap[activeTab];
    let size = 5;
    if (activeTab == 0) {
      size = 4;
    }
    const fetchTabContent = async () => {
      try {
        const response = await fetch(
          `/api/board/list?typ=${typ}&keyword=&page=0&size=${size}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tab content");
        }

        const data = await response.json();
        let content = data.data.content;

        if (activeTab == 0) {
          content = content.map((item: any) => ({
            id: item.id,
            title: item.title,
            img: `/images/dog${(item.id % 4) + 1}.PNG`, // Adjust the image based on item id
            date: "24.06.12", // Placeholder for now, update if API has this field
            writer: item.username || "관리자",
          }));
        }

        setTabContent(content);
      } catch (error) {
        console.error("Error fetching tab content:", error);
      }
    };

    fetchTabContent();
  }, [activeTab]);

  useEffect(() => {
    console.log(tabContent, "탭컨텐츠");
  }, [tabContent]);

  return (
    <div className="truncate w-full bg-white rounded-2xl flex flex-col gap-5 border border-solid border-gray-200">
      <div className="w-full flex flex-col">
        {/* button */}
        <div className="h-12 px-3 flex justify-start items-center gap-1 rounded-t bg-[#FAFAFA]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`border-solid border rounded-2xl cursor-pointer font-semibold text-sm px-2 py-1 transition-all hover:text-blue
                ${
                  activeTab === index
                    ? "text-blue border-blue bg-[#F2F5FF]"
                    : "text-[#999999] border-[#999999]"
                }`}
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
          {activeTab === 0 ? (
            <div className="grid grid-cols-4 py-3">
              {(tabContent as TabContent).map((item, index) => (
                <Link
                  key={item.id}
                  href={`/sport/${item.id}`}
                  className="flex flex-col justify-evenly items-center gap-2 px-2 hover:bg-slate-200 hover:cursor-pointer"
                >
                  <img
                    className="h-24 rounded-md"
                    src={item.img}
                    alt={`Dog ${index + 1}`}
                  />
                  <div className="text-center w-full">
                    <div className="text-base font-semibold">{item.title}</div>
                    <div className="flex justify-center">
                      <span className="w-1/2 truncate text-xs text-gray-500">
                        {item.date}
                      </span>
                      <span className="w-1/2 truncate text-xs text-gray-500">
                        {item.writer}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            (tabContent as any[]).map((item, index) => (
              <Link
                key={index}
                href={`${
                  activeTab === 1
                    ? "/event"
                    : activeTab === 2
                      ? "/community/free"
                      : "/community/pickster"
                }/${item.id}`}
                className={`px-3 flex justify-between hover:bg-slate-200 hover:cursor-pointer ${
                  index !== (tabContent as any[]).length - 1
                    ? "border-b border-dashed border-slate-200"
                    : ""
                }`}
              >
                <div className="flex gap-2 items-center p-2">
                  <div className="text-sm font-medium">{item.title}</div>
                </div>
                <div className="flex justify-center items-center">06-13</div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TabACommunityPage;
