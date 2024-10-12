"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import noticeIcon from "/public/images/icon/noticeIcon.png";
import hotIcon from "/public/images/icon/hotIcon.png";
import Image from "next/image";

import HotIcon from "../HotIcon";

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

const NewPartnerCard: React.FC = () => {
  const [boardList, setBoardList] = useState<BoardItem[]>([]);

  useEffect(() => {
    const loadBoardList = async () => {
      const typ = 1;

      try {
        const response = await fetch(
          `/api/board/list?typ=${typ}&keyword=&page=0&size=11`,
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
        setBoardList(data.data.content);
      } catch (error) {
        console.error("Failed to load board list:", error);
      }
    };

    loadBoardList();
  }, []);

  return (
    <div className="w-full rounded-md bg-white font-semibold border-solid border-slate-200 border">
      <div className="h-11 px-3 leading-8 flex justify-between items-center border-solid border-b border-gray-200">
        <div className="flex gap-2 justify-center items-center">
          <Image src={noticeIcon} width={27} height={27} alt="menuIcon" />
          <h1 className="text-lg font-bold">파트너</h1>
        </div>
        <div className="group cursor-pointer bg-semiblue w-6 h-6 flex justify-center items-center rounded-full hover:bg-blue">
          <svg
            width="13"
            height="13"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-blue group-hover:text-white transition-colors cursor-pointer"
          >
            <rect x="45" y="10" width="10" height="80" />
            <rect x="10" y="45" width="80" height="10" />
          </svg>
        </div>
      </div>
      {boardList.map((item, index) => (
        <div
          key={item.id}
          className={`w-full h-10 px-3 flex justify-between items-center  transition-all ${
            index !== boardList.length - 1
              ? "border-b border-dashed border-slate-200"
              : ""
          } hover:bg-blue-50`}
        >
          <div className="flex gap-2">
            {/* <span
              className="flex items-center gap-1 border-solid border border-[#2cddb7] rounded-2xl cursor-pointer text-white text-xs px-[6px] py-[4px] transition-all shadow-lg"
              style={{
                background: "linear-gradient(45deg, #2cddb7, #00d8ff)",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              파트너
            </span> */}
            {/* <Image src={hotIcon} width={20} height={20} alt="hotIcon" /> */}
            <HotIcon />
            <span className="flex justify-start items-center gap-2">
              <Link href={`/post/${item.id}`}>
                <p className="truncate text-sm cursor-pointer hover:underline">
                  {item.title}
                </p>
              </Link>
              <span className="truncate text-red-500 text-[10px] flex justify-center items-center">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-blue"
                >
                  <rect x="45" y="10" width="10" height="80" />
                  <rect x="10" y="45" width="80" height="10" />
                </svg>
                <span className="text-blue font-bold text-xs">
                  {item.replyNum}
                </span>
              </span>
            </span>
          </div>
          <p className="text-sm">{item.nickname}</p>
        </div>
      ))}
    </div>
  );
};

export default NewPartnerCard;
