import Board from "@/app/components/boards/Board";
import ThreeBanner from "@/app/components/ThreeBanner";
import sportMain from "/public/images/sportMain.png";
import Image from "next/image";

export default function Page() {
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
      <div className="mt-5 flex justify-center items-center gap-2 text-3xl font-semibold text-[#07122B] ">
        야구 분석
      </div>
      <Board />
    </div>
  );
}
