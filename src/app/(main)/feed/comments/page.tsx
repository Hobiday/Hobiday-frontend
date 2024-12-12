"use client";

import CommentCard from "@/components/comment";
import { MainLayout } from "@/components/layout";
import { useSearchParams } from "next/navigation";

interface Comment {
  commentId: number;
  // feedId: number;
  profileImage: string;
  profileName: string;
  createTime: string;
  modifiedTime: string;
  contents: string;
  isAuthor: boolean;
}

export default function CommentsPage() {
  const searchParams = useSearchParams();
  const feedId = searchParams.get("feedId");

  const comments: Comment[] = [
    {
      commentId: 1,
      // feedId: 1,
      profileImage: "https://via.placeholder.com/40",
      profileName: "하비데이",
      createTime: "2024-12-06T21:44:31.279Z",
      modifiedTime: "2024-12-06T21:44:31.279Z",
      contents: "피드 댓글 기본 텍스트 박스",
      isAuthor: false,
    },
    {
      commentId: 2,
      // feedId: 1,
      profileImage: "https://via.placeholder.com/40",
      profileName: "김하비",
      createTime: "2024-12-07T21:42:31.279Z",
      modifiedTime: "2024-12-07T21:42:31.279Z",
      contents:
        "댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 텍스트 댓글 ",
      isAuthor: true,
    },
  ];

  if (!feedId) {
    return <div>Error: No feed selected</div>;
  }

  return (
    // <div>
    //   <button onClick={() => history.back()}>{`<`}</button>
    // </div>

    <>
      <MainLayout headerProps={{ title: "댓글", showBackButton: true }}>
        {/* 댓글 데이터 표시 */}
        <div className="overflow-y-auto">
          {comments.map((comment: Comment, index: number) => (
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
      </MainLayout>
    </>
  );
}
