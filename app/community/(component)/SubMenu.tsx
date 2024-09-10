import photo from "/public/images/icon/photoIgalIcon.png";
import humor from "/public/images/icon/humor.png";
import analyze from "/public/images/icon/analyze.png";
import community from "/public/images/icon/community.png";
import reasearch from "/public/images/icon/reasearch.png";
import Image from "next/image";
import Link from "next/link";

function SubMenu() {
  return (
    <div className="md:hidden w-full rounded-xl bg-white shadow-md flex flex-wrap justify-between px-3 py-2 text-sm font-medium">
      <div>
        <Link className="flex items-center gap-1" href={"/community"}>
          <Image src={photo} width={20} height={20} alt="menuIcon" />
          <p>안구정화</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/community/humor"}>
          <Image src={humor} width={20} height={20} alt="menuIcon" />
          <p>유머&이슈</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/community/pickster"}>
          <Image src={analyze} width={20} height={20} alt="menuIcon" />
          <p>나는분석왕</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/community/case"}>
          <Image src={reasearch} width={20} height={20} alt="menuIcon" />
          <p>피해사례</p>
        </Link>
      </div>
    </div>
  );
}

export default SubMenu;
