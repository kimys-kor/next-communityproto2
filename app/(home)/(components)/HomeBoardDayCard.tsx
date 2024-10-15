"use client";
import { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import {
  FaFootballBall,
  FaBaseballBall,
  FaBasketballBall,
  FaVolleyballBall,
  FaCameraRetro,
  FaLaugh,
  FaCrown,
  FaComment,
  FaExclamationTriangle,
} from "react-icons/fa";
import Link from "next/link";

interface BoardItem {
  id: number;
  postType: number;
  username: string;
  nickname: string;
  userIp: string;
  title: string;
  hit: number;
  hate: number;
  likes: number;
  replyNum: number;
  createdDt: Date;
}

const categoryMap: { [key: number]: string } = {
  2: "축구분석",
  3: "야구분석",
  4: "농구분석",
  5: "배구분석",
  6: "안구정화",
  7: "유머이슈",
  8: "나는분석왕",
  9: "자유게시판",
  10: "피해사례",
};

// Icons for each category
const categoryIcons: { [key: number]: JSX.Element } = {
  2: <FaFootballBall />,
  3: <FaBaseballBall />,
  4: <FaBasketballBall />,
  5: <FaVolleyballBall />,
  6: <FaCameraRetro />,
  7: <FaLaugh />,
  8: <FaCrown />,
  9: <FaComment />,
  10: <FaExclamationTriangle />,
};

const categoryColors: { [key: number]: string } = {
  2: "#ff5733",
  3: "#33b5ff",
  4: "#ffb833",
  5: "#7a33ff",
  6: "#33ff57",
  7: "#ffc133",
  8: "#ff33a8",
  9: "#3399ff",
  10: "#ff3333",
};

const getPostUrl = (postType: number, id: number): string => {
  switch (postType) {
    case 2:
      return `/sport/${id}`;
    case 3:
      return `/sport/base/${id}`;
    case 4:
      return `/sport/basket/${id}`;
    case 5:
      return `/sport/volley/${id}`;
    case 6:
      return `/community/${id}`;
    case 7:
      return `/community/humor/${id}`;
    case 8:
      return `/community/pickster/${id}`;
    case 9:
      return `/community/free/${id}`;
    case 10:
      return `/community/case/${id}`;
    default:
      return `/unknown/${id}`;
  }
};

const HomeBoardDayCard = () => {
  const [boardList, setBoardList] = useState<BoardItem[]>([]);

  useEffect(() => {
    // const period = "day";
    const period = "week";
    const page = 0;
    const size = 6;

    const fetchBoardContent = async () => {
      try {
        const response = await fetch(
          `/api/board/bestList?period=${period}&page=${page}&size=${size}`,
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
        setBoardList(data.data.content);
      } catch (error) {
        console.error("Error fetching tab content:", error);
      }
    };

    fetchBoardContent();
  }, []);

  return (
    <div>
      <div className="w-full py-2 px-5 rounded-md bg-gradient-to-tl from-lightblue via-white to-lightblue font-semibold border-solid border-slate-200 border flex flex-col gap-1">
        {boardList.map((item, index) => (
          <div
            key={item.id}
            className={`w-full py-2 flex justify-between items-center transition-transform duration-200 ${
              index !== boardList.length - 1
                ? "border-b border-slate-200 border-solid"
                : ""
            } hover:bg-lightblue hover:scale-105`}
          >
            <div className="flex justify-center items-center gap-2">
              {/* <span
                className="flex items-center gap-1 border-solid border rounded-2xl cursor-pointer text-white text-xs px-[6px] py-[4px] transition-all"
                style={{
                  background: categoryColors[item.postType],
                }}
              >
                {categoryIcons[item.postType]}
                {categoryMap[item.postType]}
              </span> */}
              <span
                className="flex items-center gap-1 rounded-2xl cursor-pointer text-white text-xs px-[6px] py-[4px] transition-all shadow-lg"
                style={{
                  background: "linear-gradient(45deg, #AF41F0, #ec18ec)",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                {categoryIcons[item.postType]}
                {categoryMap[item.postType]}
              </span>
              <Link href={getPostUrl(item.postType, item.id)}>
                <p className="text-sm cursor-pointer hover:underline">
                  {item.title}
                </p>
              </Link>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="truncate text-xs text-gray-500 flex gap-1 items-center">
                <GrView color="gray" /> {item.hit}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBoardDayCard;
