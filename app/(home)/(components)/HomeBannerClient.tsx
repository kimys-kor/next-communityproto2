"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Banner } from "@/app/types";

interface BannerListProps {
  banners: Banner[];
}

function shuffleArray(array: Banner[]) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

const HomeBannerClient: React.FC<BannerListProps> = ({ banners }) => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);

  useEffect(() => {
    const shuffledBanners = shuffleArray(banners);
    setBannerList(shuffledBanners);
  }, [banners]);

  if (bannerList.length === 0) {
    return (
      <div className="text-center text-gray-500">No banners available.</div>
    );
  }

  return (
    <main className="w-full h-auto bg-white rounded-2xl flex flex-col items-center">
      <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {bannerList.map((banner) => (
          <li key={banner.id} className="grid-element">
            <Image
              src={banner.thumbNail}
              alt={banner.partnerName}
              width={318}
              height={133}
              className="w-full h-auto rounded-md object-cover"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomeBannerClient;
