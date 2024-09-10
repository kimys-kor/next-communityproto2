"use client";
import React from "react";
import Paging from "@/app/components/Paging";
import SelectBox from "@/app/components/SelectBox";
import SearchBox from "@/app/components/search/SearchBox";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Board = () => {
  const pathname = usePathname();

  // Sample data
  const items = [
    {
      id: 1,
      title: "게시물 제목",
      name: "사용자 이름",
      date: "2024.06.19",
      views: 100,
      likes: 20,
    },
    {
      id: 2,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
    },
    // Add more items as needed...
  ];

  const setPage = () => console.log("Page changed");

  const options = [
    { value: "1", label: "전체" },
    { value: "2", label: "제목" },
    { value: "3", label: "제목+내용" },
    { value: "4", label: "작성자" },
  ];

  const handleChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const handleSearch = async () => {
    console.log("전체검색");
  };

  return (
    <section className="flex flex-col gap-8 mt-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 w-full">
        <div className="flex gap-2 text-sm text-[#555555]">
          <span>
            총 <span className="text-[#2C4AB6] font-semibold">34,006</span>건
          </span>
          <span>
            (<span className="text-[#2C4AB6] font-semibold">1</span> / 52
            페이지)
          </span>
        </div>
        <div className="flex gap-2">
          <SelectBox
            options={options}
            onChange={handleChange}
            defaultValue="1"
          />
          <SearchBox
            handleSearch={handleSearch}
            placeholderText="검색어 입력"
          />
        </div>
      </header>

      <table className="min-w-full bg-white text-[14px]">
        <thead className="hidden md:table-header-group bg-[#F2F5FF]">
          <tr className="border-t-2 border-[#2C4AB6] text-[#2C4AB6] font-semibold">
            {["번호", "제목", "이름", "날짜", "조회", "추천"].map(
              (header, index) => (
                <th
                  key={index}
                  className={`py-3 px-2 text-center ${index === 1 ? "grow" : "w-20"}`}
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="border-solid border-t-2 border-blue">
          {items.map((item) => (
            <tr
              key={item.id}
              className="flex border-b border-gray-200 bg-white hover:bg-[#f1f3fa] hover:text-blue"
            >
              <td className="hidden md:block w-12 py-4 px-2 text-center">
                {item.id}
              </td>
              <td className="grow py-4 px-2 font-medium">
                <Link href={`${pathname}/${item.id}`}>{item.title}</Link>
                <div className="md:hidden text-sm text-gray-500">
                  {item.date} • 조회 {item.views}
                </div>
              </td>
              <td className="w-20 py-4 px-2 text-center">{item.name}</td>
              <td className="hidden md:block w-32 py-4 px-2 text-center">
                {item.date}
              </td>
              <td className="hidden md:block w-20 py-4 px-2 text-center">
                {item.views}
              </td>
              <td className="hidden md:block w-20 py-4 px-2 text-center">
                {item.likes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex justify-end">
        <Link href={`${pathname}/write`}>
          <button className="bg-blue text-white hover:bg-mediumblue rounded-sm text-[13px] px-3 py-3">
            글작성하기
          </button>
        </Link>
      </div>

      <Paging page={1} count={15} setPage={setPage} />
    </section>
  );
};

export default Board;
