"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import noticeIcon from "/public/images/icon/noticeIcon.png";
import Image from "next/image";

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

const categoryMap: { [key: string]: string } = {
  notice: "공지",
};

const Card: React.FC = () => {
  const [boardList, setBoardList] = useState<BoardItem[]>([]);

  useEffect(() => {
    const loadBoardList = async () => {
      const typ = 17;

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
          <h1 className="text-lg font-bold">공지사항</h1>
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
          className={`w-full h-10 px-3 flex justify-start items-center gap-2 transition-all ${
            index !== boardList.length - 1
              ? "border-b border-dashed border-slate-200"
              : ""
          } hover:bg-blue-50`}
        >
          <p className="hidden lg:block truncate p-1 border-solid text-blue border-blue border rounded-xl text-xs font-bold">
            공지사항
          </p>
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
                className="fill-current text-red-500"
              >
                <rect x="45" y="10" width="10" height="80" />
                <rect x="10" y="45" width="80" height="10" />
              </svg>
              <span className="text-red-500 font-bold text-xs">
                {item.replyNum}
              </span>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Card;
