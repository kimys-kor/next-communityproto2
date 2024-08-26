import CloseIcon from "/public/images/icon/closeIcon.svg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-end p-4">
          <button className="text-xl" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
