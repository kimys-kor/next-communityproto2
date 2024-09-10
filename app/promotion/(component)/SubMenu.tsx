import promotion from "/public/images/icon/promotion.png";
import money from "/public/images/icon/money.png";
import people from "/public/images/icon/people.png";

import Image from "next/image";
import Link from "next/link";

function SubMenu() {
  return (
    <div className="md:hidden w-full rounded-xl bg-white shadow-md flex justify-around px-3 py-2 text-sm font-medium">
      <div>
        <Link className="flex items-center gap-1" href={"/promotion"}>
          <Image src={promotion} width={20} height={20} alt="menuIcon" />
          <p>일반홍보</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/promotion/ggong"}>
          <Image src={money} width={20} height={20} alt="menuIcon" />
          <p>꽁머니홍보</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/promotion/hunting"}>
          <Image src={people} width={20} height={20} alt="menuIcon" />
          <p>구인구직</p>
        </Link>
      </div>
    </div>
  );
}

export default SubMenu;
