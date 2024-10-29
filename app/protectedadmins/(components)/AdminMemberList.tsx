import React from "react";
import AdminMemberListClient from "./AdminMemberListClient";

type Member = {
  id: number;
  username: string;
  phoneNum: string;
  fullName: string;
  nickname: string;
  point: number;
  exp: number;
  status: string;
  createdDt: string;
  lastLogin: string | null;
};

async function fetchMembers(): Promise<Member[]> {
  return [
    {
      id: 2,
      username: "kwn201",
      phoneNum: "123123",
      fullName: "이준호",
      nickname: "제우스",
      point: 0,
      exp: 0,
      status: "NORMAL",
      createdDt: "2024.10.29 00:24:47",
      lastLogin: null,
    },
    {
      id: 3,
      username: "user202",
      phoneNum: "987654",
      fullName: "김철수",
      nickname: "헬리오스",
      point: 10,
      exp: 5,
      status: "ACTIVE",
      createdDt: "2024.10.29 01:15:22",
      lastLogin: "2024.10.29 02:00:00",
    },
  ];
}

export default async function AdminMemberList() {
  const members = await fetchMembers();

  return (
    <div className="w-full p-3">
      {/* Members Table */}
      <AdminMemberListClient members={members} />
    </div>
  );
}
