"use client";

import Pencil from "@/assets/icons/pencil.svg";
import Search from "@/assets/icons/search.svg";
import FeedPageList from "@/components/feed/index";
import { MainLayout } from "@/components/layout";
import TextLogo from "../../../../public/img/logo-text.svg";

interface Feed {
  feedId: number;
  profileImage: string;
  profileName: string;
  time: string;
  feedFiles: string[];
  contents: string;
  hashTag: string[];
  likeCount: number;
  liked: boolean;
  commentCount: number;
  isFollowing: false;
}

export default function FeedPage() {
  const headerProps = {
    title: "피드",
    leftIcons: [{ icon: <TextLogo />, path: "/" }],
    rightIcons: [
      { icon: <Pencil />, path: "/feed/upload", size: 24 },
      { icon: <Search />, path: "/search", size: 24 },
    ],
  };

  return (
    <MainLayout headerProps={headerProps}>
      <FeedPageList />
    </MainLayout>
  );
}
