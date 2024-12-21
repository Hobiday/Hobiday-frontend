import Image from "next/image";
import FeedMenuModal from "../modal/feed-menu";
import { useUserStore } from "@/stores/useUserStore";
import { useState } from "react";
import { AllFeeds } from "@/types/feed/feed.type";

type ProfileProps = {
  feed: AllFeeds;
};

export default function FeedProfile({ feed }: ProfileProps) {
  const user = useUserStore((state) => state.user);
  const isMe = user?.profileId === feed.profileId;
  const isFollowing = user ? checkIsFollowing(feed.profileId, user.profileId) : false;

  function checkIsFollowing(feedProfileId: number, logInProfileId: number): boolean {
    // 고도화 단계에서 팔로우 기능 구현 시 로직 추가
    return feedProfileId === logInProfileId;
  }

  return (
    <div className="flex items-center justify-between mx-4 my-2">
      <div className="flex items-center">
        <Image
          src={feed.profileImageUrl || "https://via.placeholder.com/40"}
          alt={`${feed.profileName} profile`}
          width={40}
          height={40}
          className="rounded-full w-10 h-10"
          unoptimized
        />
        <div className="font-semibold mx-2">{feed.profileName}</div>
      </div>

      {isMe ? (
        <FeedMenuModal feed={feed} />
      ) : (
        <button className="text-sm font-semibold hover:underline mr-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          {isFollowing ? "팔로잉" : "팔로우"}
        </button>
      )}
    </div>
  );
}
