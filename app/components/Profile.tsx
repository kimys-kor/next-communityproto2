"use client";
import Avatar from "@/app/components/Avatar";
import { removeCookie } from "../api/authAction";

function Profile({ setLoggedIn }: { setLoggedIn: (value: boolean) => void }) {
  const userInfo = {
    nickname: "커뮤관리자",
    Level: 1,
    point: 104200,
    joinDate: "2024-08-25",
  };

  const logoutSubmit = () => {
    removeCookie();
    setLoggedIn(false); // Set loggedIn to false when logging out
  };

  return (
    <section className="p-2 flex flex-col gap-2 items-center justify-center">
      <Avatar />
      <h1 className="text-xl font-medium">{userInfo.nickname}</h1>
      <div className="flex justify-center items-center gap-2">
        <div className="text-sm text-subtext2">
          레벨
          <span className="text-base text-blue font-medium">
            {" "}
            {userInfo.Level}
          </span>
        </div>
        <div className={`h-4 w-[1px] bg-gray-300`} />
        <div className="text-sm text-subtext2">
          포인트
          <span className="text-base text-blue font-medium">
            {" "}
            {userInfo.point}
          </span>
        </div>
      </div>
      <div>
        가입일
        <span className="text-base text-black font-medium">
          {" "}
          {userInfo.joinDate}
        </span>
      </div>

      <button
        onClick={logoutSubmit}
        className="py-3 px-4  bg-blue hover:bg-[#2250f5] text-white font-bold w-full rounded focus:outline-none"
      >
        로그아웃
      </button>
    </section>
  );
}

export default Profile;
