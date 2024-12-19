"use client";

import { getMyProfile } from "@/apis/user-api";
import { useUserStore } from "@/stores/useUserStore";
import { useEffect } from "react";
import axios from "axios";
import ProfileImage from "./profile-image";
import ProfileName from "./profile-name";
import ProfileGenres from "./profile-genres";
import ProfileStats from "./profile-stats";
import LoadingSpinner from "@/components/commons/spinner";
import NoFeedSection from "./no-feed";
import Link from "next/link";

export default function MyProfilePage() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const data = await getMyProfile();
        console.log(data.result);
        setUser(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfile();
  }, [setUser]);

  if (!user) {
    return (
      <div>
        <LoadingSpinner />{" "}
      </div>
    );
  }

  return (
    <div className="bg-flat min-h-screen flex flex-col items-center">
      <div className="bg-white w-full p-4 shadow-md">
        <ProfileImage profileImageUrl={user.profileImageUrl} />
        <ProfileName profileNickname={user.profileNickname} profileIntroduction={user.profileIntroduction} />
        <ProfileGenres profileGenres={user.profileGenres} />
        <ProfileStats />

        {/* 버튼 */}
        <div className="flex gap-4 justify-center">
          <Link
            href="my/edit"
            className="px-4 py-2 w-48 text-center border border-gray-300 text-sm text-gray-700 rounded-lg"
          >
            프로필 편집하기
          </Link>
          <Link
            href="feed/upload"
            className="px-4 py-2 w-48 text-center bg-blue-500 text-sm text-white rounded-lg bg-gradient-to-br from-secondary to-primary to-80%"
          >
            글쓰기
          </Link>
        </div>
      </div>

      {/* 하단 섹션 */}
      <NoFeedSection />
    </div>
  );
}
