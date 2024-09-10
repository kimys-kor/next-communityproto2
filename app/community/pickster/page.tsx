import Link from "next/link";
import { FaHome, FaSearch, FaUser, FaBell } from "react-icons/fa";

function page() {
  const breadcrumbItems = {
    title: "커뮤니티",
    subMenu: "나는분석왕",
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
      <div className="flex justify-around items-center p-2">
        <Link href="/" className="flex flex-col items-center">
          <FaHome className="text-gray-600 text-2xl" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center">
          <FaSearch className="text-gray-600 text-2xl" />
          <span className="text-xs">Search</span>
        </Link>
        <Link href="/notifications" className="flex flex-col items-center">
          <FaBell className="text-gray-600 text-2xl" />
          <span className="text-xs">Notifications</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center">
          <FaUser className="text-gray-600 text-2xl" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
}

export default page;
