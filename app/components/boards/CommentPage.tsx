import { notFound } from "next/navigation";
import CommentPageClient from "./CommentClient";

interface CommentPageProps {
  boardId: string;
}

const CommentPage: React.FC<CommentPageProps> = async ({ boardId }) => {
  const fetchComments = async (boardId: string) => {
    const res = await fetch(
      `${process.env.API_URL}/guest/list/comment?boardId=${boardId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data = await res.json();
    if (data.status !== "OK" || !data.data) {
      return null;
    }

    return data.data;
  };

  const comments = await fetchComments(boardId);

  if (!comments) {
    return notFound();
  }

  return <CommentPageClient comments={comments} />;
};

export default CommentPage;
