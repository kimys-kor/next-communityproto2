import { headers } from "next/headers";
import { notFound } from "next/navigation";
import BoardDetailClient from "./BoardDetailClient";
import CommentPage from "./CommentPage";

const BoardDetail: React.FC = async () => {
  const headersList = headers();
  const headerPathname = headersList.get("x-pathname");
  const match = headerPathname?.match(/(\d+)/);
  const id = match ? match[0] : "";

  const fetchBoardContent = async (id: string) => {
    const res = await fetch(
      `${process.env.API_URL}/guest/content?boardId=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch board content");
    }

    const data = await res.json();
    if (data.status !== "OK" || !data.data) {
      return null;
    }

    return data.data;
  };

  const boardContent = await fetchBoardContent(id);
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
