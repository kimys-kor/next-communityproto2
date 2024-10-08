import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Board from "@/app/components/boards/Board";
import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "./(component)/SubMenu";

function page() {
  const breadcrumbItems = {
    title: "고객센터",
    subMenu: "공지사항",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <SubMenu />
      <ThreeBanner></ThreeBanner>
      <ProgressSliderPage></ProgressSliderPage>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <Board />
    </div>
  );
}

export default page;
