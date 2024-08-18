"use client";
import adminIcon from "/public/images/adminIcon.png";
import writerIcon from "/public/images/writerIcon.png";
import likeButtonIcon from "/public/images/likeButtonIcon.png";
import dislikeButtonIcon from "/public/images/dislikeButtonIcon.png";
import Image from "next/image";
import SelectBox from "../SelectBox";
import Paging from "../Paging";
import { BiCommentDetail } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { LiaThumbsUp } from "react-icons/lia";
import { LiaThumbsDown } from "react-icons/lia";
import { PiSirenFill } from "react-icons/pi";

function BoardDetail() {
  const Content = {
    title: "제목이 들어갑니다",
    content: "내용이 들어갑니다",
    writer: "관리자",
    role: "admin",
    view: 215,
    like: 12,
    dislike: 3,
    date: "2024.07.21",
  };
  const comment = [
    {
      content: "댓글1",
      writer: "글쓴이1",
      date: "2024.07.22",
      like: 0,
      dislike: 0,
    },
    {
      content: "댓글2",
      writer: "글쓴이2",
      date: "2024.07.22",
      like: 0,
      dislike: 0,
    },
  ];

  const options = [
    { value: "1", label: "과거순" },
    { value: "2", label: "최신순" },
    { value: "3", label: "추천순" },
    { value: "4", label: "비추천순" },
  ];
  const handleChange = (value: string) => {
    console.log("Selected value:", value);
    // 여기에 선택된 값 처리 로직 추가
  };

  const setPage = function () {
    console.log("온체인지");
  };

  return (
    <div>
      <section className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl">{Content.title}</h1>
        <div className="w-full pt-3 flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            {Content.role == "admin" ? (
              <Image src={adminIcon} width={25} height={20} alt={"adminIcon"} />
            ) : (
              <Image
                src={writerIcon}
                width={25}
                height={20}
                alt={"writerIcon"}
              />
            )}
            <p className="font-semibold">{Content.writer}</p>
          </div>
          <div className="flex gap-1 truncate px-2">
            <p className="font-semibold text-[#AAAAAA]">등록일</p>
            <p className="text-[#AAAAAA] font-light">{Content.date}</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full py-3 border-b border-solid border-black">
          <section className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-[#AAAAAA]">
              <GrView />
              {Content.view}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#AAAAAA]">
              <BiCommentDetail />
              {Content.view}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#AAAAAA]">
              <LiaThumbsUp size={20} />
              {Content.view}
            </div>
            <div className="flex items-center gap-1 text-sm text-[#AAAAAA]">
              <LiaThumbsDown size={20} />
              {Content.view}
            </div>
          </section>
          <section className="flex gap-1">
            <button className="px-3 py-1 border border-solid border-[#2C4AB6] text-[#2C4AB6] font-bold rounded-sm">
              목록
            </button>
            <button className="px-3 py-1 border border-solid border-[#BD1515] text-[#BD1515] font-bold rounded-sm flex gap-1">
              <PiSirenFill />
              신고
            </button>
          </section>
          {/* content */}
        </div>
      </section>
      <section className="py-10 flex flex-col gap-5 border-b border-solid border-[#AAAAAA]">
        <article className="">{Content.content}</article>
        <div className="w-full flex gap-2 justify-center items-center text-sm">
          <button className="px-4 py-2 rounded-2xl border border-solid border-[#AAAAAA] font-medium flex gap-2">
            <Image
              src={likeButtonIcon}
              width={17}
              height={17}
              alt={"likeButtonIcon"}
            />
            <p>추천</p>
            {Content.like}
          </button>
          <button className="px-4 py-2 rounded-2xl border border-solid border-[#AAAAAA] font-medium flex gap-2">
            <Image
              src={dislikeButtonIcon}
              width={17}
              height={17}
              alt={"dislikeButtonIcon"}
            />
            <p>비추천</p>
            {Content.dislike}
          </button>
        </div>
      </section>
      <section className="py-5 flex flex-col gap-5">
        <h1 className="text-xl font-semibold">댓글등록</h1>
        <div className="py-6 px-4 bg-[#F2F5FF] flex gap-2 rounded-md">
          <textarea className="p-2 bg-white w-10/12 h-28 resize-none border-[#DDDDDD] border border-solid focus:outline-none"></textarea>
          <button
            type="submit"
            className="w-2/12 bg-blue hover:bg-[#2250f5] text-white font-bold rounded focus:outline-none"
          >
            등록
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="py-3">댓글 {comment.length}건(1/52페이지)</div>
          <div>
            <SelectBox
              options={options}
              onChange={handleChange}
              defaultValue="1"
            />
          </div>
        </div>
        {comment.map((item, index) => (
          <div className="py-7 flex flex-col gap-3 border-b border-solid border-[#DDDDDD]">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Image
                  src={writerIcon}
                  width={17}
                  height={17}
                  alt={"dislikeButtonIcon"}
                />
                <p className="font-semibold">{item.writer}</p>
              </div>
              <p className="text-[#888888]">{item.date}</p>
            </div>
            <div className="">{item.content}</div>
            <div className="flex gap-1 justify-end">
              <button className="px-3 py-1 border border-solid border-[#AAAAAA] text-black font-bold text-xs rounded-sm flex gap-1">
                <Image
                  src={likeButtonIcon}
                  width={14}
                  height={14}
                  alt={"viewNumberIcon"}
                />
                {item.like}
              </button>
              <button className="px-3 py-1 border border-solid border-[#AAAAAA] text-black font-bold text-xs rounded-sm flex gap-1">
                <Image
                  src={dislikeButtonIcon}
                  width={14}
                  height={14}
                  alt={"viewNumberIcon"}
                />
                {item.dislike}
              </button>
              <button className="px-3 py-1 border border-solid border-[#BD1515] text-[#BD1515] font-bold text-xs rounded-sm flex gap-1">
                <PiSirenFill />
                신고
              </button>
            </div>
          </div>
        ))}
      </section>
      <Paging page={1} count={15} setPage={setPage}></Paging>
      <div className="mt-10 flex justify-center ">
        <button className="px-12 py-2 rounded-2xl border border-solid border-[#2F5BC1] text-[#2F5BC1] font-medium flex gap-2">
          <p>목록</p>
        </button>
      </div>
    </div>
  );
}

export default BoardDetail;
