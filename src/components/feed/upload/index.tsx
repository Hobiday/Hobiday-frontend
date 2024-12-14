"use client";

import ImageUploader from "@/app/(main)/feed/upload/_component/image-uploader";
import TextInput from "@/app/(main)/feed/upload/_component/text-input";
import AddInfo from "@/app/(main)/feed/upload/_component/add-info";
import HashtagInput from "@/app/(main)/feed/upload/_component/hashtag-input";
import SelectCategory from "@/app/(main)/feed/upload/_component/category";
import useUploadTextStore from "@/stores/useUploadTextStore";

export default function UploadPage() {
  const { text } = useUploadTextStore();

  return (
    <div className="bg-white">
      <SelectCategory />
      <ImageUploader />
      <TextInput />
      <HashtagInput />
      <AddInfo />
    </div>
  );
}
