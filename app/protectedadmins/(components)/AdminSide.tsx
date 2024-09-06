import React from "react";
import Link from "next/link";

function AdminSide() {
  return (
    <div className="border border-solid border-bordercolor3">
      <ul className="gap-3 text-lg font-medium ">
        <Link href={""} className="w-full ">
          <li className="px-4 py-2 w-full textase lg:textase hover:bg-gray-700 hover:text-white border-b border-solid border-bordercolor3">
            회원관리
          </li>
        </Link>
        <Link href={""} className="w-full ">
          <li className="px-4 py-2 w-full textase lg:textase hover:bg-gray-700 hover:text-white border-b border-solid border-bordercolor3">
            게시글로그
          </li>
        </Link>
        <Link href={""} className="w-full ">
          <li className="px-4 py-2 w-full textase lg:textase hover:bg-gray-700 hover:text-white border-b border-solid border-bordercolor3">
            포인트로그
          </li>{" "}
        </Link>
        <Link href={""} className="w-full ">
          <li className="px-4 py-2 w-full textase lg:textase hover:bg-gray-700 hover:text-white border-b border-solid border-bordercolor3">
            승점보드관리
          </li>{" "}
        </Link>
        <Link href={""} className="w-full ">
          <li className="px-4 py-2 w-full textase lg:textase hover:bg-gray-700 hover:text-white ">
            ip관리
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default AdminSide;
