import React from "react";
import PartnerCard from "./(components)/PartnerCard";
import Paging from "../components/Paging";
import ProgressSliderPage from "../components/ProgressSliderPage";

interface ImgContent {
  img: string;
  title: string;
  code: string;
}

function Page() {
  return (
    <div className="flex flex-col max-w-[1200px] gap-3">
      <ProgressSliderPage />
      <PartnerCard />
    </div>
  );
}

export default Page;
