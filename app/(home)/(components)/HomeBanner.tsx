import React from "react";
import Image from "next/image";

interface imgContent {
  img: string;
}
[];

async function interval() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return [
    { img: "/images/homebanner/1.jpg" },
    { img: "/images/homebanner/2.png" },
    { img: "/images/homebanner/3.jpg" },
    { img: "/images/homebanner/4.jpg" },
    { img: "/images/homebanner/5.jpg" },
    { img: "/images/homebanner/6.jpg" },
    { img: "/images/homebanner/1.jpg" },
    { img: "/images/homebanner/2.png" },
    { img: "/images/homebanner/3.jpg" },
    { img: "/images/homebanner/4.jpg" },
    { img: "/images/homebanner/5.jpg" },
    { img: "/images/homebanner/6.jpg" },
    { img: "/images/homebanner/1.jpg" },
    { img: "/images/homebanner/2.png" },
    { img: "/images/homebanner/3.jpg" },
    { img: "/images/homebanner/4.jpg" },
    { img: "/images/homebanner/5.jpg" },
    { img: "/images/homebanner/6.jpg" },
  ];
}

async function HomeBanner() {
  const imgContent = interval();

  return (
    <main className="w-full h-auto bg-white rounded-2xl flex flex-col items-center">
      <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {(await imgContent).map((item, index) => (
          <li key={index} className="grid-element">
            <Image
              fill
              className="w-full h-auto rounded-md"
              src={item.img}
              alt={`homeBanner ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomeBanner;
