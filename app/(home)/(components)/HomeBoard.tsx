import React from "react";
import StarIcon from "/public/images/icon/starIcon.svg";
import HomeBoardCard from "./HomeBoardCard";

function HomeBoard() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 px-2">
      <article className="flex flex-col gap-2">
        <div className="font-bold text-lg flex justify-between items-center">
          <div className="flex items-center justify-between">
            <StarIcon></StarIcon>
            <h1 className="text-lg font-bold">주간 베스트</h1>
          </div>
          <div className="group cursor-pointer bg-semiblue w-6 h-6 flex justify-center items-center rounded-full hover:bg-blue">
            <svg
              width="13"
              height="13"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-blue group-hover:text-white transition-colors cursor-pointer"
            >
              <rect x="45" y="10" width="10" height="80" />
              <rect x="10" y="45" width="80" height="10" />
            </svg>
          </div>
        </div>
        <HomeBoardCard></HomeBoardCard>
      </article>
      <article className="flex flex-col gap-2">
        <div className="font-bold text-lg flex justify-between items-center">
          <div className="flex items-center justify-between">
            <StarIcon></StarIcon>
            <h1 className="text-lg font-bold">실시간 베스트</h1>
          </div>
          <div className="group cursor-pointer bg-semiblue w-6 h-6 flex justify-center items-center rounded-full hover:bg-blue">
            <svg
              width="13"
              height="13"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-blue group-hover:text-white transition-colors cursor-pointer"
            >
              <rect x="45" y="10" width="10" height="80" />
              <rect x="10" y="45" width="80" height="10" />
            </svg>
          </div>
        </div>
        <HomeBoardCard></HomeBoardCard>
      </article>
    </section>
  );
}

export default HomeBoard;
