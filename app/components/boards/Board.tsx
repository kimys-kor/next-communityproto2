"use client";

import React, { useState, useEffect } from "react";
import Paging from "@/app/components/Paging";
import SelectBox from "@/app/components/SelectBox";
import SearchBox from "@/app/components/search/SearchBox";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrView } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import NewIcon from "../NewIcon";
import toast from "react-hot-toast";

const Board = () => {
  const pathname = usePathname();

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const size = 15;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `/api/board/list?typ=2&keyword=&page=${page}&size=${size}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch board list");
      }
      const data = await response.json();
      setItems(data.data.content);
      setTotalElements(data.data.totalElements);
      console.log(items);
    } catch (error) {
      console.error("Error fetching board list:", error);
      toast.error("Failed to fetch board list");
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item: any) => item.id));
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

  const isNew = (dateString: string) => {
    const itemDate = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - itemDate.getTime()) / (1000 * 60 * 60);
    return diffInHours <= 24; // Check if the difference is less than or equal to 24 hours
  };

  return (
    <section className="flex flex-col gap-1 mt-3">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 w-full">
        <div className="text-xs md:text-sm flex gap-2 text-[#555555]">
          <span>
            총{" "}
            <span className="text-[#2C4AB6] font-semibold">
              {totalElements}
            </span>
            건
          </span>
          <span>
            (<span className="text-[#2C4AB6] font-semibold">{page}</span> /{" "}
            {Math.ceil(totalElements / size)} 페이지)
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
        <thead className="bg-[#F2F5FF]">
          <tr className="flex border-t-2 border-[#2C4AB6] text-[#2C4AB6] font-semibold">
            <th className="hidden md:block w-12 py-3 px-2 text-center">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="hidden md:block w-12 py-3 px-2 text-center">번호</th>
            <th className="grow py-3 px-2 text-center">제목</th>
            <th className="w-20 py-3 px-2 text-center">이름</th>
            <th className="hidden md:block w-32 py-3 px-2 text-center">날짜</th>
            <th className="hidden md:block w-20 py-3 px-2 text-center">조회</th>
            <th className="hidden md:block w-20 py-3 px-2 text-center">추천</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any) => (
            <tr
              key={item.id}
              className="border-b border-solid border-gray-200 flex bg-white hover:bg-[#f1f3fa] hover:text-blue"
            >
              <td className="hidden md:block w-12 py-4 px-2 text-center">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
              </td>
              <td className="hidden md:block w-12 py-4 px-2 text-center">
                {item.id}
              </td>
              <td className="grow py-4 px-2 font-medium">
                <div className="flex flex-wrap gap-1">
                  {isNew(item.date) && <NewIcon />}
                  <Link href={`${pathname}/${item.id}`}>{item.title}</Link>
                </div>
                <div className="mt-3 md:hidden flex gap-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <IoMdTime />
                    {item.date}
                  </div>
                  <div className="flex items-center">
                    <GrView /> {item.views}
                  </div>
                </div>
              </td>
              <td className="truncate w-20 py-4 px-2 text-center flex items-center">
                {item.name}
              </td>
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

      <Paging
        page={page}
        size={size}
        totalElements={totalElements}
        setPage={setPage}
      />
    </section>
  );
};

export default Board;
