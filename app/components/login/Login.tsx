"use client";

import { useState, useEffect } from "react";
import IdIcon from "/public/images/idIcon.png";
import PassIcon from "/public/images/passIcon.png";
import Link from "next/link";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { loginServerAction } from "@/app/api/loginAction";
import { refreshServerAction } from "@/app/api/refreshAction";
import { useAuthStore } from "@/app/globalStatus/useAuthStore";
import toast from "react-hot-toast";
import UserMenu from "../layouts/headers/userMenu";

const Login: React.FC = () => {
  const { accessToken, setAccessToken } = useAuthStore();
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = sessionStorage.getItem("is_logged");
      setLoggedIn(isLoggedIn === "true");

      if (loggedIn) {
        try {
          const token = await refreshServerAction();

          if (typeof token === "string" && token.length >= 10) {
            setAccessToken(token);
            sessionStorage.setItem("is_logged", "true");
          } else if (token === "실패") {
            toast.error("새로고침 실패");
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    checkLoginStatus();
  }, []);

  const loginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.set("username", username);
    formData.set("password", password);

    try {
      const token = await loginServerAction(formData);

      if (typeof token === "string" && token.length >= 10) {
        setAccessToken(token);
        sessionStorage.setItem("is_logged", "true");
      } else if (token == "실패") {
        toast.error("아이디와 비밀번호를 확인해주세요");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logoutSubmit = () => {
    sessionStorage.removeItem("is_logged");
    revalidatePath("/");
  };

  return (
    <div className="max-w-128 bg-white p-8 rounded-lg w-full border-solid border-slate-200 border">
      {loggedIn ? (
        <UserMenu />
      ) : (
        <form onSubmit={loginSubmit}>
          <div className="relative mb-4">
            <input
              type="string"
              name="username"
              className="truncate appearance-none border rounded w-full pl-9 py-2 px-3 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Image
              src={IdIcon}
              width={17}
              height={17}
              alt="Id Icon"
              className="absolute top-2 left-2"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              name="password"
              className="truncate appearance-none border rounded w-full pl-9 py-2 px-3 font-normal text-sm text-gray-700 leading-tight focus:outline-none"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Image
              src={PassIcon}
              width={17}
              height={17}
              alt="Password Icon"
              className="absolute top-2 left-2"
            />
          </div>
          <section className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 items-center justify-between">
              <button
                type="submit"
                className="py-3 px-4  bg-blue hover:bg-[#2250f5] text-white font-bold w-full rounded focus:outline-none"
              >
                로그인
              </button>
            </div>
            <div className="flex flex-col gap-2 items-center justify-between">
              <Link className="w-full" href={"/signup"}>
                <button
                  type="submit"
                  className="py-3 px-4  bg-[#6870e9] hover:bg-[#525dee] text-white font-bold w-full rounded focus:outline-none"
                >
                  회원가입
                </button>
              </Link>
            </div>
          </section>
        </form>
      )}
    </div>
  );
};

export default Login;
