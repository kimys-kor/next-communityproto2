import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Board from "@/app/components/boards/Board";

function page() {
  return (
    <div className="flex flex-col max-w-[1300px] gap-6">
      <ProgressSliderPage></ProgressSliderPage>
      <ThreeBanner></ThreeBanner>
      <div className="flex justify-center text-3xl font-semibold">
        <span className="text-blue">공지사항</span>
      </div>
      <Board />
    </div>
  );
}

export default page;
