import Board from "@/app/components/boards/Board";
import ThreeBanner from "@/app/components/ThreeBanner";
import sportMain from "/public/images/sportMain.png";
import soccer from "/public/images/soccer.png";
import Image from "next/image";
import Breadcrumb from "../components/BreadCrumb";

export default function Page() {
  return (
    <div className="flex flex-col max-w-[1300px] gap-6">
      <div className="">
        <Image
          className=""
          src={sportMain}
          width={1024}
          height={177}
          alt={"스포츠분석"}
        />
      </div>
      <ThreeBanner />
      <div className="mt-5 flex justify-center items-center gap-2 text-3xl font-semibold text-[#07122B] ">
        축구 분석
      </div>
      <Board />
    </div>
  );
}
