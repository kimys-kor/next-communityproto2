import BoardDetail from "@/app/components/boards/BoardDetail";
import PhotoBoard from "@/app/components/boards/PhotoBoard";
import PhotoBoardDetail from "@/app/components/boards/PhotoBoardDetail";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import ThreeBanner from "@/app/components/ThreeBanner";

function page() {
  return (
    <div className="flex flex-col max-w-[1300px] gap-6">
      <ProgressSliderPage />
      <ThreeBanner />
      <PhotoBoardDetail />
    </div>
  );
}

export default page;
