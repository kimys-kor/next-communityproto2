"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import masterIcon from "/public/images/masterIcon.png";
import { BiCommentDetail } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { LiaThumbsUp, LiaThumbsDown } from "react-icons/lia";
import { HiBars3 } from "react-icons/hi2";
import { formatDate } from "@/app/utils";
import { BoardDetailClientProps } from "@/app/types";
import DOMPurify from "isomorphic-dompurify";

const BoardDetailClient: React.FC<BoardDetailClientProps> = ({ content }) => {
  const pathname = usePathname();
  const basePath = pathname?.split("/")[1] || "";

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(content.content),
  });

  return (
    <div>
      <section className="flex flex-col gap-1 mt-3">
        <h1 className="font-semibold text-3xl">{content.title}</h1>
        <article className="mt-3 w-full px-3 py-2 flex items-center justify-between gap-1 bg-semiblue">
          <div className="flex items-center gap-1 ">
            {content.username === "masterkim" ? (
              <Image src={masterIcon} width={25} height={25} alt="adminIcon" />
            ) : null}
            <p className="font-semibold">{content.username}</p>
          </div>
          <div className="flex gap-1 truncate px-2">
            <p className="font-light text-[#2C4AB6]">
              {formatDate(content.createdDt)}
            </p>
          </div>
        </article>
        <article className="px-3 py-2 flex items-center justify-between w-full ">
          <section className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-subtext">
              <GrView />
              {content.hit}
            </div>
            <div className="flex items-center gap-1 text-sm text-subtext">
              <BiCommentDetail />
              {content.replyNum}
            </div>
            <div className="flex items-center gap-1 text-sm text-subtext">
              <LiaThumbsUp size={20} />
              {content.likes}
            </div>
            <div className="flex items-center gap-1 text-sm text-subtext">
              <LiaThumbsDown size={20} />
              {content.hate}
            </div>
          </section>
          <section className="flex items-center gap-1 cursor-pointer text-[##6c757d] hover:text-gray-600 text-md">
            <HiBars3 size={20} />
            <Link href={`/${basePath}`}>목록</Link>
          </section>
        </article>
      </section>
      <section className="px-3 py-10 flex flex-col gap-5 ">
        <article dangerouslySetInnerHTML={sanitizedData()}></article>
      </section>
    </div>
  );
};

export default BoardDetailClient;
