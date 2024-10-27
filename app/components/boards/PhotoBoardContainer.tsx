import { fetchInitialBoardListData } from "@/app/utils";
import PhotoBoardClient from "@/app/components/boards/PhotoBoardClient";

interface BoardContainerProps {
  typ: number;
  page: number;
  size: number;
}

const PhotoBoardContainer = async ({
  typ,
  page,
  size,
}: BoardContainerProps) => {
  const {
    content,
    totalElements,
    page: currentPage,
    size: pageSize,
  } = await fetchInitialBoardListData(typ, page - 1, size);

  return (
    <PhotoBoardClient
      initialItems={content}
      initialPage={currentPage}
      totalElements={totalElements}
      size={pageSize}
      typ={typ}
    />
  );
};

export default PhotoBoardContainer;
