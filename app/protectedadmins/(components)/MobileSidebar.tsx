"use client";

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function MobileSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="flex md:hidden items-center p-4 bg-gray-800 text-white">
        <button onClick={toggleSidebar} className="p-2">
          <FiMenu size={24} />
        </button>
        <h1 className="ml-4 text-lg font-semibold">꽁머니팡 관리자</h1>
      </header>

      <aside
        className={`fixed inset-y-0 left-0 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 bg-gray-100 w-64 md:hidden h-full p-6`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-800"
        >
          ✕
        </button>

        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold">관리자메뉴</p>
        </div>
      </aside>
    </>
  );
}
