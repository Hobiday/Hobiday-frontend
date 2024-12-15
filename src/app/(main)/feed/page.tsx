import { MainLayout } from "@/components/layout";
import Pencil from "@/assets/icons/pencil.svg";
import Search from "@/assets/icons/search.svg";
import TextLogo from "../../../../public/img/logo-text.svg";
import FeedPageList from "@/components/feed/index";

export default function FeedPage() {
  const headerProps = {
    title: "피드",
    leftIcons: [{ icon: <TextLogo />, path: "/" }],
    rightIcons: [
      { icon: <Pencil />, path: "/feed/upload", size: 24 },
      { icon: <Search />, path: "/search", size: 24 },
    ],
  };

  const loggedInProfileId: number = 5; // 로그인 유저의 profileId 설정

  return (
    <MainLayout headerProps={headerProps}>
      <FeedPageList loggedInProfileId={loggedInProfileId} />
    </MainLayout>
  );
}
