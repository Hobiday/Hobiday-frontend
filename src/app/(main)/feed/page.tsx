"use client";

import Chip from "@/components/commons/chip";
import FeedItem from "@/components/feed";
import { MainLayout } from "@/components/layout";

import Pencil from "@/assets/icons/pencil.svg";
import Search from "@/assets/icons/search.svg";
import TextLogo from "../../../../public/img/logo-text.svg";
import { useState } from "react";

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
  const [filter, setFilter] = useState<"recommended" | "latest">("recommended");

  const headerProps = {
    title: "피드",
    leftIcons: [{ icon: <TextLogo />, path: "/" }],
    rightIcons: [
      { icon: <Pencil />, path: "/feed/upload", size: 24 },
      { icon: <Search />, path: "/search", size: 24 },
    ],
  };

  // 추천순, 최신순 필터링 추가

  const FEED_DATA: Feed[] = [
    {
      feedId: 1,
      profileImage: "https://via.placeholder.com/40",
      profileName: "김하비",
      time: "2024-12-06T21:42:31.279Z",
      feedFiles: [
        "https://fastly.picsum.photos/id/194/400/400.jpg?hmac=9M4afVM4gcbNrK0jdWxStpZb97YStvTZPDV_zwfSe7c",
        "https://fastly.picsum.photos/id/556/400/400.jpg?hmac=eIgLNSug_bhkfJKE7PrkeIX3pmn7FfmmxfQlPcgziBQ",
        "https://fastly.picsum.photos/id/861/400/400.jpg?hmac=Bt3C22W8d4rkkTYLllIRhZyKnD8LLvwgzUmqhGjzKsI",
      ],
      contents:
        "피드 텍스트 기본 텍스트 박스 최대 3줄 그 이상 말 줄임표 + 더보기 버튼 사용 피드 텍스트 기본 텍스트 박스  ",
      hashTag: ["테스트", "해시태그"],
      likeCount: 8,
      liked: false,
      commentCount: 3,
      isFollowing: false,
    },
    {
      feedId: 2,
      profileImage: "https://via.placeholder.com/40",
      profileName: "김하비",
      time: "2024-12-06T21:42:31.279Z",
      feedFiles: [
        "https://fastly.picsum.photos/id/524/400/400.jpg?hmac=msawrWikHM9c5n3cItDml12lRmNkSrzXlRWyTnoIdig",
        "https://fastly.picsum.photos/id/456/400/400.jpg?hmac=Wj-1M_DzwOwj84HvgJKFMtgB4xX886nXBuuOIRlK7vk",
        "https://fastly.picsum.photos/id/334/400/400.jpg?hmac=UpHNsYIHrauzlcGPuvPr_NnVeOBwx-6ivqTCh1_IaYE",
      ],
      contents:
        "피드 텍스트 기본 텍스트 박스 최대 3줄 그 이상 말 줄임표 더보기 버튼 사용 피드 텍스트 기본 텍스트 박스  텍스트 기본 텍스트 박스 텍스트 기본 텍스트 박스 텍스트 기본 텍스트 박스 텍스트 기본 텍스트 피드 텍스트 기본 텍스트 박스 최대 3줄 그 이상 말 줄임표 + 더보기 버튼 사용 피드 텍스트 기본 텍스트 박스  텍스트 기본 텍스트 박스 텍스트 기본 텍스트 박스 텍스트 기본 텍스트 박스 텍스트 기본 텍스트 ",
      hashTag: ["테스트", "해시태그"],
      likeCount: 8,
      liked: false,
      commentCount: 3,
      isFollowing: false,
    },
  ];

  return (
    <>
      <MainLayout headerProps={headerProps}>
        <div className="bg-blue-50 w-full overflow-y-hidden">
          {/* 버튼으로 교체 예정 */}
          <div className="flex justify-start items-center gap-2 pl-4 bg-white">
            <Chip label="추천순" onClick={() => setFilter("recommended")} />
            <Chip label="최신순" onClick={() => setFilter("latest")} />
          </div>

          {FEED_DATA.map((feed) => (
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
      </MainLayout>
    </>
  );
}
