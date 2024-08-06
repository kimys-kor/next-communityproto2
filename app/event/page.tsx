import React from "react";
import EventBoard from "@/app/components/boards/EventBoard";

function page() {
  return (
    <div className="flex flex-col max-w-[1200px] gap-6">
      <div className="bg-guide-intro"></div>
      <div className="flex justify-center text-3xl font-semibold">
        <span className="text-blue">먹튀타파 </span>
        &nbsp;이벤트
      </div>
      <EventBoard />
    </div>
  );
}

export default page;
