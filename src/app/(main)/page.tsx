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
import heart_pressed from "@/assets/icons/heart_pressed.svg";
>>>>>>> 09c1441 (✨Feat : svg 시범 추가)

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
      {/* 뜨지 않음 */}
      <heart_pressed className="w-8 h-8" />
      {/* Unexpected token 에러 */}
      <img src={heart_pressed} alt="heart" className="w-8 h-8" />
    </section>
>>>>>>> 09c1441 (✨Feat : svg 시범 추가)
  );
}
