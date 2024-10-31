import SocIcon from "/public/images/icon/Msoccer.png";
import BaseIcon from "/public/images/icon/Mbase.png";
import BaskIcon from "/public/images/icon/Mbasketball.png";
import VolleyIcon from "/public/images/icon/Mvolleyball.png";
import Image from "next/image";
import Link from "next/link";

function SubMenu() {
  const menuItems = [
    { href: "/sport", label: "해외축구분석", icon: SocIcon },
    { href: "/sport/asia", label: "아시아축구분석", icon: SocIcon },
    { href: "/sport/mlb", label: "MLB분석", icon: BaseIcon },
    { href: "/sport/baseball", label: "KBO/NPB분석", icon: BaseIcon },
    { href: "/sport/nba", label: "NBA분석", icon: BaskIcon },
    { href: "/sport/basket", label: "국내외농구분석", icon: BaskIcon },
    { href: "/sport/volley", label: "배구분석", icon: VolleyIcon },
  ];

  return (
    <div className="relative md:hidden w-full rounded-xl bg-white shadow-md px-3 py-1 text-base font-medium">
      <div className="flex flex-wrap justify-around gap-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 w-1/2 sm:w-auto py-2 transform transition-transform duration-200 px-2 hover:bg-gray-100 rounded-lg"
          >
            <Link href={item.href} className="flex items-center gap-2">
              <Image src={item.icon} width={18} height={18} alt="menuIcon" />
              <p className="text-sm sm:text-base">{item.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubMenu;
