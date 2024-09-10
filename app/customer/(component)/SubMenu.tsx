import notice from "/public/images/icon/notice.png";
import inquiries from "/public/images/icon/inquiries.png";

import Image from "next/image";
import Link from "next/link";

function SubMenu() {
  return (
    <div className="md:hidden w-full rounded-xl bg-white shadow-md flex justify-around px-3 py-2 text-sm font-medium">
      <div>
        <Link className="flex items-center gap-1" href={"/customer"}>
          <Image src={notice} width={20} height={20} alt="menuIcon" />
          <p>공지사항</p>
        </Link>
      </div>
      <div>
        <Link className="flex items-center gap-1" href={"/customer/qalist"}>
          <Image src={inquiries} width={20} height={20} alt="menuIcon" />
          <p>1:1문의</p>
        </Link>
      </div>
    </div>
  );
}

export default SubMenu;
