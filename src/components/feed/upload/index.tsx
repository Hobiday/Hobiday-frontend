"use client";

import ImageUploader from "@/app/(main)/feed/upload/_component/image-uploader";
import TextInput from "@/app/(main)/feed/upload/_component/text-input";
import AddInfo from "@/app/(main)/feed/upload/_component/add-info";
import HashtagInput from "@/app/(main)/feed/upload/_component/hashtag-input";
import SelectCategory from "@/app/(main)/feed/upload/_component/category";
import useUploadTextStore from "@/stores/useUploadTextStore";
import usePresignedURL from "@/hooks/feed/use-image-upload";
import useFeedRegistration from "@/hooks/feed/use-feed-upload";
import { MainLayout } from "@/components/layout";
import cn from "@/lib/tailwind-cn";
import { useRouter } from "next/navigation";
import Icon from "@/components/commons/icons";
import ArrowBack from "@/assets/icons/arrow-back.svg";

export default function UploadPage() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  const { performId, content, category, hashTags, photos, setHashTags } = useUploadTextStore();
  const { uploadImages, isLoading: isUploading } = usePresignedURL();
  const { registerFeed, isLoading: isRegistering } = useFeedRegistration();

  function handleAddHashTags(tags: string[]) {
    setHashTags([...hashTags, ...tags]);
  }

  function handleRemoveHashTag(tag: string) {
    setHashTags(hashTags.filter((t) => t !== tag));
  }

  async function handleUpload() {
    if (photos.length === 0) {
      alert("사진을 업로드해주세요.");
      return;
    }

    try {
      const uploadedUrls = await uploadImages(photos);
      // url 주소 추가
      const baseAddrss = process.env.NEXT_PUBLIC_API_BASE_URL;
      const fullUrls = uploadedUrls.map((url) => `${baseAddrss}${url}`);

      await registerFeed({
        performId: "PF254874",
        content,
        category,
        hashTags: hashTags.length > 0 ? hashTags : [],
        fileUrls: fullUrls,
      });
      console.log("등록 성공");
    } catch (err) {
      console.error("업로드 실패", err);
    }
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className={cn("relative flex items-center justify-between w-full h-header px-4 py-2 bg-white")}>
        <div className="flex items-center justify-start space-x-2">
          <Icon onClick={handleGoBack} size={24} className="cursor-pointer">
            <ArrowBack />
          </Icon>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold text-center">
          <h2>피드</h2>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button type="submit" onClick={handleUpload} className="text-primary font-semibold text-sm cursor-pointer">
            올리기
          </button>
        </div>
      </header>
      <SelectCategory />
      <ImageUploader />
      <TextInput />
      <HashtagInput onAddHashTags={handleAddHashTags} onRemoveHashTag={handleRemoveHashTag} />
      {/* <AddInfo /> */}
    </div>
  );
}
