<<<<<<< HEAD
import Settings from "@/assets/icons/setting.svg";
import { MainLayout } from "@/components/layout";
import TextLogo from "../../../../public/img/logo-text.svg";
=======
import { MainLayout } from "@/components/layout";
import TextLogo from "../../../../public/img/logo-text.svg";
import Settings from "@/assets/icons/setting.svg";
>>>>>>> 6ce99fb (✨ Feat: 마이페이지, 프로필 편집 페이지 제작)
import MyProfilePage from "./_components/myprofile";

export default function MyPage() {
  const headerProps = {
    leftIcons: [{ icon: <TextLogo />, path: "/" }],
<<<<<<< HEAD
    rightIcons: [{ icon: <Settings />, path: "/my/setting", size: 24 }],
=======
    rightIcons: [{ icon: <Settings />, path: "/setting", size: 24 }],
>>>>>>> 6ce99fb (✨ Feat: 마이페이지, 프로필 편집 페이지 제작)
  };

  return (
    <MainLayout headerProps={headerProps}>
      <MyProfilePage />
    </MainLayout>
  );
}
