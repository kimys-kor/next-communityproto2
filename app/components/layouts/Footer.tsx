import React from "react";
import Logo from "../Logo";
import TeleIcon from "/public/images/icon/teleIcon.svg";
import mobV from "/public/images/mobV.png";
import tele from "/public/images/ggomimg/tele.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="max-w-[1300px]  mx-auto relative w-full h-96 mt-5 border-t border-solid border-gray-200">
      <div className="w-full h-full absolute bg-footer bottom-0 flex items-center justify-center">
        <div className="w-full flex justify-between items-center gap-5">
          <div className="w-1/2 px-5 py-5">
            <Logo></Logo>
            <p className="mt-4 font-semibold">Corporate name 꽁머니팡</p>
            <p className="mt-2 text-gray-400 text-xs leading-5">
              The design and all content of this site are protected under
              copyright law
            </p>
            <p className="text-gray-400 text-xs leading-5">
              and may not be replicated or misappropriated without
              authorization.
            </p>
            <p className="text-gray-400 text-xs leading-5">
              본 사이트의 디자인 및 모든 저작물은 법적 권리에 의해 보호되고
              있습니다. 저작권자의 허락 없이 무단 복제를 금합니다.
            </p>

            <p className="mt-3 text-gray-400 text-xs">
              ⓒ 꽁머니팡. All rights reserved.
            </p>
          </div>
          <div className="w-1/2 flex flex-col px-5 pl-10 lg:pl-40">
            <div className="relative text-lg font-semibold flex gap-2">
              Telegram
              <div>
                <span className="left-20">
                  <TeleIcon></TeleIcon>
                </span>
                ggmoang
              </div>
            </div>
            <p className="mt-3 text-gray-400 text-xs">
              꽁머니팡은 금전요구 및 영업행위를 하지 않습니다.
            </p>
            <p className="text-gray-400 text-xs">
              꽁머니팡을 사칭하는 텔레그램 및 카카오톡에 유의하시기 바랍니다.
            </p>
            <Image
              width={155}
              height={50}
              src={mobV}
              alt="mobileVersion"
              className="mt-5 cursor-pointer"
            ></Image>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
