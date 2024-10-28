import React from "react";
import MemberList from "./(components)/MemberList";

function page() {
  return (
    <div className="flex flex-col gap-3 max-w-[1300px]">
      <MemberList />
    </div>
  );
}

export default page;
