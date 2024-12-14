"use client";

import Chip from "@/components/commons/chip";
import FeedItem from "@/components/feed";

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

interface FeedPageProps {
  feedData: Feed[];
}

export default function FeedPage({ feedData }: FeedPageProps) {
  return (
    <>
      <div className="bg-blue-50 w-full overflow-y-hidden">
        <div className="flex justify-start items-center gap-2 pl-4 bg-white">
          {/* <Chip label="추천순" onClick={() => setFilter("recommended")} /> */}
          {/* <Chip label="최신순" onClick={() => setFilter("latest")} /> */}
          <Chip label="추천순" onClick={() => {}} />
          <Chip label="최신순" onClick={() => {}} />
        </div>
        {feedData.map((feed) => (
          <FeedItem key={feed.feedId} className="w-full">
            <FeedItem.Profile
              profileImage={feed.profileImage}
              profileName={feed.profileName}
              isFollowing={feed.isFollowing}
            />
            <FeedItem.Image feedFiles={feed.feedFiles} />
            <FeedItem.Content contents={feed.contents} />
            <FeedItem.HashTags hashTag={feed.hashTag} />
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
