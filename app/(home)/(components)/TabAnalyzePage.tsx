import { TabAnalyzeClient } from "./TabAnalyzeClient";
import { BoardItem } from "@/app/types";

async function fetchInitialData(typ: number) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/guest/list?typ=${typ}&keyword=&page=0&size=5`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch initial data");
    }

    const data = await response.json();
    return data.data.content as BoardItem[];
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return [];
  }
}

const TabAnalyzePage = async () => {
  const initialTab = 0;
  const typMap = [2, 3, 4, 5];
  const initialData = await fetchInitialData(typMap[initialTab]);

  return <TabAnalyzeClient initialTab={initialTab} initialData={initialData} />;
};

export default TabAnalyzePage;
