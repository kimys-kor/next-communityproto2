import Link from "next/link";

interface CardData {
  category: String;
  title: String;
  comment: number;
}

type CardProps = {
  title: String;
  cardData: CardData[];
};

const Card: React.FC<CardProps> = ({ title, cardData }) => {
  return (
    <div className="w-full  rounded-md bg-white font-semibold border-solid border-slate-200 border">
      <div className="h-11 px-3 leading-8 flex justify-between items-center border-solid border-b border-gray-200">
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="group cursor-pointer bg-semiblue w-6 h-6 flex justify-center items-center rounded-full hover:bg-blue">
          <svg
            width="13"
            height="13"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-blue group-hover:text-white transition-colors cursor-pointer"
          >
            <rect x="45" y="10" width="10" height="80" />
            <rect x="10" y="45" width="80" height="10" />
          </svg>
        </div>
      </div>
      {cardData.map((item, index) => (
        <div
          key={index}
          className={`w-full h-10 px-3 flex justify-start items-center gap-1 ${
            index !== cardData.length - 1
              ? "border-b border-dashed border-slate-200"
              : ""
          }`}
        >
          <p className="hidden lg:block truncate px-1 border-solid text-blue border-blue border rounded-xl text-xs font-semibold">
            {item.category}
          </p>
          <span className="flex justify-start items-center gap-2">
            <p className="truncate text-sm">주가는 언제나 실적에 수렴한다</p>
            <span className="truncate text-red-500 text-[10px] flex justify-center items-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-red-500"
              >
                <rect x="45" y="10" width="10" height="80" />
                <rect x="10" y="45" width="80" height="10" />
              </svg>
              23
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Card;
