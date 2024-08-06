"use client";

import React from "react";
import { BeatLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex justify-center items-center fixed left-0 top-0 w-full h-full bg-white">
      <BeatLoader color="#1a17f1" />
    </div>
  );
}

export default Loading;
