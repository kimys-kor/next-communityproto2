"use client";

import { useState } from "react";
import Login from "../login/Login";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdRefresh } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";

import partnerIcon from "/public/images/partnerIcon.png";
import sportIcon from "/public/images/sportIcon.png";
import commuIcon from "/public/images/commuIcon.png";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  {
    href: "/partner",
    label: "파트너",
    icon: (
      <Image
        src={partnerIcon}
        width={33}
        height={33}
        alt="menuIcon"
        className="hidden lg:block"
      />
    ),
  },
  {
    href: "/sport",
    label: "스포츠분석",
    dropdown: [
      { href: "/sport", label: "축구분석" },
      { href: "/sport/base", label: "야구분석" },
      { href: "/sport/basket", label: "농구분석" },
      { href: "/sport/volley", label: "배구분석" },
    ],
    icon: (
      <Image
        src={sportIcon}
        width={33}
        height={33}
        alt="menuIcon"
        className="hidden lg:block"
      />
    ),
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
    icon: (
      <Image
        src={commuIcon}
        width={33}
        height={33}
        alt="menuIcon"
        className="hidden lg:block"
      />
    ),
  },
  {
    href: "/event",
    label: "이벤트",
  },
  {
    href: "/promotion",
    label: "홍보센터",
    dropdown: [
      { href: "/promotion", label: "일반홍보" },
      { href: "/promotion/ggong", label: "꽁머니홍보" },
      { href: "/promotion/hunting", label: "구인구직" },
    ],
  },
  {
    href: "/guide",
    label: "가이드",
    dropdown: [
      { href: "/guide/ggong", label: "꽁머니" },
      { href: "/guide/major", label: "메이저" },
      { href: "/guide/safe", label: "안전놀이터" },
    ],
  },
  {
    href: "/customer",
    label: "고객센터",
    dropdown: [
      { href: "/customer", label: "공지사항" },
      { href: "/customer/qalist", label: "1:1 문의" },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 shadow-lg bg-white rounded-r-xl transform transition-transform duration-300 overflow-y-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section className="bg-mediumblue border-b-2 border-blue-600 w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center p-2 ">
          <p className="text-white text-2xl">
            꽁머니팡:꽁머니 스포츠분석 안전놀이터
          </p>
          <button className="p-2" onClick={onClose}>
            <IoCloseSharp color="white" size={30} />
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="w-full table border-collapse">
          <ul className="w-full table-row mb-4">
            <li
              className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
              onClick={() => setActiveTab(1)}
            >
              <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue py-3 px-2">
                <GiHamburgerMenu size={20} />
                <p className="text-base ">메뉴</p>
              </div>
            </li>
            <li
              className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
              onClick={() => setActiveTab(2)}
            >
              <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue py-3 px-2">
                <IoMdRefresh size={22} />
                <p className="text-base ">새글</p>
              </div>
            </li>
            <li
              className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
              onClick={() => setActiveTab(2)}
            >
              <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue ">
                <FaSearch size={20} />
                <p className="text-base ">검색</p>
              </div>
            </li>
            <li
              className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
              onClick={handleMoreClick}
            >
              <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue py-3 px-2">
                <IoMdMore size={22} />
                <p className="text-base ">더보기</p>
              </div>
            </li>
          </ul>
          {showMore && (
            <>
              <ul className="w-full table-row mb-4">
                <li
                  className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
                  onClick={() => setActiveTab(1)}
                >
                  <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue py-3 px-2">
                    <BsChatDots size={20} />
                    <p className="text-base ">1:1문의</p>
                  </div>
                </li>
                <li
                  className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
                  onClick={() => setActiveTab(2)}
                >
                  <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue py-3 px-2">
                    <FaQuestionCircle size={22} />
                    <p className="text-base ">FAQ</p>
                  </div>
                </li>
                <li
                  className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
                  onClick={() => setActiveTab(2)}
                >
                  <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue ">
                    <FaTags size={20} />
                    <p className="text-base ">태그모음</p>
                  </div>
                </li>
                <li
                  className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
                  onClick={() => setActiveTab(2)}
                >
                  <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue py-3 px-2">
                    <FaRegEyeSlash size={22} />
                    <p className="text-base ">신고모음</p>
                  </div>
                </li>
              </ul>
              <ul className="w-full table-row mb-4">
                <li
                  className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
                  onClick={() => setActiveTab(1)}
                >
                  <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue py-3 px-2">
                    <FaPeopleLine size={20} />
                    <p className="text-base ">접속자</p>
                  </div>
                </li>
                <li
                  className="w-1/4 box-border table-cell border-[1px] border-solid border-bordercolor3"
                  onClick={() => setActiveTab(2)}
                >
                  <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue py-3 px-2">
                    <IoCloseSharp size={22} />
                    <p className="text-base ">닫기</p>
                  </div>
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="mb-4">
          <Login />
        </div>
        <article className="bg-white rounded-lg shadow-md p-4 space-y-4">
          {activeTab === 1 && (
            <div>
              {/* Content for Button 1 */}
              <p className="text-base ">Button 1 Content</p>
              {/* You can add more specific content for Button 1 here */}
            </div>
          )}
          {activeTab === 2 && (
            <div>
              {/* Content for Button 2 */}
              <p className="text-base ">Button 2 Content</p>
              {/* You can add more specific content for Button 2 here */}
            </div>
          )}
          <div className="mt-4">
            {links.map((link, index) => (
              <div key={index} className="space-y-4">
                <ul>
                  <Link href={link.href}>
                    <li
                      onClick={onClose}
                      className="text-blue font-semibold text-lg mb-2 flex items-center"
                    >
                      <div className="flex">
                        <span className="ml-2">{link.label}</span>
                        {link.icon}
                      </div>
                    </li>
                  </Link>
                </ul>
                {link.dropdown && (
                  <ul className="space-y-1">
                    {link.dropdown.map((item, subIndex) => (
                      <Link key={subIndex} href={item.href}>
                        <li
                          className="hover:bg-blue-50 hover:text-blue p-3 rounded-lg transition duration-200"
                          onClick={onClose}
                        >
                          {item.label}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Sidebar;
