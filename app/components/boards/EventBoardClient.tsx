"use client";
import React, { useState, useEffect } from "react";
import Paging from "@/app/components/Paging";
import SelectBox from "@/app/components/SelectBox";
import SearchBox from "@/app/components/search/SearchBox";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhotoItem } from "@/app/types";

interface EventBoardClientProps {
  initialData: {
    boardList: PhotoItem[];
    totalElements: number;
    totalPages: number;
  };
}

const EventBoardClient: React.FC<EventBoardClientProps> = ({ initialData }) => {
  const pathname = usePathname();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [boardList, setBoardList] = useState<PhotoItem[]>(
    initialData.boardList
  );
  const [totalElements, setTotalElements] = useState(initialData.totalElements);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const size = 12;

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

  // Function to handle page change and fetch new data based on the page
  const handlePageChange = async (newPage: number) => {
    setCurrentPage(newPage);
    try {
      const response = await fetch(
        `/api/board/eventList?page=${newPage - 1}&size=${size}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch event board data");
      }

      const data = await response.json();
      setBoardList(data.data.content);
      setTotalElements(data.data.totalElements);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      console.error("Error fetching event board data:", error);
    }
  };

  // Options for SelectBox (dummy data)
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
            <span> {totalPages}</span> 페이지{")"}
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
        {boardList.map((item) => (
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
                  width={477}
                  height={141}
                  className="w-[477px] h-[141px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={item.thumbNail}
                  alt={item.title}
                />
              </Link>
            </div>
            <section className="w-full flex flex-col justify-center px-2 py-1">
              <div className="w-full flex justify-between">
                <p className="w-full text-right truncate text-sm text-subtext">
                  {item.createdDt.toString()}~종료시까지
                </p>
              </div>
            </section>
          </li>
        ))}
      </ul>
      <span className="w-full flex justify-end mt-3">
        <Link href={`${pathname}/write`}>
          <button className="bg-blue text-white hover:bg-mediumblue rounded-sm text-[13px] px-3 py-3">
            글작성하기
          </button>
        </Link>
      </span>
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

export default EventBoardClient;
