import Board from "@/app/components/boards/Board";
import ThreeBanner from "@/app/components/ThreeBanner";
import sportMain from "/public/images/sportMain.png";
import Image from "next/image";
import Breadcrumb from "@/app/components/BreadCrumb";

export default function Page() {
  const breadcrumbItems = {
    title: "스포츠분석",
    subMenu: "배구분석",
  };

  return (
    <div className="flex flex-col max-w-[1300px] gap-6">
      <div className="bg-guide-intro">
        <Image
          className=""
          src={sportMain}
          width={1024}
          height={177}
          alt={"스포츠분석"}
        />
      </div>
      <ThreeBanner />
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <Board />
    </div>
  );
}
