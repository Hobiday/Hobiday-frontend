<<<<<<< HEAD
import { MainLayout } from "@/components/layout";
import AdBanner from "./_components/banner";
import PerformanceList from "./_components/performance-list";

import Search from "@/assets/icons/search.svg";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TextLogo from "../../../public/img/logo-text.svg";
=======
import LoadingSpinner from "@/components/spinner";
<<<<<<< HEAD
import heart_pressed from "@/assets/icons/heart_pressed.svg";
>>>>>>> 09c1441 (✨Feat : svg 시범 추가)
=======
>>>>>>> c18953d (✨ Feat: svg 파일 컴포넌트화 설정)

export default function HomePage() {
  const headerProps = {
    leftIcons: [{ icon: <TextLogo />, path: "/" }],
    rightIcons: [{ icon: <Search />, path: "/search", size: 24 }],
  };

  const refreshToken = cookies().get("refreshToken");

  if (!refreshToken) {
    redirect("/login");
  }

  return (
<<<<<<< HEAD
    <MainLayout headerProps={headerProps}>
      <AdBanner />
      <PerformanceList />
    </MainLayout>
=======
    <section>
      <h2 className="font-bold text-2xl underline">Homepage</h2>
      <LoadingSpinner />
    </section>
>>>>>>> 09c1441 (✨Feat : svg 시범 추가)
  );
}
