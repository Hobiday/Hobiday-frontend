import { MainLayout } from "@/components/layout";
import AdBanner from "./_component/banner";
import PerformanceList from "./_component/performance-list";

import Search from "@/assets/icons/search.svg";
import TextLogo from "../../../public/img/logo-text.svg";

export default function HomePage() {
  const headerProps = {
    leftIcons: [{ icon: <TextLogo />, path: "/" }],
    rightIcons: [{ icon: <Search />, path: "/search", size: 24 }],
  };

  return (
    <MainLayout headerProps={headerProps}>
      <AdBanner />
      <PerformanceList />
    </MainLayout>
  );
}
