"use client";
import React from "react";
import Paging from "@/app/components/Paging";
import SelectBox from "@/app/components/SelectBox";
import SearchBox from "@/app/components/search/SearchBox";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Board = () => {
  const pathname = usePathname();

  // 가상의 데이터
  const items = [
    {
      id: 1,
      title: "게시물 제목",
      name: "사용자 이름",
      date: "2024.06.19",
      views: 100,
      likes: 20,
      dislikes: 5,
    },
    {
      id: 2,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
      dislikes: 10,
    },
    {
      id: 3,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
      dislikes: 10,
    },
    {
      id: 4,
      title: "다른 게시물 제목",
      name: "사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
      dislikes: 10,
    },
  ];

  const setPage = function () {
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

  return (
    <section className="flex flex-col gap-8 mt-10">
      <article className="flex justify-center gap-2 ">
        <SelectBox options={options} onChange={handleChange} defaultValue="1" />
        <SearchBox
          handleSearch={handleSearch}
          placeholderText="검색어 입력"
        ></SearchBox>
      </article>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2">
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
      </div>
      <table className="min-w-full bg-white overflow-hidden overflow-x-auto text-[14px]">
        {/* Header */}
        <thead className="bg-[#F2F5FF]">
          <tr className="flex border-solid border-t-[2px] border-[#2C4AB6] text-[#2C4AB6] font-semibold">
            <th className="w-12 truncate py-3 px-2 text-center">번호</th>
            <th className="grow truncate py-3 px-2 text-center">제목</th>
            <th className="w-28 truncate py-3 px-2 text-center">이름</th>
            <th className="w-32 truncate py-3 px-2 text-center">날짜</th>
            <th className="w-20 truncate py-3 px-2 text-center">조회</th>
            <th className="w-20 truncate py-3 px-2 text-center">추천</th>
          </tr>
        </thead>

        {/* Items */}
        <tbody className="">
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={`flex border-solid border-b border-gray-200 bg-white hover:bg-[#f1f3fa] hover:text-blue`}
            >
              <td className="w-12 truncate py-4 px-2 text-center">{item.id}</td>
              <td className="grow truncate py-4 px-2 text-left">
                <Link href={pathname + "/" + item.id}>{item.title}</Link>
              </td>
              <td className="w-20 py-4 px-2 text-center">{item.name}</td>
              <td className="w-32 truncate py-4 px-2 text-center">
                {item.date}
              </td>
              <td className="w-20 truncate py-4 px-2 text-center">
                {item.views}
              </td>
              <td className="w-20 truncate py-4 px-2 text-center">
                {item.likes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="w-full flex justify-end">
        <Link href={pathname + "/write"}>
          <button className="bg-blue text-white  hover:bg-mediumblue rounded-sm text-[13px]  px-3 py-3">
            글작성하기
          </button>
        </Link>
      </span>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </section>
  );
};

export default Board;
