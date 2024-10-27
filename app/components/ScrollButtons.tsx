"use client";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollButtons: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed flex md:fixed md:flex bottom-20 md:bottom-4 right-4  flex-col items-center space-y-2">
      <button
        onClick={scrollToTop}
        className="p-2 bg-blue/50 text-white rounded-full shadow-lg hover:bg-sky-600 transition duration-300"
      >
        <FaArrowUp size={24} />
      </button>
      <button
        onClick={scrollToBottom}
        className="p-2 bg-blue/50 text-white rounded-full shadow-lg hover:bg-sky-600 transition duration-300"
      >
        <FaArrowDown size={24} />
      </button>
    </div>
  );
};

export default ScrollButtons;
