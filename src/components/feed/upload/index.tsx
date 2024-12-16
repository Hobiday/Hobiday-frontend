"use client";

import ImageUploader from "@/app/(main)/feed/upload/_component/image-uploader";
import TextInput from "@/app/(main)/feed/upload/_component/text-input";
import AddInfo from "@/app/(main)/feed/upload/_component/add-info";
import HashtagInput from "@/app/(main)/feed/upload/_component/hashtag-input";
import SelectCategory from "@/app/(main)/feed/upload/_component/category";
import useUploadTextStore from "@/stores/useUploadTextStore";
import usePresignedURL from "@/hooks/feed/use-image-upload";
import useFeedRegistration from "@/hooks/feed/use-feed-upload";

export default function UploadPage() {
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
    <div className="bg-white">
      <SelectCategory />
      <ImageUploader />
      <TextInput />
      <HashtagInput onAddHashTags={handleAddHashTags} onRemoveHashTag={handleRemoveHashTag} />
      <AddInfo />

      <button className="w-full h-12 bg-blue-500 text-white text-lg font-bold" onClick={handleUpload}>
        사진업로드
      </button>
    </div>
  );
}
