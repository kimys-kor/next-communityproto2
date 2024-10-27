"use client";
import React, { useState } from "react";
import Paging from "@/app/components/Paging";
import SelectBox from "@/app/components/SelectBox";
import SearchBox from "@/app/components/search/SearchBox";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const EventBoard = () => {
  const pathname = usePathname();

  // 가상의 데이터
  const items = [
    {
      id: 1,
      title: "게시물 제목",
      name: "사용자 이름",
      startDate: "2024.06.19",
      endDate: "2024.12.31",
      views: 100,
      likes: 20,
      dislikes: 5,
      thumbnail: "/images/ev1.PNG",
      Proceeding: true,
    },
    {
      id: 2,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      startDate: "2024.06.19",
      endDate: "2024.12.31",
      views: 150,
      likes: 30,
      dislikes: 10,
      thumbnail: "/images/ev2.PNG",
      Proceeding: false,
    },
    {
      id: 3,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      startDate: "2024.06.19",
      endDate: "2024.07.19",
      views: 150,
      likes: 30,
      dislikes: 10,
      thumbnail: "/images/ev3.PNG",
      Proceeding: false,
    },
    {
      id: 4,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      startDate: "2024.06.19",
      endDate: "2024.07.19",
      views: 150,
      likes: 30,
      dislikes: 10,
      thumbnail: "/images/ev4.PNG",
      Proceeding: false,
    },
  ];

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const setPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("온체인지");
  };

  const options = [
    { value: "1", label: "전체" },
    { value: "2", label: "제목" },
    { value: "3", label: "제목+내용" },
    { value: "4", label: "작성자" },
  ];

  const handleChange = (value: string) => {
    console.log("Selected value:", value);
    // 여기에 선택된 값 처리 로직 추가
  };

  async function handleSearch() {
    console.log("전체검색");
  }

  const getStatus = (endDate: string): string => {
    const today = new Date();
    const end = new Date(endDate);
    return end > today ? "진행중" : "종료";
  };

  const getStatusColor = (endDate: string): string => {
    const status = getStatus(endDate);
    return status === "진행중" ? "text-blue" : "text-gray-300";
  };

  return (
    <section className="flex flex-col mt-3">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 w-full">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
            className="h-4 w-4"
          />
          <div className="text-[#555555] text-sm">
            총<span className="text-[#2C4AB6] font-semibold"> 34,006</span>건
          </div>
          <div className="text-[#555555] text-sm">
            {"("}
            <span className="text-[#2C4AB6] font-semibold">1</span>/
            <span> 52</span> 페이지
            {")"}
          </div>
        </div>
        <article className="flex justify-center gap-2">
          <SelectBox
            options={options}
            onChange={handleChange}
            defaultValue="1"
          />
          <SearchBox
            handleSearch={handleSearch}
            placeholderText="검색어 입력"
          />
        </article>
      </div>
      <ul className="min-w-full bg-white overflow-hidden overflow-x-auto text-[14px] grid grid-cols-1 md:grid-cols-2 gap-2">
        {items.map((item) => (
          <li key={item.id} className="bg-white rounded-lg py-4 relative">
            <input
              type="checkbox"
              className="absolute top-6 left-2 z-10 h-4 w-4"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
            />
            <div className="overflow-hidden rounded-lg flex justify-center items-center">
              <Link href={`${pathname}/${item.id}`}>
                <Image
                  width={765}
                  height={226}
                  className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </Link>
            </div>
            <section className="w-full flex flex-col justify-center px-2 py-1">
              <div className="w-full flex justify-between">
                <p
                  className={`w-full text-left truncate text-base font-medium ${getStatusColor(
                    item.endDate
                  )}`}
                >
                  {getStatus(item.endDate)}
                </p>
                <p className="w-full text-right truncate text-sm text-subtext">
                  {item.startDate}~{item.endDate}
                </p>
              </div>
            </section>
          </li>
        ))}
      </ul>
      <span className="w-full flex justify-end">
        <Link href={`${pathname}/write`}>
          <button className="bg-blue text-white hover:bg-mediumblue rounded-sm text-[13px] px-3 py-3">
            글작성하기
          </button>
        </Link>
      </span>
      <Paging scroll={"top"} page={1} count={15} setPage={setPage} />
    </section>
  );
};

export default EventBoard;
