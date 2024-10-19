"use client";

import PostEditor from "@/app/components/texteditor/PostEditor";
import React, { useRef, useState } from "react";
import { useForm, Resolver } from "react-hook-form";

type FormData = {
  title: string;
  notice: boolean;
};

interface WriteProps {
  title: string;
}

const Write: React.FC<WriteProps> = ({ title }) => {
  const [content, setContent] = useState("");
  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const saveContent = () => {
    console.log("Content saved:", content);
  };

  const resolver: Resolver<FormData> = async (values) => {
    return {
      values: values.title ? values : {},
      errors: !values.title
        ? {
            title: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    };
  };

  return (
    <div className="p-4">
      <h1 className="text-xl py-2">{title} 작성</h1>
      <section className="border-gray-300 flex flex-col gap-3">
        <div className="flex flex-col border-solid border-t">
          <div className="flex justify-between items-center h-16 border-b border-solid border-gray-200">
            <div className="w-1/3 h-full flex justify-center items-center bg-[#F2F4F9]">
              옵션
            </div>
            <div className="w-full flex justify-center items-center h-10 pl-2">
              <label className="flex items-center gap-1">
                <input type="checkbox" id="notice" className="" />
                공지
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center h-16 border-solid border-b border-gray-300">
            <div className="w-1/3 h-full flex justify-center items-center bg-[#F2F4F9]">
              제목
            </div>
            <div className="w-full flex justify-center items-center h-10 pl-2">
              <input
                type="text"
                id="title"
                className="truncate appearance-none border border-solid w-[100%] px-7 py-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></input>
            </div>
          </div>
        </div>
        <section>
          <PostEditor value={content} onChange={handleContentChange} />
        </section>
        <div className="w-full flex justify-end gap-2">
          <button className="border-solid border border-blue text-blue px-4 py-2 w-24 h-12 hover:bg-indigo-100">
            취소
          </button>
          <button
            type="submit"
            className="bg-blue text-white px-4 py-2 w-24 h-12 hover:bg-blue"
          >
            작성완료
          </button>
        </div>
      </section>
    </div>
  );
};

export default Write;
