import React from "react";

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

const members: Member[] = [
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

function MemberList() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-max mx-auto">
        <table className="w-full bg-white border border-gray-300 border-solid">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">아이디</th>
              <th className="py-2 px-4 border-b">전화번호</th>
              <th className="py-2 px-4 border-b">이름</th>
              <th className="py-2 px-4 border-b">닉네임</th>
              <th className="py-2 px-4 border-b">포인트</th>
              <th className="py-2 px-4 border-b">경험치</th>
              <th className="py-2 px-4 border-b">상태</th>
              <th className="py-2 px-4 border-b">생성 날짜</th>
              <th className="py-2 px-4 border-b">마지막 로그인</th>
              <th className="py-2 px-4 border-b">수정</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr
                key={member.id}
                className={`text-gray-600 text-sm ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="py-2 px-4 border-b text-center">{member.id}</td>
                <td className="py-2 px-4 border-b">{member.username}</td>
                <td className="py-2 px-4 border-b">{member.phoneNum}</td>
                <td className="py-2 px-4 border-b">{member.fullName}</td>
                <td className="py-2 px-4 border-b">{member.nickname}</td>
                <td className="py-2 px-4 border-b text-center">
                  {member.point}
                </td>
                <td className="py-2 px-4 border-b text-center">{member.exp}</td>
                <td className="py-2 px-4 border-b text-center">
                  {member.status}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {member.createdDt}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {member.lastLogin ? member.lastLogin : "모름"}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="px-3 py-1 text-sm text-blue border border-blue rounded hover:bg-blue hover:text-white transition-colors duration-200">
                    수정
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MemberList;
