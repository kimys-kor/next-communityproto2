"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface sbuMenu {
  name: string;
  href: string;
}

interface BreadcrumbItem {
  title: string;
  subMenu: sbuMenu[];
}

interface BreadcrumbProps {
  breadcrumbData: BreadcrumbItem;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbData }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined" && pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

  return (
    <nav className="w-full bg-white rounded-2xl shadow-md flex items-center">
      <div className="h-12 font-bold bg-indigo-400 w-1/5 rounded-l-2xl flex justify-center items-center text-white">
        <p className="tracking-wider text-[1.25rem]">{breadcrumbData.title}</p>
      </div>
      <div className="border-solid border-indigo-400 border-4 w-4/5 h-12 flex items-center rounded-r-2xl gap-10 pl-10">
        {breadcrumbData.subMenu.map((item, index) => (
          <Link key={index} href={item.href}>
            <span
              className={`cursor-pointer border-b-2 border-solid  hover:text-fuchsia-500 hover:border-fuchsia-400 ${
                activeLink === item.href
                  ? "text-fuchsia-500 border-fuchsia-400"
                  : "text-gray-700 border-transparent"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
