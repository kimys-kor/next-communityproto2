"use client";
import masterIcon from "/public/images/masterIcon.png";

import Image from "next/image";
import SelectBox from "../SelectBox";
import Paging from "../Paging";
import { BiCommentDetail } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { LiaThumbsUp } from "react-icons/lia";
import { LiaThumbsDown } from "react-icons/lia";
import { HiBars3 } from "react-icons/hi2";

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

  // const options = [
  //   { value: "1", label: "과거순" },
  //   { value: "2", label: "최신순" },
  //   { value: "3", label: "추천순" },
  //   { value: "4", label: "비추천순" },
  // ];
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
        <h1 className="font-semibold text-3xl">{Content.title}</h1>
        <article className="mt-3 w-full px-3 py-2 flex items-center justify-between gap-1 border-solid border-t border-normalblue bg-semiblue">
          <div className="flex items-center gap-1 ">
            {Content.role == "admin" ? (
              <Image
                src={masterIcon}
                width={25}
                height={25}
                alt={"adminIcon"}
              />
            ) : (
              <div></div>
            )}
            <p className="font-semibold">{Content.writer}</p>
          </div>
          <div className="flex gap-1 truncate px-2">
            <p className="text-subtext font-light">{Content.date}</p>
          </div>
        </article>
        <article className="px-3 py-2 flex items-center justify-between w-full ">
          <section className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-subtext">
              <GrView />
              {Content.view}
            </div>
            <div className="flex items-center gap-1 text-sm text-subtext">
              <BiCommentDetail />
              {Content.view}
            </div>
            <div className="flex items-center gap-1 text-sm text-subtext">
              <LiaThumbsUp size={20} />
              {Content.view}
            </div>
            <div className="flex items-center gap-1 text-sm text-subtext">
              <LiaThumbsDown size={20} />
              {Content.view}
            </div>
          </section>
          <section className="flex items-center gap-1 cursor-pointer text-[##6c757d] hover:text-gray-600 text-md">
            <HiBars3 size={20} />
            목록
          </section>
          {/* content */}
        </article>
      </section>
      <section className="px-3 py-10 flex flex-col gap-5 ">
        <article className="">{Content.content}</article>
      </section>
      <section className="px-3 py-5 flex flex-col gap-5">
        <div className="flex justify-between items-center text-lg">
          <div className="">
            댓글{" "}
            <span className="text-[#2C4AB6] font-semibold">
              {comment.length}
            </span>
          </div>

          {/* <div>
            <SelectBox
              options={options}
              onChange={handleChange}
              defaultValue="1"
            />
          </div> */}
        </div>
        {comment.map((item, index) => (
          <div key={index} className="py-5 flex flex-col gap-3 text-subtext">
            <div className="py-4 px-3 bg- flex justify-between items-center bg-[#f8f9fa] border-t border-solid border-[#ddd]">
              <div className="flex gap-2 items-center">
                <p>{item.writer}</p>
              </div>
              <p className="">{item.date}</p>
            </div>
            <div className="px-3">{item.content}</div>
          </div>
        ))}
        <div className="py-6 px-4 bg-[#F8F9FA] flex gap-2 rounded-md">
          <textarea className="p-2 bg-white w-10/12 h-28 resize-none border-[#DDDDDD] border border-solid focus:outline-none"></textarea>
          <button
            type="submit"
            className="w-2/12 bg-blue hover:bg-[#2250f5] text-white font-bold rounded focus:outline-none"
          >
            등록
          </button>
        </div>
      </section>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </div>
  );
}

export default BoardDetail;
