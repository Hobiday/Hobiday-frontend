"use client";

import FeedItem from "@/components/feed/item";
import Button from "@/components/commons/button";
import { useState } from "react";
import { Feed } from "@/types/feed";

interface FeedPageProps {
  feedData: Feed[];
  loggedInProfileId: number;
}

export default function FeedPage({ feedData, loggedInProfileId }: FeedPageProps) {
  const [filter, setFilter] = useState("latest");

  function handleFilterChange(filter: string) {
    setFilter(filter);
  }

  function checkIsFollowing(feedProfileId: number, loggedInProfileId: number): boolean {
    // 고도화 단계에서 팔로우 기능 구현 시 로직 추가
    return feedProfileId === loggedInProfileId;
  }

  return (
    <>
      <div className="bg-blue-50 w-full overflow-y-hidden">
        <div className="flex justify-start items-center gap-2 pl-4 bg-white">
          <Button
            variant="primary"
            size="md"
            onClick={() => handleFilterChange("latest")}
            className={`px-3 py-[6px] ${
              filter === "latest"
                ? "bg-blue-300 border border-opacity-0 hover:bg-blue-300 active:bg-blue-300"
                : "bg-white text-gray-700 border hover:bg-white active:bg-white"
            }`}
          >
            최신순
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={() => handleFilterChange("likes")}
            className={`px-3 py-[6px] ${
              filter === "likes"
                ? "bg-blue-300 border border-opacity-0 hover:bg-blue-300 active:bg-blue-300"
                : "bg-white text-gray-700 border hover:bg-white active:bg-white"
            }`}
          >
            인기순
          </Button>
        </div>
        {feedData.map((feed) => (
          <FeedItem key={feed.feedId} className="w-full">
            <FeedItem.Profile
              profileImageUrl={feed.profileImageUrl || ""}
              profileName={feed.profileName}
              isFollowing={checkIsFollowing(feed.profileId, loggedInProfileId)}
            />
            <FeedItem.Image feedFiles={feed.feedFiles} />
            <FeedItem.Content contents={feed.contents} />
            <FeedItem.HashTags hashTag={feed.hashTag || []} />
            <FeedItem.Actions
              feedId={feed.feedId}
              likeCount={feed.likeCount}
              commentCount={feed.commentCount}
              liked={feed.liked}
            />
          </FeedItem>
        ))}
      </div>
    </>
  );
}
