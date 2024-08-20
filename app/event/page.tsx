import React from "react";
import EventBoard from "@/app/components/boards/EventBoard";
import ThreeBanner from "@/app/components/ThreeBanner";
import Breadcrumb from "@/app/components/BreadCrumb";

function page() {
  const breadcrumbItems = {
    title: "꽁머니팡",
    subMenu: "이벤트",
  };

  return (
    <div className="flex flex-col max-w-[1200px] gap-6">
      <ThreeBanner />
      <Breadcrumb breadcrumbData={breadcrumbItems} />
      <EventBoard />
    </div>
  );
}

export default page;
