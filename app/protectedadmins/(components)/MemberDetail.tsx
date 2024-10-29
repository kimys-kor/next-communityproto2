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

type MemberDetailProps = {
  member: Member;
  onBack: () => void;
};

function MemberDetail({ member, onBack }: MemberDetailProps) {
  return (
    <div className="p-4 bg-white rounded-md border border-gray-300 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">회원 상세 정보</h2>
      <div className="space-y-2 text-gray-700">
        <p>
          <strong>ID:</strong> {member.id}
        </p>
        <p>
          <strong>아이디:</strong> {member.username}
        </p>
        <p>
          <strong>전화번호:</strong> {member.phoneNum}
        </p>
        <p>
          <strong>이름:</strong> {member.fullName}
        </p>
        <p>
          <strong>닉네임:</strong> {member.nickname}
        </p>
        <p>
          <strong>포인트:</strong> {member.point}
        </p>
        <p>
          <strong>경험치:</strong> {member.exp}
        </p>
        <p>
          <strong>상태:</strong> {member.status}
        </p>
        <p>
          <strong>생성 날짜:</strong> {member.createdDt}
        </p>
        <p>
          <strong>마지막 로그인:</strong> {member.lastLogin || "모름"}
        </p>
      </div>
      <button
        onClick={onBack}
        className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
      >
        목록으로 돌아가기
      </button>
    </div>
  );
}

export default MemberDetail;
