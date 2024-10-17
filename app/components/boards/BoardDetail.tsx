import { headers } from "next/headers";
import { notFound } from "next/navigation";
import BoardDetailClient from "./BoardDetailClient";
import CommentPage from "./CommentPage";
import { fetchInitialBoardContent } from "@/app/utils";

const BoardDetail: React.FC = async () => {
  const headersList = headers();
  const headerPathname = headersList.get("x-pathname");
  const match = headerPathname?.match(/(\d+)/);
  const id = match ? match[0] : "";

  console.log(headerPathname);

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
