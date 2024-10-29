"use client";
import React, { useState } from "react";
import MemberDetail from "./MemberDetail";
import Paging from "@/app/components/Paging";
import { FaTrash, FaArrowRight } from "react-icons/fa";

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

type MemberListClientProps = {
  members: Member[];
};

function AdminMemberListClient({ members }: MemberListClientProps) {
  const size = 15;
  const [searchField, setSearchField] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalElements, setTotalElements] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    setCurrentPage(1);
  };

  const filteredMembers = members.filter((member) => {
    if (searchField === "all") {
      return (
        member.username.includes(searchQuery) ||
        member.phoneNum.includes(searchQuery) ||
        member.fullName.includes(searchQuery) ||
        member.nickname.includes(searchQuery) ||
        member.status.includes(searchQuery) ||
        member.createdDt.includes(searchQuery)
      );
    }
    return member[searchField as keyof Member]
      ?.toString()
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  if (selectedMember) {
    return (
      <MemberDetail
        member={selectedMember}
        onBack={() => setSelectedMember(null)}
      />
    );
  }

  return (
    <div>
      {/* Search Controls */}
      <div className="flex items-center gap-3 mb-6 p-3 bg-white rounded-md border border-solid border-gray-200 shadow-sm">
        <select
          className="p-2 border border-solid border-gray-300 rounded bg-gray-100 text-gray-700 text-sm"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        >
          <option value="all">전체</option>
          <option value="username">회원의 아이디</option>
          <option value="phoneNum">전화번호</option>
          <option value="fullName">풀네임</option>
          <option value="nickname">닉네임</option>
          <option value="status">상태</option>
          <option value="createdDt">날짜</option>
        </select>
        <input
          type="text"
          placeholder="검색어 입력"
          className="p-2 border border-solid border-gray-300 rounded w-64 text-gray-700 text-sm bg-gray-100"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={() => console.log("Search clicked")}
          className="px-4 py-2 bg-gray-600 text-white text-sm rounded-md font-medium"
        >
          검색
        </button>
      </div>

      <header className="flex justify-between items-center w-full text-xs md:text-sm text-[#555555]">
        <div className="flex gap-2">
          <div className="text-[#555555] text-sm flex items-center gap-2">
            총
            <span className="text-[#2C4AB6] font-semibold">
              {totalElements}
            </span>
            건
          </div>
          <div className="text-[#555555] text-sm">
            {"("}
            <span className="text-[#2C4AB6] font-semibold">{page}</span> /{" "}
            <span>{totalPages}</span> 페이지{")"}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <label className="flex items-center cursor-pointer text-purple-600 text-sm gap-1 hover:text-purple-800">
            <input type="checkbox" className="hidden" />
            <span>전체선택</span>
          </label>
          <button className="flex items-center gap-1 text-red-600 text-sm hover:text-red-800">
            <FaTrash />
            <span>차단처리</span>
          </button>
        </div>
      </header>

      {/* Members Table */}
      <div className="mt-5 w-full overflow-x-auto">
        <div className="min-w-max mx-auto">
          <table className="w-full bg-white truncate border border-solid border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="py-2 px-4 border-b border-solid">ID</th>
                <th className="py-2 px-4 border-b border-solid">아이디</th>
                <th className="py-2 px-4 border-b border-solid">전화번호</th>
                <th className="py-2 px-4 border-b border-solid">이름</th>
                <th className="py-2 px-4 border-b border-solid">닉네임</th>
                <th className="py-2 px-4 border-b border-solid">포인트</th>
                <th className="py-2 px-4 border-b border-solid">경험치</th>
                <th className="py-2 px-4 border-b border-solid">상태</th>
                <th className="py-2 px-4 border-b border-solid">생성 날짜</th>
                <th className="py-2 px-4 border-b border-solid">
                  마지막 로그인
                </th>
                <th className="py-2 px-4 border-b border-solid">수정</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr
                  key={member.id}
                  className={`text-gray-600 text-sm ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-200 transition-colors duration-200`}
                >
                  <td className="py-2 px-4 border-b border-solid text-center">
                    {member.id}
                  </td>
                  <td className="py-2 px-4 border-b border-solid">
                    {member.username}
                  </td>
                  <td className="py-2 px-4 border-b border-solid">
                    {member.phoneNum}
                  </td>
                  <td className="py-2 px-4 border-b border-solid">
                    {member.fullName}
                  </td>
                  <td className="py-2 px-4 border-b border-solid">
                    {member.nickname}
                  </td>
                  <td className="py-2 px-4 border-b border-solid text-center">
                    {member.point}
                  </td>
                  <td className="py-2 px-4 border-b border-solid text-center">
                    {member.exp}
                  </td>
                  <td className="py-2 px-4 border-b border-solid text-center">
                    {member.status}
                  </td>
                  <td className="py-2 px-4 border-b border-solid text-center">
                    {member.createdDt}
                  </td>
                  <td className="py-2 px-4 border-b border-solid text-center">
                    {member.lastLogin ? member.lastLogin : "모름"}
                  </td>
                  <td className="py-2 px-4 border-b border-solid text-center">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="px-3 py-1 text-xs text-gray-700 border border-solid border-gray-500 rounded hover:bg-gray-500 hover:text-white transition-colors duration-200"
                    >
                      수정
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10">
        <Paging
          page={currentPage}
          size={size}
          totalElements={totalElements}
          setPage={handlePageChange}
          scroll={"top"}
        />
      </div>
    </div>
  );
}

export default AdminMemberListClient;
