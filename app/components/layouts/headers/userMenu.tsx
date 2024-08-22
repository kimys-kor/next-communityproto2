"use client";

import Avatar from "../../Avatar";
import { useCallback, useState } from "react";

import Link from "next/link";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-4 md:py-2 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer"
        >
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="z-10 absolute rounded-xl shadow-md w-20 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <Link href={"/myinfo"}>
                <div
                  onClick={toggleOpen}
                  className="px-4 py-3 hover:bg-neutral-100 font-semibold"
                >
                  내정보
                </div>
              </Link>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
