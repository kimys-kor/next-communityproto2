"use client";

import React, { useState } from "react";
import IdIcon from "/public/images/icon/idIcon.svg";
import PassIcon from "/public/images/icon/passIcon.svg";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Here you would typically handle the login logic, such as making an API call
  };

  return (
    <div className="p-8 rounded-lg w-full border-solid border-slate-200 border">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="relative mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="truncate appearance-none border rounded w-full pl-9 py-2 px-3 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
            placeholder="아이디"
            required
          />
          <IdIcon className="absolute top-2 left-2"></IdIcon>
        </div>
        <div className="relative mb-4">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="truncate appearance-none border rounded w-full pl-9 py-2 px-3 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
            placeholder="비밀번호"
            required
          />
          <PassIcon className="absolute top-2 left-2"></PassIcon>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center justify-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4  bg-gray-100 "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 font-normal text-sm truncate leading-tight"
            >
              자동로그인
            </label>
          </div>
          <Link
            href={"/signup"}
            className="text-blue font-normal text-sm cursor-pointer leading-tight"
          >
            회원가입
          </Link>
        </div>
        <div className="flex flex-col gap-2 items-center justify-between">
          <button
            type="submit"
            className="py-4 px-4  bg-blue hover:bg-[#2250f5] text-white font-bold w-full rounded focus:outline-none"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
