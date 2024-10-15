import { TabACommunityClient } from "./TabCommunityClient";
import photoIcon from "/public/images/icon/photoIcon.png";
import event from "/public/images/icon/event.png";
import gameIcon from "/public/images/icon/gameIcon.png";
import analyze from "/public/images/icon/analyze.png";
import Image from "next/image";

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

const fetchInitialData = async () => {
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

const TabACommunityPage = async () => {
  const initialData = await fetchInitialData();
  return (
    <TabACommunityClient initialTab={0} initialData={initialData} tabs={tabs} />
  );
};

export default TabACommunityPage;
