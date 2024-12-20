"use client";

import { fetchFeedById } from "@/apis/feed-api";
import FeedItem from "@/components/feed/item";
import { AllFeeds } from "@/types/feed/feed.type";
import { useEffect, useState } from "react";

export default function FeedIdComponent({ feedId: feedId }: { feedId: string }) {
  const [feedData, setFeedData] = useState<AllFeeds | null>(null);

  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const data = await fetchFeedById(feedId);
        console.log("data: ", data.result);
        setFeedData(data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeedData();
  }, [feedId]);

  function checkIsFollowing(feedProfileId: number, loggedInProfileId: number): boolean {
    // 고도화 단계에서 팔로우 기능 구현 시 로직 추가
    return feedProfileId === loggedInProfileId;
  }

  return (
    <>
      {feedData && (
        <FeedItem key={feedData.feedId} className="w-full">
          <FeedItem.Profile
            profileImageUrl={feedData.profileImageUrl || ""}
            profileName={feedData.profileName}
            isFollowing={checkIsFollowing(feedData.profileId, 5)}
          />
          <FeedItem.Image feedFiles={feedData.feedFiles} />
          <FeedItem.Content contents={feedData.contents} />
          <FeedItem.HashTags hashTag={feedData.hashTag} />
          <FeedItem.Actions
            feedId={feedData.feedId}
            likeCount={feedData.likeCount}
            commentCount={feedData.commentCount}
            liked={feedData.liked}
          />
        </FeedItem>
      )}
    </>
  );
}
