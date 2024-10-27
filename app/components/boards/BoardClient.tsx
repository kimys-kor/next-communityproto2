"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { BoardItem } from "../../types";
import Paging from "@/app/components/Paging";
import Link from "next/link";
import NewIcon from "../NewIcon";
import toast from "react-hot-toast";

interface BoardClientProps {
  initialItems: BoardItem[];
  initialPage: number;
  totalElements: number;
  size: number;
  typ: number;
}

const BoardClient: React.FC<BoardClientProps> = ({
  initialItems,
  initialPage,
  totalElements: initialTotalElements,
  size,
  typ,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [boardList, setBoardList] = useState<BoardItem[]>(initialItems);
  const [page, setPage] = useState(initialPage);
  const [totalElements, setTotalElements] = useState(initialTotalElements);

  const totalPages = Math.ceil(totalElements / size);

  const fetchData = async (pageNumber: number) => {
    try {
      const response = await fetch(
        `/api/board/list?typ=${typ}&keyword=&page=${pageNumber - 1}&size=${size}`,
        {
          cache: "no-store",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch board list");
      }
      const data = await response.json();
      setBoardList(data.data.content);
      setTotalElements(data.data.totalElements);
    } catch (error) {
      console.error("Error fetching board list:", error);
      toast.error("Failed to fetch board list");
    }
  };

  useEffect(() => {
    const pageFromQuery = parseInt(searchParams.get("page") || "1", 10);
    setPage(pageFromQuery);
    fetchData(pageFromQuery);
  }, [searchParams]);

  const handlePageChange = (newPage: number) => {
    router.replace(`${pathname}?page=${newPage}`);
    setPage(newPage);
  };

  const isNew = (dateString: string) => {
    const itemDate = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - itemDate.getTime()) / (1000 * 60 * 60);
    return diffInHours <= 24;
  };

  return (
    <section className="flex flex-col gap-1 mt-3">
      <header className="flex justify-between items-center w-full text-xs md:text-sm text-[#555555]">
        <div className="flex gap-2">
          <div className="text-[#555555] text-sm">
            총
            <span className="text-[#2C4AB6] font-semibold">
              {totalElements}
            </span>
            건
          </div>
          <div className="text-[#555555] text-sm">
            {"("}
            <span className="text-[#2C4AB6] font-semibold">1</span>/{" "}
            <span>{totalPages}</span> 페이지{")"}
          </div>
        </div>
      </header>

      <table className="min-w-full bg-white text-[14px]">
        <thead className="bg-[#F2F5FF]">
          <tr className="flex border-t-2 border-[#2C4AB6] text-[#2C4AB6] font-semibold">
            <th className="grow py-3 px-2 text-center">제목</th>
            <th className="w-20 py-3 px-2 text-center">이름</th>
            <th className="hidden md:block w-32 py-3 px-2 text-center">날짜</th>
            <th className="hidden md:block w-20 py-3 px-2 text-center">조회</th>
            <th className="hidden md:block w-20 py-3 px-2 text-center">추천</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((boardItem) => (
            <tr
              key={boardItem.id}
              className="border-b border-solid border-gray-200 flex bg-white hover:bg-[#f1f3fa] hover:text-blue"
            >
              <td className="grow py-4 px-2 font-medium">
                <div className="flex items-center gap-1">
                  {isNew(boardItem.createdDt.toString()) && <NewIcon />}
                  <Link href={`${pathname}/${boardItem.id}`}>
                    {boardItem.title}
                    {boardItem.replyNum > 0 && (
                      <span className="text-blue ml-2 text-sm">
                        +{boardItem.replyNum}
                      </span>
                    )}
                  </Link>
                </div>
              </td>
              <td className="truncate w-20 py-4 px-2 text-center flex items-center">
                {boardItem.nickname}
              </td>
              <td className="hidden md:block w-32 py-4 px-2 text-center">
                {boardItem.createdDt.toString()}
              </td>
              <td className="hidden md:block w-20 py-4 px-2 text-center">
                {boardItem.hit}
              </td>
              <td className="hidden md:block w-20 py-4 px-2 text-center">
                {boardItem.likes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Paging
        page={page}
        size={size}
        totalElements={totalElements}
        setPage={handlePageChange}
        scroll={"top"}
      />
    </section>
  );
};

export default BoardClient;
