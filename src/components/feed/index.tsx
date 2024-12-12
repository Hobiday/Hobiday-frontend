import LikeGradient from "../commons/Icon/like-gradient";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { useEffect, useRef, useState } from "react";
import CommentGradient from "../commons/Icon/comment-gradient";
import { useRouter } from "next/navigation";
import Image from "next/image";

type FeedItemProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FeedItem({ children, className }: FeedItemProps) {
  return <div className={`mb-5 pt-1 shadow-lg bg-white ${className}`}>{children}</div>;
}

type ProfileProps = {
  profileImage: string;
  profileName: string;
  isFollowing: boolean;
};

FeedItem.Profile = function Profile({ profileImage, profileName, isFollowing }: ProfileProps) {
  return (
    <div className="flex items-center justify-between mx-4 my-2">
      <div className="flex items-center">
        <Image
          // API 연결 후 profileImage로 변경
          src={profileImage || "https://via.placeholder.com/40"}
          alt={`${profileName} profile`}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
          unoptimized
        />
        <div className="font-semibold mx-2">{profileName}</div>
      </div>
      <button className="text-sm font-semibold hover:underline mr-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
        {isFollowing ? "팔로잉" : "팔로우"}
      </button>
    </div>
  );
};

type ImageCarouselProps = {
  feedFiles: string[];
};

FeedItem.Image = function Image({ feedFiles }: ImageCarouselProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[398px] h-[398px] overflow-hidden rounded-lg">
        {feedFiles.length > 1 ? (
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: false }}
            navigation={false}
            loop={false}
            modules={[Pagination]}
          >
            {feedFiles.map((file, index) => (
              <SwiperSlide key={file}>
                <img src={file} alt={`feed-image-${index}`} className="w-[398px] h-[398px] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img src={feedFiles[0]} alt="feed-image" className="w-[398px] h-[398px] object-cover" />
        )}
      </div>
    </div>
  );
};

type ContentProps = {
  contents: string;
};

FeedItem.Content = function Content({ contents }: ContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // 텍스트 컨텐츠가 3줄 이상인지 확인
  useEffect(() => {
    if (contentRef.current) {
      const element = contentRef.current;
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, [contents]);

  return (
    <div className="text-sm mx-4 mt-2 relative">
      <main ref={contentRef} className={`overflow-hidden relative ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}>
        {isOverflowing && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="float-right mt-10 [shape-outside:border-box] text-gray-600 cursor-pointer px-1"
          >
            더보기
          </button>
        )}
        {contents}
      </main>
    </div>
  );
};

type HashTagsProps = {
  hashTag: string[];
};

FeedItem.HashTags = function HashTags({ hashTag }: HashTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mx-4 mt-1 mb-4 text-sm text-blue-500">
      {hashTag.map((tag, index) => (
        <span key={index}>#{tag}</span>
      ))}
    </div>
  );
};

type ActionsProps = {
  feedId: number;
  liked: boolean;
  likeCount: number;
  commentCount: number;
};

FeedItem.Actions = function Actions({ feedId, likeCount, liked, commentCount }: ActionsProps) {
  const router = useRouter();
  return (
    <div className="flex items-center mx-4 pb-3">
      <div className="flex items-center space-x-1">
        <LikeGradient />
        <div className="font-medium text-gray-500">{likeCount}</div>
      </div>
      <div
        className="flex items-center ml-4 space-x-1 cursor-pointer"
        onClick={() => router.push(`/feed/comments?feedId=${feedId}`)}
      >
        <CommentGradient />
        <div className="font-medium text-gray-500">{commentCount}</div>
      </div>
    </div>
  );
};
