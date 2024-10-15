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
import Image from "next/image";
import photoIcon from "/public/images/icon/photoIcon.png";
import event from "/public/images/icon/event.png";
import gameIcon from "/public/images/icon/gameIcon.png";
import analyze from "/public/images/icon/analyze.png";
import SocIcon from "/public/images/icon/Msoccer.png";
import BaseIcon from "/public/images/icon/Mbase.png";
import BaskIcon from "/public/images/icon/Mbasketball.png";
import VolleyIcon from "/public/images/icon/Mvolleyball.png";

export interface BoardItem {
  id: number;
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

export interface BoardItem2 {
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
