import React from "react";
import PointHistoryClient from "./PointHistoryClient";

type PointHistory = {
  id: number;
  postId: number;
  username: string;
  pointContent: string;
  point: number;
  createdDt: string;
};

async function fetchPointHistories(): Promise<PointHistory[]> {
  return [
    {
      id: 1,
      postId: 101,
      username: "user123",
      pointContent: "포인트 적립",
      point: 50,
      createdDt: "2024.10.28 15:30:00",
    },
    {
      id: 2,
      postId: 102,
      username: "user456",
      pointContent: "포인트 사용",
      point: -20,
      createdDt: "2024.10.29 12:00:00",
    },
  ];
}

export default async function PointHistory() {
  const histories = await fetchPointHistories();

  return (
    <div className="w-full p-3">
      {/* Point Histories Table */}
      <PointHistoryClient histories={histories} />
    </div>
  );
}
