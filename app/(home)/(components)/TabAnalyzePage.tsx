import TabAnalyze from "./TabAnalyze";
import SocIcon from "/public/images/icon/Msoccer.png";
import BaseIcon from "/public/images/icon/Mbase.png";
import BaskIcon from "/public/images/icon/Mbasketball.png";
import VolleyIcon from "/public/images/icon/Mvolleyball.png";
import Image from "next/image";

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

  return (
    <div className="w-full truncate bg-white rounded-2xl flex flex-col gap-5 border border-solid border-gray-200">
      <TabAnalyze tabs={tabs}></TabAnalyze>
    </div>
  );
};

export default TabAnalyzePage;
