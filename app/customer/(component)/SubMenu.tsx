import notice from "/public/images/icon/notice.png";
import inquiries from "/public/images/icon/inquiries.png";

import Image from "next/image";
import Link from "next/link";

function SubMenu() {
  const menuItems = [
    { href: "/customer", label: "공지사항", icon: notice },
    { href: "/customer/qalist", label: "1:1문의", icon: inquiries },
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
