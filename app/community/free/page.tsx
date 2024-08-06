import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Board from "@/app/components/boards/Board";

function page() {
  const breadcrumbItems = {
    title: "먹튀검증",
    subMenu: [{ name: "피해사례", href: "/community/case" }],
  };

  return (
    <div className="flex flex-col max-w-[1300px] gap-6">
      <ProgressSliderPage></ProgressSliderPage>
      <ThreeBanner></ThreeBanner>
      {/* <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb> */}
      <div className="flex justify-center text-3xl font-semibold">
        <span className="text-blue">자유</span>
        &nbsp;게시판
      </div>
      <Board />
    </div>
  );
}

export default page;
