"use client";

import { useState, useEffect } from "react";
import IdIcon from "/public/images/idIcon.png";
import PassIcon from "/public/images/passIcon.png";
import Link from "next/link";
import Image from "next/image";
import { LoginServerAction } from "@/app/api/loginAction";
import { useAuthStore } from "@/app/globalStatus/useAuthStore";
import { useUserStore } from "@/app/globalStatus/useUserStore";

const Login: React.FC = () => {
  const { accessToken, setAccessToken } = useAuthStore();
  const { isLoggedIn, setIsLoggedIn } = useUserStore();
  const [hasMounted, setHasMounted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.set("username", username);
    formData.set("password", password);

    try {
      const token = await LoginServerAction(formData);

      if (typeof token === "string") {
        setAccessToken(token); // 상태 업데이트
        setIsLoggedIn(true); // 로그인 상태 갱신
        sessionStorage.setItem("is_logged", "true");
      } else {
      }
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  useEffect(() => {
    let isLoggedIn = sessionStorage.getItem("is_logged");
    const booleanValue = isLoggedIn === "true";

    if (!booleanValue) {
    }

    setHasMounted(true);
  }, []);

  return (
    <div className="max-w-128 bg-white p-8 rounded-lg w-full border-solid border-slate-200 border">
      <form onSubmit={onSubmit}>
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
    </div>
  );
};

export default Login;
