import Board from "@/app/components/boards/Board";
import ThreeBanner from "@/app/components/ThreeBanner";
import ProgressSliderPage from "@/app/components/ProgressSliderPage";
import Breadcrumb from "@/app/components/BreadCrumb";

function page() {
  const breadcrumbItems = {
    title: "고객센터",
    subMenu: "1:1문의",
  };

  return (
    <div className="flex flex-col max-w-[1300px]">
      <ThreeBanner />
      <div>
        <ProgressSliderPage></ProgressSliderPage>
      </div>
      <Breadcrumb breadcrumbData={breadcrumbItems}></Breadcrumb>
      <Board />
    </div>
  );
}

export default page;
