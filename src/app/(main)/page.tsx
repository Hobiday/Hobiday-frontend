import AdBanner from "./_component/banner";
import PerformanceList from "./_component/performance-list";

const TAB_CATEGORY = [
  { id: 0, name: "전체" },
  { id: 1, name: "공연" },
  { id: 2, name: "뮤지컬" },
  { id: 3, name: "대중무용" },
  { id: 4, name: "서커스/마술" },
  { id: 5, name: "무용" },
  { id: 6, name: "복합" },
];

export default function HomePage() {
  return (
    <>
      <AdBanner />
      <PerformanceList />
    </>
  );
}
