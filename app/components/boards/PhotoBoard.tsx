"use client";
import Paging from "@/app/components/Paging";
import SelectBox from "@/app/components/SelectBox";
import SearchBox from "@/app/components/search/SearchBox";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

const PhotoBoard = () => {
  const pathname = usePathname();

  // 가상의 데이터
  const items = [
    {
      id: 1,
      title: "게시물 제목",
      name: "사용자 이름",
      date: "2024.06.19",
      views: 100,
      likes: 20,
      dislikes: 5,
      thumbnail: "/images/dog1.PNG",
    },
    {
      id: 2,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
      dislikes: 10,
      thumbnail: "/images/dog2.PNG",
    },
    {
      id: 3,
      title: "다른 게시물 제목",
      name: "다른 사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
      dislikes: 10,
      thumbnail: "/images/dog3.PNG",
    },
    {
      id: 4,
      title: "다른 게시물 제목",
      name: "사용자",
      date: "2024.06.18",
      views: 150,
      likes: 30,
      dislikes: 10,
      thumbnail: "/images/dog4.PNG",
    },
  ];

  const setPage = function () {
    console.log("온체인지");
  };

  const options = [
    { value: "1", label: "전체" },
    { value: "2", label: "제목" },
    { value: "3", label: "제목+내용" },
    { value: "4", label: "작성자" },
  ];
  const handleChange = (value: string) => {
    console.log("Selected value:", value);
    // 여기에 선택된 값 처리 로직 추가
  };

  async function handleSearch() {
    console.log("전체검색");
  }

  return (
    <section className="flex flex-col gap-1 mt-3">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 w-full">
        <div className="flex gap-2">
          <div className="text-[#555555] text-sm">
            총<span className="text-[#2C4AB6] font-semibold"> 34,006</span>건
          </div>
          <div className="text-[#555555] text-sm">
            {"("}
            <span className="text-[#2C4AB6] font-semibold">1</span>/
            <span> 52</span> 페이지
            {")"}
          </div>
        </div>
        <article className="flex justify-center gap-2 ">
          <SelectBox
            options={options}
            onChange={handleChange}
            defaultValue="1"
          />
          <SearchBox
            handleSearch={handleSearch}
            placeholderText="검색어 입력"
          ></SearchBox>
        </article>
      </div>
      <ul className="min-w-full bg-white overflow-hidden overflow-x-auto text-[14px] grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <li key={item.id} className="bg-white rounded-lg cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <Link href={pathname + "/" + item.id}>
                <Image
                  width={326}
                  height={230}
                  className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </Link>
            </div>
            <section className="w-full flex flex-col justify-center px-2 py-4">
              <h1 className="w-full text-center font-bold text-base truncate">
                {item.title}
              </h1>
              <p className="w-full text-center truncate text-base font-medium text-semiblack">
                {item.date}
              </p>
              <p className="w-full text-center truncate text-base text-subtext">
                {item.name}
              </p>
            </section>
          </li>
        ))}
      </ul>
      <span className="w-full flex justify-end">
        <Link href={pathname + "/write"}>
          <button className="bg-blue text-white  hover:bg-mediumblue rounded-sm text-[13px]  px-3 py-3">
            글작성하기
          </button>
        </Link>
      </span>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </section>
  );
};

export default PhotoBoard;
