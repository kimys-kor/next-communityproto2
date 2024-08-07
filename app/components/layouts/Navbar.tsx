"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BurgerIcon from "/public/images/icon/burgerIcon.svg";
import WaIcon from "/public/images/icon/waIcon.svg";
import MedalIcon from "/public/images/icon/medalIcon.svg";
import TvIcon from "/public/images/icon/tvIcon.svg";

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

  const links = [
    {
      href: "/partner",
      label: "파트너",
      icon: <WaIcon className="hidden lg:block" />,
      width: "w-20 md:w-24 lg:w-32",
    },
    {
      href: "/sport",
      label: "스포츠분석",
      dropdown: [
        { href: "/sport", label: "축구분석" },
        { href: "/sport/base", label: "야구분석" },
        { href: "/sport/basket", label: "농구분석" },
        { href: "/sport/volley", label: "배구분석" },
        { href: "/sport/hockey", label: "하키분석" },
      ],
      icon: <MedalIcon className="hidden lg:block" />,
      width: "w-20 md:w-24 lg:w-32",
    },
    {
      href: "/community",
      label: "커뮤니티",
      dropdown: [
        { href: "/community", label: "안구정화" },
        { href: "/community/humor", label: "유머 & 이슈" },
        { href: "/community/pickster", label: "나는분석왕" },
        { href: "/community/free", label: "자유게시판" },
        { href: "/community/case", label: "피해사례" },
      ],
      icon: <TvIcon className="hidden lg:block absolute top-2 right-0" />,
      width: "w-20 md:w-24 lg:w-32",
    },
    {
      href: "/event",
      label: "이벤트",
      dropdown: [
        { href: "/event", label: "이벤트" },
        { href: "/event/attd", label: "출석체크" },
      ],
      width: "w-20 md:w-24 lg:w-24",
    },
    {
      href: "/promotion",
      label: "홍보센터",
      dropdown: [
        { href: "/promotion", label: "일반홍보" },
        { href: "/promotion/ggong", label: "꽁머니홍보" },
        { href: "/promotion/hunting", label: "구인구직" },
      ],
      width: "w-20 md:w-24 lg:w-24",
    },
    {
      href: "/guide",
      label: "가이드",
      dropdown: [
        { href: "/guide/ggong", label: "꽁머니" },
        { href: "/guide/major", label: "메이저" },
        { href: "/guide/safe", label: "안전놀이터" },
        { href: "/guide/proto", label: "프로토" },
        { href: "/guide/power", label: "파워볼" },
      ],
      width: "w-20 md:w-24 lg:w-24",
    },
    {
      href: "/customer",
      label: "고객센터",
      dropdown: [
        { href: "/customer", label: "공지사항" },
        { href: "/customer/qalist", label: "1:1 문의" },
      ],
      width: "w-20 md:w-24 lg:w-24",
    },
  ];

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const isActiveLink = (link: string) => {
    if (activeLink === link) return true;
    if (link === "/guide" && activeLink.startsWith("/guide")) return true;
    if (link === "/verify" && activeLink.startsWith("/verify")) return true;
    if (link === "/sport" && activeLink.startsWith("/sport")) return true;
    if (link === "/pickster" && activeLink.startsWith("/pickster")) return true;
    if (link === "/community" && activeLink.startsWith("/community"))
      return true;
    if (link === "/event" && activeLink.startsWith("/event")) return true;
    if (link === "/promotion" && activeLink.startsWith("/promotion"))
      return true;
    if (link === "/customer" && activeLink.startsWith("/customer")) return true;
    return false;
  };

  return (
    <div className="px-2">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-full h-20 px-1">
        <ul className="flex w-full h-20 rounded-lg text-center pl-1">
          <li className="w-5 h-20 relative group cursor-pointe flex flex-col justify-center items-center box-border">
            <BurgerIcon className="cursor-pointer" />
          </li>
          {links.map((link, index) => (
            <li
              key={index}
              className="h-20 relative group cursor-pointer flex flex-col justify-center items-center box-border"
            >
              <Link
                key={link.href}
                href={link.href}
                className={`relative ${link.width} h-14 truncate text-lg cursor-pointer transition-all flex justify-center items-center gap-1 duration-300 ease-in-out menu-hover hover:text-red-500 ${
                  isActiveLink(link.href) ? "text-red-500" : "text-black"
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                <div className="font-bold">{link.label}</div>
                <div>{link.icon ? link.icon : null}</div>
              </Link>
              <ul className="border border-t border-red-text-red-500">
                {link.dropdown && (
                  <li
                    className={`mt-[1px] w-24 lg:w-32 left-[0px] invisible absolute z-50 flex flex-col bg-white text-black shadow-xl group-hover:visible`}
                  >
                    {link.dropdown.map((sublink, index) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className={`outline-white w-full block p-2 text-base lg:text-base hover:bg-gray-700 hover:text-white 
                ${index === link.dropdown.length - 1 ? "" : "border-b border-solid border-slate-200"}`}
                        onClick={() => handleLinkClick(sublink.href)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex justify-around items-center gap-2 relative">
          <Link
            href={"/login"}
            className="w-12 text-sm font-semibold text-gray-400 hover:text-red-500"
          >
            로그인
          </Link>
          <Link
            href={"/signup"}
            className="w-16 text-sm font-semibold text-gray-400 hover:text-red-500"
          >
            회원가입
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation (Scrollable) */}
      <nav className="md:hidden w-full bg-indigo-500/75 font-medium text-sm text-white overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-indigo-600 ">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`px-2 py-2 flex-shrink-0 transition-colors duration-200 hover:bg-indigo-600 hover:text-white`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
