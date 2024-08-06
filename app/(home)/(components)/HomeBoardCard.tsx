import React from "react";
import { fetchMainBoardData } from "@/app/api/fetchDataWithDelay";

interface CardData {
  category: string;
  title: string;
  date: string;
  hit: number;
}

const HomeBoardCard = () => {
  const data: CardData[] = fetchMainBoardData();
  const dataLength = data.length;
  return (
    <div>
      <div className="w-full py-2 px-3 rounded-md bg-white font-semibold border-solid border-slate-200 border flex flex-col gap-1">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full py-2 flex justify-between items-center ${index !== dataLength - 1 ? "border-b border-slate-200 border-solid" : ""}`}
          >
            <div className="flex justify-center items-center gap-1">
              <span className="truncate border-solid border border-blue rounded-2xl cursor-pointer font-semibold text-blue text-xs px-[4px] py-[2px] transition-all">
                {item.category}
              </span>
              <p className="text-sm">{item.title}</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span className="truncate text-xs text-gray-500">
                {item.date}
              </span>
              <span className="truncate text-xs text-gray-500">
                조회수 {item.hit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBoardCard;
