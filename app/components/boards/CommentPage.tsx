import { notFound } from "next/navigation";
import CommentPageClient from "./CommentClient";
import { fetchInitialComments } from "@/app/utils";

interface CommentPageProps {
  boardId: string;
}

const CommentPage: React.FC<CommentPageProps> = async ({ boardId }) => {
  const initialData = await fetchInitialComments(boardId, 0, 12);

  if (!initialData) {
    return notFound();
  }

  return <CommentPageClient initialData={initialData} boardId={boardId} />;
};

export default CommentPage;
