import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Breadcrumb from "@/app/components/BreadCrumb";
import SubMenu from "./(component)/SubMenu";

function page() {
  const breadcrumbItems = {
    title: "홍보센터",
    subMenu: "일반홍보",
  };

  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <SubMenu />
      <ThreeBanner></ThreeBanner>
      <ProgressSliderPage></ProgressSliderPage>
      {/* <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb> */}
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
    </div>
  );
}

export default page;
