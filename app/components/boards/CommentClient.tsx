"use client";

import { useState } from "react";
import Paging from "../Paging";
import { formatDate } from "@/app/utils";

interface Comment {
  id: number;
  content: string;
  username: string;
  nickname: string;
  deleted: boolean;
  createdDt: string;
}

interface CommentPageClientProps {
  comments: Comment[];
}

const CommentPageClient: React.FC<CommentPageClientProps> = ({ comments }) => {
  const size = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalElements, setTotalElements] = useState(comments.length);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalElements / size));

  const paginatedComments = comments.slice(
    (currentPage - 1) * size,
    currentPage * size
  );

  const setPage = (page: number) => {
    setCurrentPage(page);
    console.log(`Page changed to: ${page}`);
  };

  return (
    <div>
      <section className="px-3 py-5 flex flex-col gap-5">
        <div className="flex justify-between items-center text-lg">
          <div>
            댓글{" "}
            <span className="text-[#2C4AB6] font-semibold">
              {totalElements}
            </span>
          </div>
        </div>
        {paginatedComments.map((item) => (
          <div key={item.id} className="py-5 flex flex-col gap-3 text-subtext">
            <div className="py-4 px-3 flex justify-between items-center bg-[#f8f9fa] border-t border-solid border-[#ddd]">
              <div className="flex gap-2 items-center">
                <p>{item.nickname}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p> {formatDate(item.createdDt)}</p>
              </div>
            </div>
            <div className="px-3">{item.content}</div>
          </div>
        ))}
        <div className="py-6 px-4 bg-[#F8F9FA] flex gap-2 rounded-md">
          <textarea className="p-2 bg-white w-10/12 h-16 md:h-28 resize-none border-[#DDDDDD] border border-solid focus:outline-none"></textarea>
          <button
            type="submit"
            className="w-2/12 bg-blue hover:bg-[#2250f5] text-white font-bold rounded focus:outline-none"
          >
            등록
          </button>
        </div>
      </section>
      <Paging
        page={currentPage}
        size={size}
        totalElements={totalElements}
        setPage={setPage}
      />
    </div>
  );
};

export default CommentPageClient;
