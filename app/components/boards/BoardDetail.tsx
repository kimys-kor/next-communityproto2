import { headers } from "next/headers";
import { notFound } from "next/navigation";
import BoardDetailClient from "./BoardDetailClient";
import CommentPage from "./CommentPage";
import { fetchInitialBoardContent } from "@/app/utils";

const BoardDetail: React.FC = async () => {
  const headersList = headers();
  const headerPathname = headersList.get("x-pathname");
  const id = headerPathname?.split("/").pop() || "";

  if (!id) {
    return notFound();
  }

  const boardContent = await fetchInitialBoardContent(id);
  if (!boardContent) {
    return notFound();
  }

  return (
    <div>
      <BoardDetailClient content={boardContent} />
      <CommentPage boardId={id} />
    </div>
  );
};

export default BoardDetail;
