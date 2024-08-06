import React from "react";

interface imgContent {
  img: string;
}
[];

function ThreeBanner() {
  const imgContent: imgContent[] = [
    { img: "/images/homebanner/1.jpg" },
    { img: "/images/homebanner/2.png" },
    { img: "/images/homebanner/3.jpg" },
  ];

  return (
    <section className="w-full h-auto shadow-md flex flex-col items-center ">
      <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {imgContent.map((item, index) => (
          <li key={index}>
            <img
              className="w-full h-auto"
              src={item.img}
              alt={`homeBanner ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ThreeBanner;
