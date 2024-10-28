import Link from "next/link";

interface MenuItem {
  name: string;
  subMenu: { name: string; link: string }[];
}

const menuItems: MenuItem[] = [
  {
    name: "회원관리",
    subMenu: [
      { name: "회원 목록", link: "/admin/members" },
      { name: "회원 통계", link: "/admin/member-stats" },
    ],
  },
  {
    name: "게시글로그",
    subMenu: [
      { name: "로그 목록", link: "/admin/post-logs" },
      { name: "로그 통계", link: "/admin/post-stats" },
    ],
  },
  {
    name: "포인트로그",
    subMenu: [
      { name: "포인트 내역", link: "/admin/point-history" },
      { name: "포인트 설정", link: "/admin/point-settings" },
    ],
  },
  {
    name: "승점보드관리",
    subMenu: [
      { name: "보드 목록", link: "/admin/score-board" },
      { name: "보드 설정", link: "/admin/board-settings" },
    ],
  },
  {
    name: "IP관리",
    subMenu: [
      { name: "IP 목록", link: "/admin/ip-list" },
      { name: "IP 차단 설정", link: "/admin/ip-settings" },
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
            {/* Main Menu Item */}
            <li className="px-4 py-3 rounded-md bg-blue-500 text-black font-bold hover:bg-blue-600 transition-colors">
              {item.name}
            </li>
            {/* Submenu Items */}
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
