import Image from "next/image";
import React from "react";

function ThreeBanner() {
  const imgContent = [
    <Image
      key="1"
      width={234}
      height={98}
      className="w-full h-auto"
      src="/images/homebanner/1.jpg"
      alt="homeBanner 1"
    />,
    <Image
      key="2"
      width={234}
      height={98}
      className="w-full h-auto"
      src="/images/homebanner/2.png"
      alt="homeBanner 2"
    />,
    <Image
      key="3"
      width={234}
      height={98}
      className="hidden lg:block w-full h-auto"
      src="/images/homebanner/3.jpg"
      alt="homeBanner 3"
    />,
  ];

  return (
    <section className="mt-3 w-full h-auto shadow-md flex flex-col items-center">
      <ul className="w-full grid grid-cols-2 lg:grid-cols-3">
        {imgContent.map((image, index) => (
          <li key={index}>{image}</li>
        ))}
      </ul>
    </section>
  );
}

export default ThreeBanner;
