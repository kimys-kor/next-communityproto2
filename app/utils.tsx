import Image from "next/image";
import photoIcon from "/public/images/icon/photoIcon.png";
import event from "/public/images/icon/event.png";
import gameIcon from "/public/images/icon/gameIcon.png";
import analyze from "/public/images/icon/analyze.png";
import SocIcon from "/public/images/icon/Msoccer.png";
import BaseIcon from "/public/images/icon/Mbase.png";
import BaskIcon from "/public/images/icon/Mbasketball.png";
import VolleyIcon from "/public/images/icon/Mvolleyball.png";
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

import { BoardItem } from "./types";
import { BoardItem2 } from "./types";
import { useUserStore } from "@/app/globalStatus/useUserStore";

export const categoryMap: { [key: number]: string } = {
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

export const fetchInitialBoardListData = async (
  typ: number,
  page: number,
  size: number
) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/guest/list?typ=${typ}&keyword=&page=${page}&size=${size}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch initial data");
    }

    const data = await response.json();
    const { content, totalElements } = data.data;

    return {
      content: content as BoardItem[],
      totalElements,
      page,
      size,
    };
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return {
      content: [],
      totalElements: 0,
      page: 0,
      size: 0,
    };
  }
};

export const fetchInitialCommunityData = async () => {
  const response = await fetch(
    `${process.env.API_URL}/guest/list?typ=6&keyword=&page=0&size=4`,
    { method: "GET" }
  );
  const data = await response.json();
  return data.data.content.map((item: any) => ({
    id: item.id,
    title: item.title,
    img: `/images/dog${(item.id % 4) + 1}.PNG`,
    date: "24.06.12",
    writer: item.username || "관리자",
  }));
};

export async function fetchInitialAnalyzeData(typ: number) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/guest/list?typ=${typ}&keyword=&page=0&size=5`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch initial data");
    }

    const data = await response.json();
    return data.data.content as BoardItem[];
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return [];
  }
}

export async function fetchBoardDayContent(
  // period: string = "day",
  // period: string = "week",
  period: string = "month",
  page: number = 0,
  size: number = 6
): Promise<BoardItem2[]> {
  try {
    const response = await fetch(
      `${process.env.API_URL}/guest/bestList?period=${period}&page=${page}&size=${size}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch best board list");
    }

    const data = await response.json();
    return data.data.content;
  } catch (error) {
    console.error("Error fetching board content:", error);
    return [];
  }
}

export async function fetchBoardWeekContent(
  // period: string = "week",
  period: string = "month",
  page: number = 0,
  size: number = 6
): Promise<BoardItem2[]> {
  try {
    const response = await fetch(
      `${process.env.API_URL}/guest/bestList?period=${period}&page=${page}&size=${size}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch best board list");
    }

    const data = await response.json();
    return data.data.content;
  } catch (error) {
    console.error("Error fetching board content:", error);
    return [];
  }
}

export async function fetchInitialPartnerData() {
  const response = await fetch(
    `${process.env.API_URL}/guest/partnerList?page=0&size=12`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch initial partner content");
  }

  const data = await response.json();
  return {
    boardList: data.data.content,
    totalElements: data.data.totalElements,
    totalPages: data.data.totalPages,
  };
}

export const fetchInitialBoardContent = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/guest/content?boardId=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch board content");
    }

    const data = await res.json();
    if (data.status !== "OK" || !data.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching board content:", error);
    return null;
  }
};

export const fetchInitialComments = async (
  boardId: string,
  page: number,
  size: number
) => {
  const res = await fetch(
    `${process.env.API_URL}/guest/list/comment?boardId=${boardId}&page=${page}&size=${size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  const data = await res.json();
  if (data.status !== "OK" || !data.data) {
    return null;
  }

  return data.data;
};

export const getPostUrl = (postType: number, id: number): string => {
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

export const tabsCommunity = [
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

export const tabsAnalyze = [
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

export const categoryIcons: { [key: number]: JSX.Element } = {
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

export const formatDate = (createdDt: string) => {
  const createdDate = new Date(createdDt);
  const now = new Date();
  const diffInMs = now.getTime() - createdDate.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else {
    const year = createdDate.getFullYear();
    const month = String(createdDate.getMonth() + 1).padStart(2, "0");
    const day = String(createdDate.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }
};
