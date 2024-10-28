import Link from "next/link";

interface MenuItem {
  name: string;
  subMenu: { name: string; link: string }[];
}

const menuItems: MenuItem[] = [
  {
    name: "회원관리",
    subMenu: [
      { name: "회원 목록", link: "/protectedadmins/members" },
      { name: "포인트", link: "/protectedadmins/members/point" },
    ],
  },
  {
    name: "게시판관리 ",
    subMenu: [
      { name: "금지어설정", link: "/protectedadmins/posts/forbiddenwords" },
    ],
  },
  {
    name: "댓글관리 ",
    subMenu: [
      { name: "금지어설정", link: "/protectedadmins/comments/forbiddenwords" },
    ],
  },
  {
    name: "포인트로그",
    subMenu: [
      { name: "포인트 히스토리", link: "/protectedadmins/point-history" },
    ],
  },
  {
    name: "IP관리",
    subMenu: [
      { name: "IP 목록", link: "/protectedadmins/iplist" },
      { name: "IP 차단 설정", link: "/protectedadmins/ip-settings" },
    ],
  },
  {
    name: "마스터",
    subMenu: [
      { name: "관리자아이디설정", link: "/protectedadmins/ip-list" },
      { name: "관리자활동로그", link: "/protectedadmins/ip-settings" },
    ],
  },
];

export default function AdminSide() {
  return (
    <div className="bg-gray-100 rounded-lg p-4 h-screen">
      <Link className="hover:text-blue text-lg" href={"/"}>
        유저페이지
      </Link>
      <ul className="mt-10 text-lg font-medium space-y-2">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-4">
            <li className="px-4 py-3 rounded-md bg-blue-500 text-black font-bold hover:bg-blue-600 transition-colors">
              {item.name}
            </li>
            <ul className="mt-2 pl-4 space-y-1">
              {item.subMenu.map((subItem, subIndex) => (
                <Link
                  href={subItem.link}
                  key={subIndex}
                  className="block w-full"
                >
                  <li className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors">
                    {subItem.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
