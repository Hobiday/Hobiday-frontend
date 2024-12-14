import { MainLayout } from "@/components/layout";
import CommentPage from "@/components/feed/comment-page";
import { Suspense } from "react";

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

  return (
    <MainLayout headerProps={{ title: "댓글", showBackButton: true }}>
      <Suspense>
        <CommentPage comments={comments} />
      </Suspense>
    </MainLayout>
  );
}
