import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Board from "@/app/components/boards/Board";
import Breadcrumb from "@/app/components/BreadCrumb";

function page() {
  const breadcrumbItems = {
    title: "커뮤니티",
    subMenu: "자유게시판",
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
