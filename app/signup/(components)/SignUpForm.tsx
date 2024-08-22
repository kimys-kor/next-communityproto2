"use client";

import PostEditor from "@/app/components/texteditor/PostEditor";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useForm, Resolver } from "react-hook-form";
import ImageUploader from "@/app/components/ImageUploader";

type FormData = {
  title: string;
  notice: boolean;
};

const SignUpForm: React.FC = () => {
  const [content, setContent] = useState("");
  const quillRef = useRef<ReactQuill>(null);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    saveContent();
  });

  return (
    <div className="p-4">
      <form onSubmit={onSubmit} className="border-gray-300 flex flex-col gap-3">
        <div className="flex flex-col border-solid border-t">
          <div className="flex p-3">
            <p>아이디</p>
            <input></input>
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-blue text-white px-4 py-2 w-24 h-12 hover:bg-blue"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
