"use client";

import Image from "next/image";
import React from "react";
import { Banner } from "@/app/types";

interface ThreeBannerClientProps {
  banners: Banner[];
}

const ThreeBannerClient: React.FC<ThreeBannerClientProps> = ({ banners }) => {
  return (
    <section className="mt-3 w-full h-auto shadow-md flex flex-col items-center">
      <ul className="w-full grid grid-cols-2 lg:grid-cols-3">
        {banners.map((banner, index) => (
          <li key={banner.id} className={index === 2 ? "hidden lg:block" : ""}>
            <Image
              src={banner.thumbNail}
              alt={banner.partnerName}
              width={234}
              height={98}
              className="w-full h-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ThreeBannerClient;
