import Breadcrumb from "@/app/components/BreadCrumb";
import React from "react";
import ThreeBanner from "@/app/components/ThreeBanner";
import photoMain from "/public/images/photoMain.png";
import Image from "next/image";
import PhotoBoard from "../components/boards/PhotoBoard";

function page() {
  return (
    <div className="flex flex-col max-w-[1200px] gap-6">
      <ThreeBanner></ThreeBanner>
      <div className="bg-guide-intro">
        <Image
          className=""
          src={photoMain}
          width={1024}
          height={177}
          alt={"안구정화갤러리"}
        />
      </div>
      <div className="flex justify-center text-3xl font-semibold">
        <span className="text-blue">안구정화 </span>
        &nbsp;갤러리
      </div>
      <PhotoBoard />
    </div>
  );
}

export default page;
