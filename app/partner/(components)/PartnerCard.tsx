"use client";

import Paging from "@/app/components/Paging";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ImgContent {
  id: number;
  img: string;
  title: string;
  code: string;
}

interface PartnerCardProps {
  imgContent: ImgContent;
}

const PartnerCard: React.FC = () => {
  const pathname = usePathname();

  const imgContent: ImgContent[] = [
    { id: 1, img: "/images/homebanner/1.jpg", title: "땅콩", code: "mttp" },
    { id: 2, img: "/images/homebanner/2.png", title: "물음표", code: "mttp" },
    { id: 3, img: "/images/homebanner/3.jpg", title: "bet38", code: "mttp" },
    { id: 4, img: "/images/homebanner/4.jpg", title: "onetup", code: "mttp" },
    { id: 5, img: "/images/homebanner/5.jpg", title: "식스", code: "mttp" },
    { id: 6, img: "/images/homebanner/6.jpg", title: "정글", code: "mttp" },
  ];

  const setPage = function () {
    console.log("온체인지");
  };

  return (
    <section className="flex flex-col gap-1">
      {/* <div className="flex justify-center text-3xl font-semibold">
        <span className="text-blue">꽁머니팡 </span>
        &nbsp;파트너
      </div> */}
      <div className="flex justify-between items-center w-full border-b-2 border-blue border-solid">
        <div className="flex gap-2">
          <div className="text-[#555555] text-sm">
            총<span className="text-[#2C4AB6] font-semibold"> 34,001</span>건
          </div>
          <div className="text-[#555555] text-sm">
            {"("}
            <span className="text-[#2C4AB6] font-semibold">1</span>/
            <span> 52</span> 페이지
            {")"}
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 ">
        {imgContent.map((item, index) => (
          <article
            key={index}
            className="w-full h-auto bg-white/25 flex flex-col gap-4 items-center border border-solid border-slate-200"
          >
            <div className="overflow-hidden">
              <Link href={pathname + "/" + item.id}>
                <Image
                  width={395}
                  height={230}
                  className="w-full transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                  src={item.img}
                  alt={item.title}
                />
              </Link>
            </div>
            <table className="w-full rounded-md">
              <tbody>
                <tr>
                  <td className="text-center bg-blue/80 rounded-md text-white">
                    <div className="border-solid border-b border-white p-2">
                      사이트
                    </div>
                    <div className="p-2">코드</div>
                  </td>
                  <td className="text-center">
                    <h3 className="border-solid border-b border-gray-400 p-2">
                      {item.title}
                    </h3>
                    <p className="p-2">{item.code}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        ))}
      </div>
      <span className="w-full flex justify-end">
        <Link href={"/partner/write"}>
          <button className="bg-blue text-white  hover:bg-mediumblue rounded-sm text-[13px] px-3 py-3">
            파트너 등록
          </button>
        </Link>
      </span>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </section>
  );
};

export default PartnerCard;
