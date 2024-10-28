"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PhotoItem } from "@/app/types";
import Paging from "@/app/components/Paging";
import { useUserStore } from "@/app/globalStatus/useUserStore";

interface PartnerCardClientProps {
  initialData: {
    boardList: PhotoItem[];
    totalElements: number;
    totalPages: number;
  };
}

const PartnerCardClient: React.FC<PartnerCardClientProps> = ({
  initialData,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const size = 12;

  const { userInfo } = useUserStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [boardList, setBoardList] = useState<PhotoItem[]>(
    initialData.boardList
  );
  const [totalElements, setTotalElements] = useState(initialData.totalElements);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const pageFromQuery = parseInt(searchParams.get("page") || "1", 10);
    setCurrentPage(pageFromQuery);
  }, [searchParams]);

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

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    router.replace(`/partner?page=${newPage}`);
  };

  // Handle selecting an individual item
  const handleSelectItem = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle select all functionality
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(boardList.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="flex flex-col gap-5">
      <header className="flex justify-between items-center w-full text-xs md:text-sm text-[#555555] ">
        <div className="flex gap-2 items-center">
          {userInfo?.sck && (
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="h-4 w-4 accent-blue-600 cursor-pointer"
            />
          )}
          <span className="text-[#555555] text-sm">
            총{" "}
            <span className="text-[#2C4AB6] font-semibold">
              {totalElements}
            </span>{" "}
            건
          </span>
          <span className="text-[#555555] text-sm">
            {"("}
            <span className="text-[#2C4AB6] font-semibold">
              {currentPage}
            </span>{" "}
            / <span>{totalPages}</span> 페이지{")"}
          </span>
        </div>
      </header>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
        {boardList.map((item) => (
          <article
            key={item.id}
            className="w-full h-64 bg-white/25 flex flex-col gap-4 items-center border border-solid border-slate-200"
          >
            <div className="relative h-3/4 w-full overflow-hidden">
              {userInfo?.sck && (
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                  className="absolute top-2 left-2 z-10 h-4 w-4 accent-blue-600 cursor-pointer"
                />
              )}
              <Link href={`/partner/${item.id}`}>
                <Image
                  width={395}
                  height={230}
                  className="w-full h-full transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                  src={item.thumbNail || "/images/homebanner/4.jpg"}
                  alt={item.title}
                />
              </Link>
            </div>
            <table className="h-1/4 w-full rounded-md">
              <tbody>
                <tr>
                  <td className="text-center bg-blue/80 rounded-md text-white font-bold">
                    <div className="border-b border-white border-solid p-2">
                      사이트
                    </div>
                    <div className="p-2">코드</div>
                  </td>
                  <td className="text-center">
                    <h3 className="p-2 font-semibold border-solid border-b border-gray-300 text-gray-700">
                      {item.title}
                      {item.replyNum > 0 && (
                        <span className="text-blue ml-2 text-sm">
                          +{item.replyNum}
                        </span>
                      )}
                    </h3>
                    <p className="p-2 text-gray-600">{item.code}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        ))}
      </div>

      {userInfo?.sck && (
        <span className="w-full flex justify-end mt-3">
          <Link href="/partner/write">
            <button className="bg-blue text-white hover:bg-mediumblue rounded-sm text-[13px] px-3 py-2">
              파트너 등록
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
    </div>
  );
};

export default PartnerCardClient;
