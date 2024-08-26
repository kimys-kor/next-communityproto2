import BoardDetail from "@/app/components/boards/BoardDetail";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import ThreeBanner from "@/app/components/ThreeBanner";

function page() {
  return (
    <div className="flex flex-col max-w-[1300px] gap-6">
      <ProgressSliderPage></ProgressSliderPage>
      <BoardDetail></BoardDetail>
    </div>
  );
}

export default page;
