"use client";
import { useEffect, useState } from "react";
import Avatar from "@/app/components/Avatar";
import { removeCookie } from "../api/authAction";
import { useAuthStore } from "@/app/globalStatus/useAuthStore";

function Profile() {
  const { setLoggedIn } = useAuthStore();
  const [userInfo, setUserInfo] = useState<any | null>(null); // Local state for userInfo

  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const logoutSubmit = () => {
    removeCookie();
    setLoggedIn(false);
    sessionStorage.removeItem("userInfo");
  };

  return (
    <section className="p-2 flex flex-col gap-2 items-center justify-center">
      <Avatar />
      <h1 className="text-xl font-medium">{userInfo?.nickname || "Guest"}</h1>
      <div className="flex justify-center items-center gap-2"></div>
      <div>
        이름:
        <span className="text-base text-black font-medium">
          {" "}
          {userInfo?.fullName || "Unknown"}
        </span>
      </div>
      <div>
        포인트:
        <span className="text-base text-blue font-medium">
          {" "}
          {userInfo?.point ?? 0}
        </span>
      </div>
      <button
        onClick={logoutSubmit}
        className="py-3 px-4 bg-blue hover:bg-[#2250f5] text-white font-bold w-full rounded focus:outline-none"
      >
        로그아웃
      </button>
    </section>
  );
}

export default Profile;
