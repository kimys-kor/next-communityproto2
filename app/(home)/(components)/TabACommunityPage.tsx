import { TabACommunityClient } from "./TabCommunityClient";

const fetchInitialData = async () => {
  const response = await fetch(
    `${process.env.API_URL}/guest/list?typ=6&keyword=&page=0&size=4`,
    { method: "GET" }
  );
  const data = await response.json();
  return data.data.content.map((item: any) => ({
    id: item.id,
    title: item.title,
    img: `/images/dog${(item.id % 4) + 1}.PNG`,
    date: "24.06.12",
    writer: item.username || "관리자",
  }));
};

const TabACommunityPage = async () => {
  const initialData = await fetchInitialData();
  return <TabACommunityClient initialTab={0} initialData={initialData} />;
};

export default TabACommunityPage;
