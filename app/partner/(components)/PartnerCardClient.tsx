"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PartnerItem } from "@/app/types";
import Paging from "@/app/components/Paging";
import { useUserStore } from "@/app/globalStatus/useUserStore";

interface PartnerCardClientProps {
  initialData: {
    boardList: PartnerItem[];
    totalElements: number;
    totalPages: number;
  };
}

const PartnerCardClient: React.FC<PartnerCardClientProps> = ({
  initialData,
}) => {
  const size = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [boardList, setBoardList] = useState<PartnerItem[]>(
    initialData.boardList
  );
  const [totalElements, setTotalElements] = useState(initialData.totalElements);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);

  const userInfo = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchBoardContent = async () => {
      setBoardList([]);
      try {
        const response = await fetch(
          `/api/board/partnerList?page=${currentPage - 1}&size=${size}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch partner content");
        }

        const data = await response.json();
        setBoardList(data.data.content);
        setTotalElements(data.data.totalElements);
        setTotalPages(data.data.totalPages);
      } catch (error) {
        console.error("Error fetching partner content:", error);
      }
    };

    fetchBoardContent();
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
        {boardList.map((item) => (
          <article
            key={item.id}
            className="w-full h-auto bg-white/25 flex flex-col gap-4 items-center border border-solid border-slate-200"
          >
            <div className="overflow-hidden">
              <Link href={`/partner/${item.id}`}>
                {item.thumbNail == null ? (
                  <Image
                    width={395}
                    height={230}
                    className="w-full transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    src={"/images/homebanner/4.jpg"}
                    alt={item.title}
                  />
                ) : (
                  <Image
                    width={395}
                    height={230}
                    className="w-full transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    src={item.thumbNail}
                    alt={item.title}
                  />
                )}
              </Link>
            </div>
            <table className="w-full rounded-md">
              <tbody>
                <tr>
                  <td className="text-center bg-blue/80 rounded-md text-white">
                    <div className="border-solid border-b border-white p-2">
                      사이트
                    </div>
                    <div className="p-2">코드</div>
                  </td>
                  <td className="text-center">
                    <h3 className="border-solid border-b border-gray-400 p-2">
                      {item.title}
                    </h3>
                    <p className="p-2">{item.code}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        ))}
      </div>
      {userInfo?.role === "ROLE_MASTER" ? (
        <span className="w-full flex justify-end">
          <Link href={"/partner/write"}>
            <button className="bg-blue text-white hover:bg-mediumblue rounded-sm text-[13px] px-3 py-3">
              파트너 등록
            </button>
          </Link>
        </span>
      ) : null}

      <Paging
        page={currentPage}
        size={size}
        totalElements={totalElements}
        setPage={setCurrentPage}
      />
    </div>
  );
};

export default PartnerCardClient;
