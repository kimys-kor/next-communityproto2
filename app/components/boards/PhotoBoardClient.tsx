"use client";
import React, { useState } from "react";
import Paging from "@/app/components/Paging";
import SelectBox from "@/app/components/SelectBox";
import SearchBox from "@/app/components/search/SearchBox";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BoardItem } from "@/app/types";

interface PhotoBoardClientProps {
  items: BoardItem;
  totalElements: number;
  currentPage: number;
  totalPages: number;
}

const PhotoBoardClient: React.FC<PhotoBoardClientProps> = ({
  items,
  totalElements,
  currentPage,
  totalPages,
}) => {
  const pathname = usePathname();
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
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const setPage = (pageNumber: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Page changed:", pageNumber);
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

  const handleSearch = () => {
    console.log("Search initiated");
  };

  return (
    <section className="flex flex-col gap-1 mt-3">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 w-full">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
            className="h-4 w-4"
          />
          <div className="text-[#555555] text-sm">
            총{" "}
            <span className="text-[#2C4AB6] font-semibold">
              {totalElements}
            </span>{" "}
            건
          </div>
          <div className="text-[#555555] text-sm">
            {"("}
            <span className="text-[#2C4AB6] font-semibold">
              {currentPage}
            </span>{" "}
            / <span>{totalPages}</span> 페이지{")"}
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
      <ul className="min-w-full bg-white overflow-hidden overflow-x-auto text-[14px] grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item) => (
          <li key={item.id} className="bg-white rounded-lg cursor-pointer">
            <div className="overflow-hidden rounded-lg relative">
              <input
                type="checkbox"
                className="absolute top-2 left-2 z-10 h-4 w-4"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelectItem(item.id)}
              />
              <Link href={`${pathname}/${item.id}`}>
                <Image
                  width={326}
                  height={230}
                  className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </Link>
            </div>
            <section className="w-full flex flex-col justify-center px-2 py-4">
              <h1 className="w-full text-center font-bold text-base truncate">
                {item.title}
              </h1>
              <p className="w-full text-center truncate text-base font-medium text-semiblack">
                {item.date}
              </p>
              <p className="w-full text-center truncate text-base text-subtext">
                {item.name}
              </p>
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
      <Paging
        scroll={"top"}
        page={currentPage}
        count={totalPages}
        setPage={setPage}
      />
    </section>
  );
};

export default PhotoBoardClient;
