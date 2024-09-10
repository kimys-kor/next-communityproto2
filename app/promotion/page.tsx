import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Board from "@/app/components/boards/Board";
import Breadcrumb from "@/app/components/BreadCrumb";

function page() {
  const breadcrumbItems = {
    title: "홍보센터",
    subMenu: "일반홍보",
  };

  return (
    <div className="flex flex-col max-w-[1300px]">
      <ThreeBanner></ThreeBanner>
      <ProgressSliderPage></ProgressSliderPage>
      {/* <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb> */}
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <Board />
    </div>
  );
}

export default page;
