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

  const loggedInProfileId = 5; // 로그인 유저의 profileId 설정

  const feedData: Feed[] = [
    {
      feedId: 1,
      contents: "이것은 피드 1내용입니다.",
      profileName: "sample5",
      profileId: 5,
      profileImageUrl: null,
      hashTag: ["#여행", "#힐링"],
      feedFiles: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
      likeCount: 0,
      commentCount: 0,
      performId: "PF214630",
      performName: "영재한음 (국악) 회",
      startDate: "2023.01.29",
      endDate: "2024.12.29",
      genreName: "한국음악(국악)",
      performState: "공연중",
      placeName: "남산골한옥마을",
      openRun: false,
      area: "서울특별시",
      poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF214630_230308_183127.PNG",
      performLikeCount: 7,
      relativeTime: "1일 전",
      liked: true,
    },
    {
      feedId: 2,
      contents: "피드 작성 API 테스트입니다.",
      profileName: "sample2",
      profileId: 2,
      profileImageUrl: null,
      hashTag: ["해시태그", "테스트", "Hobiday"],
      feedFiles: [
        "https://hyun-buckbuck.s3.ap-northeast-2.amazonaws.com/test/20241212150510-248bf875-1732-4b19-951f-75db079706a2-EdIWKy6UEAAZl-o.jpg",
      ],
      likeCount: 0,
      commentCount: 0,
      performId: "PF255055",
      performName: "원: 죄 [창원]",
      startDate: "2024.12.03",
      endDate: "2025.01.26",
      genreName: "연극",
      performState: "공연중",
      placeName: "사랑새아트홀",
      openRun: false,
      area: "경상남도",
      poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255055_241202_161340.jpg",
      performLikeCount: 10,
      relativeTime: "1일 전",
      liked: false,
    },
  ];

  return (
    <MainLayout headerProps={headerProps}>
      <FeedPageList feedData={feedData} loggedInProfileId={loggedInProfileId} />
    </MainLayout>
  );
}
