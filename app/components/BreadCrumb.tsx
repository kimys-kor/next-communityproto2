"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  title: string;
  subMenu: string;
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
    <nav className="w-full bg-white rounded-2xl flex items-center">
      <div className="h-9 md:h-12 font-bold bg-mediumblue w-1/5 rounded-l-2xl flex justify-center items-center text-white">
        <p className="tracking-wider text-sm md:text-xl font-medium">
          {breadcrumbData.title}
        </p>
      </div>
      <div className="h-9 md:h-12 border-solid border-mediumblue border-4 w-4/5 px-10 flex items-center rounded-r-2xl gap-10 ">
        <span
          className={`text-sm font-medium md:text-xl text-center truncate cursor-pointer  hover:text-mediumblue text-mediumblue`}
        >
          {breadcrumbData.subMenu}
        </span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
