import { MainLayout } from "@/components/layout";

import Pencil from "@/assets/icons/pencil.svg";
import Search from "@/assets/icons/search.svg";
import TextLogo from "../../../../public/img/logo-text.svg";

export default function FeedPage() {
  const headerProps = {
    title: "피드",
    leftIcons: [{ icon: <TextLogo />, path: "/" }],
    rightIcons: [
      { icon: <Pencil />, path: "/wishlist", size: 24 },
      { icon: <Search />, path: "/search", size: 24 },
    ],
  };

  return (
    <>
      <MainLayout headerProps={headerProps}>FeedPage</MainLayout>
    </>
  );
}
