"use client";

import { useState, useEffect } from "react";
import Paging from "../Paging";
import { formatDate } from "@/app/utils";
import { Comment } from "@/app/types";
import { useAuthStore } from "@/app/globalStatus/useAuthStore";
import { commentSaveServerAction } from "@/app/api/authAction";

interface CommentPageClientProps {
  initialData: {
    comments: Comment[];
    total: number;
  };
  boardId: string;
}

const CommentPageClient: React.FC<CommentPageClientProps> = ({
  initialData,
  boardId,
}) => {
  const size = 5;
  const [comments, setComments] = useState<Comment[]>(initialData.comments);
  const [totalElements, setTotalElements] = useState(initialData.total);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalElements / size));
  const [isLoggedIn, setIsLoggedIn] = useState(
    useAuthStore.getState().loggedIn
  );
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const unsubscribe = useAuthStore.subscribe((state) => {
      setIsLoggedIn(state.loggedIn);
    });

    return () => unsubscribe();
  }, []);

  const fetchComments = async (page: number) => {
    try {
      const res = await fetch(
        `/api/board/comment?boardId=${boardId}&page=${page - 1}&size=${size}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await res.json();
      if (data.status === "OK" && data.data) {
        setComments(data.data.comments);
        setTotalElements(data.data.total);
        setTotalPages(Math.ceil(data.data.total / size));
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments(currentPage);
  }, [currentPage]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    const commentData = {
      boardId,
      username: "masterkim",
      content: newComment,
    };

    const result = await commentSaveServerAction(commentData);
    if (result.status === "OK") {
      fetchComments(1);
      setCurrentPage(1);
      setNewComment("");
    } else {
      console.error("Failed to submit comment:", result.message);
    }
  };

  const setPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        {comments.map((item) => (
          <div key={item.id} className="py-5 flex flex-col gap-3 text-subtext">
            <div className="py-4 px-3 flex justify-between items-center bg-[#f8f9fa] border-t border-solid border-[#ddd]">
              <div className="flex gap-2 items-center">
                <p>{item.nickname}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p>{formatDate(item.createdDt)}</p>
              </div>
            </div>
            <div className="px-3">{item.content}</div>
          </div>
        ))}
        {isLoggedIn ? (
          <div className="py-6 px-4 bg-[#F8F9FA] flex gap-2 rounded-md">
            <textarea
              className="p-2 bg-white w-10/12 h-16 md:h-28 resize-none border-[#DDDDDD] border border-solid focus:outline-none"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              type="button"
              className="w-2/12 bg-blue hover:bg-[#2250f5] text-white font-bold rounded focus:outline-none"
              onClick={handleCommentSubmit}
            >
              등록
            </button>
          </div>
        ) : (
          <div className="py-6 px-4 bg-[#F8F9FA] flex flex-col gap-2 rounded-md items-center justify-center border border-[#ddd]">
            <p className="text-red-500 font-semibold">
              로그인을 한 유저만 댓글을 등록할 수 있습니다
            </p>
          </div>
        )}
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
