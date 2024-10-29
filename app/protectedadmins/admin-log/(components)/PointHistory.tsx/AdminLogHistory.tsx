import React from "react";
import AdminLogHistoryClient from "./AdminLogHistoryClient";

type AdminLog = {
  id: number;
  actionType: number;
  username: string;
  content: string;
  createdDt: string;
};

async function fetchAdminLogs(): Promise<AdminLog[]> {
  return [
    {
      id: 1,
      actionType: 10,
      username: "user123",
      content: "댓글 작성",
      createdDt: "2024-10-28T15:30:00",
    },
    {
      id: 2,
      actionType: 3,
      username: "user456",
      content: "포인트 히스토리 조회",
      createdDt: "2024-10-29T12:00:00",
    },
  ];
}

export default async function AdminLogHistory() {
  const histories = await fetchAdminLogs();

  return (
    <div className="w-full p-3">
      {/* Admin Log Histories Table */}
      <AdminLogHistoryClient histories={histories} />
    </div>
  );
}
