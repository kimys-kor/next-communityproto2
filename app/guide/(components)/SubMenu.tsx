import money from "/public/images/icon/money.png";
import passIcon from "/public/images/passIcon.png";
import question from "/public/images/question.png";

import Image from "next/image";
import Link from "next/link";

function SubMenu() {
  return (
    <div className="md:hidden w-full rounded-xl bg-white shadow-md flex justify-around px-3 py-2 text-sm font-medium">
      <div>
        <Link className="flex items-center gap-1" href={"/guide"}>
          <Image src={money} width={20} height={20} alt="menuIcon" />
          <p>꽁머니</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/guide/major"}>
          <Image src={question} width={20} height={20} alt="menuIcon" />
          <p>메이저</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/guide/safe"}>
          <Image src={passIcon} width={20} height={20} alt="menuIcon" />
          <p>안전놀이터</p>
        </Link>
      </div>
    </div>
  );
}

export default SubMenu;
