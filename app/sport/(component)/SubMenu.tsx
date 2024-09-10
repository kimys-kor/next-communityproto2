import SocIcon from "/public/images/icon/Msoccer.png";
import BaseIcon from "/public/images/icon/Mbase.png";
import BaskIcon from "/public/images/icon/Mbasketball.png";
import VolleyIcon from "/public/images/icon/Mvolleyball.png";
import Image from "next/image";
import Link from "next/link";

function SubMenu() {
  return (
    <div className="md:hidden w-full rounded-xl bg-white shadow-md flex justify-around px-3 py-2 text-sm font-medium">
      <div>
        <Link className="flex items-center gap-1" href={"/sport"}>
          <Image src={SocIcon} width={14} height={14} alt="menuIcon" />
          <p>축구분석</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/sport/base"}>
          <Image src={BaseIcon} width={14} height={14} alt="menuIcon" />
          <p>야구분석</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/sport/basket"}>
          <Image src={BaskIcon} width={14} height={14} alt="menuIcon" />
          <p>농구분석</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/sport/volley"}>
          <Image src={VolleyIcon} width={14} height={14} alt="menuIcon" />
          <p>배구분석</p>
        </Link>
      </div>
    </div>
  );
}

export default SubMenu;
