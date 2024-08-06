import Board from "@/app/components/boards/Board";
import ThreeBanner from "@/app/components/ThreeBanner";
import sportMain from "/public/images/sportMain.png";
import Image from "next/image";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";

function page() {
  return (
    <div className="flex flex-col max-w-[1300px] gap-6">
      <div className="bg-guide-intro">
        <ProgressSliderPage></ProgressSliderPage>
      </div>
      <ThreeBanner />
      <div className="flex justify-center text-3xl font-semibold">
        <span className="text-blue">1:1</span>
        &nbsp;문의
      </div>
      <Board />
    </div>
  );
}

export default page;
