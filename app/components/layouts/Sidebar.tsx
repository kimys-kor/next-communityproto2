import Login from "../login/Login";
import Logo from "../Logo";
import CloseIcon from "/public/images/icon/closeIcon.svg";
import partnerIcon from "/public/images/partnerIcon.png";
import sportIcon from "/public/images/sportIcon.png";
import commuIcon from "/public/images/commuIcon.png";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  {
    href: "/partner",
    label: "파트너",
    icon: (
      <Image
        src={partnerIcon}
        width={33}
        height={33}
        alt="menuIcon"
        className="hidden lg:block"
      />
    ),
  },
  {
    href: "/sport",
    label: "스포츠분석",
    dropdown: [
      { href: "/sport", label: "축구분석" },
      { href: "/sport/base", label: "야구분석" },
      { href: "/sport/basket", label: "농구분석" },
      { href: "/sport/volley", label: "배구분석" },
    ],
    icon: (
      <Image
        src={sportIcon}
        width={33}
        height={33}
        alt="menuIcon"
        className="hidden lg:block"
      />
    ),
  },
  {
    href: "/community",
    label: "커뮤니티",
    dropdown: [
      { href: "/community", label: "안구정화" },
      { href: "/community/humor", label: "유머 & 이슈" },
      { href: "/community/pickster", label: "나는분석왕" },
      { href: "/community/free", label: "자유게시판" },
      { href: "/community/case", label: "피해사례" },
    ],
    icon: (
      <Image
        src={commuIcon}
        width={33}
        height={33}
        alt="menuIcon"
        className="hidden lg:block"
      />
    ),
  },
  {
    href: "/event",
    label: "이벤트",
  },
  {
    href: "/promotion",
    label: "홍보센터",
    dropdown: [
      { href: "/promotion", label: "일반홍보" },
      { href: "/promotion/ggong", label: "꽁머니홍보" },
      { href: "/promotion/hunting", label: "구인구직" },
    ],
  },
  {
    href: "/guide",
    label: "가이드",
    dropdown: [
      { href: "/guide/ggong", label: "꽁머니" },
      { href: "/guide/major", label: "메이저" },
      { href: "/guide/safe", label: "안전놀이터" },
    ],
  },
  {
    href: "/customer",
    label: "고객센터",
    dropdown: [
      { href: "/customer", label: "공지사항" },
      { href: "/customer/qalist", label: "1:1 문의" },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-100 to-subgray shadow-lg rounded-r-xl transform transition-transform duration-300 overflow-y-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section className="bg-white border-b-2 border-blue-600 w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center px-4 py-3">
          <Logo />
          <div className="flex justify-end p-2">
            <button
              className="text-xl border border-blue-600 bg-blue-600 rounded-full p-2 text-white transition-transform transform hover:scale-110"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 p-4">
        <div className="mb-4">
          <Login />
        </div>
        <article className="bg-white rounded-lg shadow-md p-4 space-y-4">
          {links.map((link, index) => (
            <div key={index} className="space-y-4">
              <ul>
                <Link href={link.href}>
                  <li
                    onClick={onClose}
                    className="text-blue font-semibold text-lg mb-2 flex items-center"
                  >
                    <div className="flex">
                      <span className="ml-2">{link.label}</span>
                      {link.icon}
                    </div>
                  </li>
                </Link>
              </ul>
              {link.dropdown && (
                <ul className="space-y-1">
                  {link.dropdown.map((item, subIndex) => (
                    <Link href={item.href}>
                      <li
                        key={subIndex}
                        className="hover:bg-blue-50 hover:text-blue p-3 rounded-lg transition duration-200"
                        onClick={onClose}
                      >
                        {item.label}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default Sidebar;
