"use client";

import { useState } from "react";
import ImageUploader from "./_component/image-uploader";
import TextInput from "./_component/text-input";
import AddInfo from "./_component/add-info";
import HashtagInput from "./_component/hashtag-input";
import SelectCategory from "./_component/category";
import { MainLayout } from "@/components/layout";

const headerProps = {
  title: "피드",
  showBackButton: true,
  rightText: "올리기",
  // onRightTextClick: () => {},
};

export default function FeedUploadPage() {
  const [text, setText] = useState("");

  return (
    <MainLayout headerProps={headerProps}>
      <div className="bg-white">
        <SelectCategory />
        <ImageUploader />
        <TextInput value={text} onChange={(newText) => setText(newText)} />
        <HashtagInput />
        <AddInfo />
      </div>
    </MainLayout>
  );
}
