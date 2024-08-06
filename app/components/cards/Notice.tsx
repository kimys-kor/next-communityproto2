import React from "react";
import Card from "./Card";

function Notice() {
  const cardData = [
    {
      category: "공지",
      title: "주가는 언제나 실적에 수렴한다",
      comment: 15,
    },
    {
      category: "공지",
      title: "주가는 언제나 실적에 수렴한다",
      comment: 15,
    },
    {
      category: "공지",
      title: "주가는 언제나 실적에 수렴한다",
      comment: 15,
    },
  ];

  return (
    <div>
      <Card title={"공지"} cardData={cardData}></Card>
    </div>
  );
}

export default Notice;
