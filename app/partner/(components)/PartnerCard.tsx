import { PartnerItem } from "@/app/types";
import PartnerCardClient from "./PartnerCardClient";
import { fetchInitialPartnerData } from "@/app/utils";

const PartnerCard = async () => {
  const initialData = await fetchInitialPartnerData();

  return (
    <section className="flex flex-col gap-1">
      <div className="flex justify-between items-center w-full border-b-2 border-blue border-solid">
        <div className="flex gap-2">
          <div className="text-[#555555] text-sm">
            총
            <span className="text-[#2C4AB6] font-semibold">
              {initialData.totalElements}
            </span>
            건
          </div>
          <div className="text-[#555555] text-sm">
            {"("}
            <span className="text-[#2C4AB6] font-semibold">1</span>/{" "}
            <span>{initialData.totalPages}</span> 페이지{")"}
          </div>
        </div>
      </div>
      <PartnerCardClient initialData={initialData} />
    </section>
  );
};

export default PartnerCard;
