"use client";

import CommentCard from "@/components/comment";
import { useSearchParams } from "next/navigation";

interface Comment {
  commentId: number;
  profileImage: string;
  profileName: string;
  createTime: string;
  modifiedTime: string;
  contents: string;
  isAuthor: boolean;
}

interface CommentPageProps {
  comments: Comment[];
}

export default function CommentPage({ comments }: CommentPageProps) {
  const searchParams = useSearchParams();
  const feedId = searchParams.get("feedId");

  if (!feedId) {
    return <div>Error: No feed selected</div>;
  }

  return (
    <>
      {/* 댓글 데이터 표시 */}
      <div className="overflow-y-auto">
        {comments.map((comment: Comment) => (
          <CommentCard
            key={comment.commentId}
            commentId={comment.commentId}
            profileImage={comment.profileImage}
            profileName={comment.profileName}
            createTime={comment.createTime}
            modifiedTime={comment.modifiedTime}
            contents={comment.contents}
            isAuthor={comment.isAuthor}
          />
        ))}
      </div>

      {/* 댓글 입력창 */}
      <div className="absolute bottom-20 w-[430px] px-4 shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.05)]">
        <div className="flex items-center h-[60px] space-x-2">
          {/* 사용자 정보 전역 상태로 저장해 놓았다가 호출하는 걸로 바꾸기 */}
          <img src="https://via.placeholder.com/40" alt="profile" className="w-7 h-7 rounded-full" />
          <input type="text" placeholder="댓글 쓰기" className="flex-grow text-sm" />
          <button className="text-xs w-[46px] h-[28px] bg-blue-500 text-white rounded-md">등록</button>
        </div>
      </div>
    </>
  );
}
