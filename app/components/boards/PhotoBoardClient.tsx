"use client";
import React, { useState, useEffect } from "react";
import Paging from "@/app/components/Paging";
import SelectBox from "@/app/components/SelectBox";
import SearchBox from "@/app/components/search/SearchBox";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhotoItem } from "@/app/types";
import { useUserStore } from "@/app/globalStatus/useUserStore";

interface PhotoBoardClientProps {
  initialData: {
    boardList: PhotoItem[];
    totalElements: number;
    totalPages: number;
  };
}

const PhotoBoardClient: React.FC<PhotoBoardClientProps> = ({ initialData }) => {
  const pathname = usePathname();
  const { userInfo } = useUserStore();

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [boardList, setBoardList] = useState<PhotoItem[]>(
    initialData.boardList
  );
  const [totalElements, setTotalElements] = useState(initialData.totalElements);
  const [currentPage, setCurrentPage] = useState(1);
  const size = 12; // items per page

  // Function to handle selecting all items
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(boardList.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  // Function to handle individual item selection
  const handleSelectItem = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  // Function to handle page change
  const handlePageChange = async (newPage: number) => {
    setCurrentPage(newPage);
    try {
      const response = await fetch(
        `/api/board/photoList?page=${newPage - 1}&size=${size}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch photo board data");
      }

      const data = await response.json();
      setBoardList(data.data.content);
      setTotalElements(data.data.totalElements);
    } catch (error) {
      console.error("Error fetching photo board data:", error);
    }
  };

  // Dummy data for SelectBox
  const options = [
    { value: "1", label: "전체" },
    { value: "2", label: "제목" },
    { value: "3", label: "제목+내용" },
    { value: "4", label: "작성자" },
  ];

  const handleChange = (value: string) => {
    console.log("Selected value:", value);
  };

  async function handleSearch() {
    console.log("Searching...");
  }

  return (
    <section className="flex flex-col gap-1 mt-3">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 w-full">
        <div className="flex items-center gap-2">
          {userInfo?.sck && (
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="h-4 w-4"
            />
          )}
          <div className="text-[#555555] text-sm">
            총
            <span className="text-[#2C4AB6] font-semibold">
              {" "}
              {totalElements}
            </span>
            건
          </div>
          <div className="text-[#555555] text-sm">
            {"("}
            <span className="text-[#2C4AB6] font-semibold">{currentPage}</span>/
            <span> {Math.ceil(totalElements / size)}</span> 페이지{")"}
          </div>
        </div>
        <article className="flex justify-center gap-2 ">
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
      <ul className="min-w-full bg-white overflow-hidden overflow-x-auto text-[14px] grid grid-cols-2 md:grid-cols-3 gap-5">
        {boardList.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-lg cursor-pointer shadow-md"
          >
            <div className="overflow-hidden rounded-lg relative">
              {userInfo?.sck && (
                <input
                  type="checkbox"
                  className="absolute top-2 left-2 z-10 h-4 w-4"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
              )}
              <Link href={`${pathname}/${item.id}`}>
                <Image
                  width={326}
                  height={230}
                  className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={item.thumbNail}
                  alt={item.title}
                />
              </Link>
            </div>
            <section className="w-full flex flex-col justify-center px-2 py-4">
              <h1 className="w-full text-center font-bold text-base truncate">
                {item.title}
              </h1>
              <p className="w-full text-center truncate text-base font-medium text-semiblack">
                {item.createdDt.toString()}
              </p>
              <p className="w-full text-center truncate text-base text-subtext">
                {item.nickname}
              </p>
            </section>
          </li>
        ))}
      </ul>
      {userInfo?.sck && (
        <span className="mt-5 w-full flex justify-end">
          <Link href={`${pathname}/write`}>
            <button className="bg-blue text-white hover:bg-mediumblue rounded-sm text-[13px] px-3 py-3">
              글작성하기
            </button>
          </Link>
        </span>
      )}
      <Paging
        page={currentPage}
        size={size}
        totalElements={totalElements}
        setPage={handlePageChange}
        scroll={"top"}
      />
    </section>
  );
};

export default PhotoBoardClient;
