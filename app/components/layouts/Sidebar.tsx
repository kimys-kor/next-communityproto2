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
    icon: <Image src={partnerIcon} width={33} height={33} alt="menuIcon" />,
    dropdown: [{ href: "/partner", label: "파트너" }],
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
    icon: <Image src={sportIcon} width={33} height={33} alt="menuIcon" />,
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
    icon: <Image src={commuIcon} width={33} height={33} alt="menuIcon" />,
  },
  {
    href: "/event",
    label: "이벤트",
    dropdown: [{ href: "/event", label: "이벤트" }],
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

  const handleClose = () => {
    setShowMore(false);
    onClose();
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 shadow-lg bg-white transform transition-transform duration-300 overflow-y-scroll ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section className="bg-mediumblue border-b-2 border-blue-600 w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center p-2 ">
          <p className="text-white text-2xl">
            꽁머니팡: 꽁머니 토토사이트 스포츠분석 안전놀이터
          </p>
          <button className="p-2" onClick={handleClose}>
            <IoCloseSharp color="white" size={30} />
          </button>
        </div>
      </section>
      <section className="flex flex-col">
        <article className="w-full table border-collapse">
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
                  onClick={handleClose}
                >
                  <div className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:text-blue py-3 px-2">
                    <IoCloseSharp size={22} />
                    <p className="text-base ">닫기</p>
                  </div>
                </li>
              </ul>
            </>
          )}
        </article>
        <article className="w-full table border-collapse">
          <ul className="w-full table-row mb-4">
            <li
              className="w-1/3 table-cell bg-blue hover:bg-mediumblue text-white text-lg text-center px-2 py-2 cursor-pointer"
              onClick={() => setActiveTab(2)}
            >
              로그인
            </li>
            <li className="w-1/3 table-cell bg-blue hover:bg-mediumblue text-white text-lg text-center px-2 py-2 cursor-pointer">
              회원가입
            </li>
            <li className="w-1/3 table-cell bg-blue hover:bg-mediumblue text-white text-lg text-center px-2 py-2 cursor-pointer">
              정보찾기
            </li>
          </ul>
        </article>

        <article className="w-full bg-white">
          {activeTab === 1 && (
            <div className="w-full table border-collapse">
              <div className="table-row w-full bg-bordercolor2 text-lg font-semibold border-solid border-t-[1px] border-bordercolor3 ">
                <p className="px-4 py-2">메뉴</p>
              </div>
              <div key={0} className="w-full table border-collapse">
                <div
                  onClick={onClose}
                  className="w-full font-semibold text-lg px-4 py-2 border-solid border-t-[1px] border-bordercolor3 hover:text-blue"
                >
                  <Link className="w-full flex items-center" href="/partner">
                    <Image
                      src={partnerIcon}
                      width={33}
                      height={33}
                      alt="menuIcon"
                    />
                    <span className="ml-2">파트너</span>
                  </Link>
                </div>
                <ul className="table border-collapse w-full">
                  <li
                    className="px-4 py-2 border-solid border-t-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                    onClick={onClose}
                  >
                    <Link href="/partner">파트너</Link>
                  </li>
                </ul>
              </div>

              <div key={1} className="w-full">
                <div
                  onClick={onClose}
                  className="w-full font-semibold text-lg px-4 py-2 border-solid border-t-[1px] border-bordercolor3 hover:text-blue"
                >
                  <Link className="w-full flex items-center" href="/sport">
                    <Image
                      src={sportIcon}
                      width={33}
                      height={33}
                      alt="menuIcon"
                    />
                    <span className="ml-2">스포츠분석</span>
                  </Link>
                </div>
                <ul className="table border-collapse w-full">
                  <div className="table-row w-full">
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/sport">축구분석</Link>
                    </li>
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/sport/base">야구분석</Link>
                    </li>
                  </div>
                  <div className="table-row">
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/sport/basket">농구분석</Link>
                    </li>
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/sport/volley">배구분석</Link>
                    </li>
                  </div>
                </ul>
              </div>

              <div key={2} className="w-full">
                <div
                  onClick={onClose}
                  className="w-full font-semibold text-lg px-4 py-2  hover:text-blue"
                >
                  <Link className="w-full flex items-center" href="/community">
                    <Image
                      src={commuIcon}
                      width={33}
                      height={33}
                      alt="menuIcon"
                    />
                    <span className="ml-2">커뮤니티</span>
                  </Link>
                </div>
                <ul className="table border-collapse w-full">
                  <div className="table-row w-full">
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/community">안구정화</Link>
                    </li>
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/community/humor">유머 & 이슈</Link>
                    </li>
                  </div>
                  <div className="table-row w-full">
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/community/pickster">나는분석왕</Link>
                    </li>
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/community/free">자유게시판</Link>
                    </li>
                  </div>
                  <div className="table-row w-full">
                    <li
                      className="table-cell px-4 py-2 border-solid border-r-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/community/case">피해사례</Link>
                    </li>
                  </div>
                </ul>
              </div>

              <div key={3} className="w-full">
                <div
                  onClick={onClose}
                  className="w-full font-semibold text-lg px-4 py-2 border-solid border-t-[1px] border-bordercolor3 hover:text-blue"
                >
                  <Link className="w-full flex items-center" href="/event">
                    <span className="ml-2">이벤트</span>
                  </Link>
                </div>
                <ul className="table border-collapse w-full">
                  <li
                    className="px-4 py-2 border-solid border-t-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                    onClick={onClose}
                  >
                    <Link href="/event">이벤트</Link>
                  </li>
                </ul>
              </div>

              <div key={4} className="w-full">
                <div
                  onClick={onClose}
                  className="w-full font-semibold text-lg px-4 py-2 border-solid border-t-[1px] border-bordercolor3 hover:text-blue"
                >
                  <Link className="w-full flex items-center" href="/promotion">
                    <span className="ml-2">홍보센터</span>
                  </Link>
                </div>
                <ul className="table border-collapse w-full">
                  <div className="table-row w-full">
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/promotion">일반홍보</Link>
                    </li>
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/promotion/ggong">꽁머니홍보</Link>
                    </li>
                  </div>
                  <div className="table-row w-full">
                    <li
                      className="table-cell px-4 py-2 border-solid border-r-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/promotion/hunting">구인구직</Link>
                    </li>
                  </div>
                </ul>
              </div>

              <div key={5} className="w-full">
                <div
                  onClick={onClose}
                  className="w-full font-semibold text-lg px-4 py-2 border-solid border-t-[1px] border-bordercolor3 hover:text-blue"
                >
                  <Link className="w-full flex items-center" href="/guide">
                    <span className="ml-2">가이드</span>
                  </Link>
                </div>
                <ul className="table border-collapse w-full">
                  <div className="table-row w-full">
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/guide/ggong">꽁머니</Link>
                    </li>
                    <li
                      className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/guide/major">메이저</Link>
                    </li>
                  </div>
                  <div className="table-row w-full">
                    <li
                      className="table-cell px-4 py-2 border-solid border-r-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                      onClick={onClose}
                    >
                      <Link href="/guide/safe">안전놀이터</Link>
                    </li>
                  </div>
                </ul>
              </div>

              <div key={6} className="w-full">
                <div
                  onClick={onClose}
                  className="w-full font-semibold text-lg px-4 py-2 border-solid border-t-[1px] border-bordercolor3 hover:text-blue"
                >
                  <Link className="w-full flex items-center" href="/customer">
                    <span className="ml-2">고객센터</span>
                  </Link>
                </div>
                <ul className="table border-collapse w-full">
                  <li
                    className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                    onClick={onClose}
                  >
                    <Link href="/customer">공지사항</Link>
                  </li>
                  <li
                    className="table-cell px-4 py-2 border-solid border-[1px] border-bordercolor3 bg-buttoncolor text-center hover:text-blue"
                    onClick={onClose}
                  >
                    <Link href="/customer/qalist">1:1 문의</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === 2 && <Login />}
        </article>
      </section>
    </div>
  );
};

export default Sidebar;
