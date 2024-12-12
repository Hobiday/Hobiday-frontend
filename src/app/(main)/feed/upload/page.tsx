import useTextStore from "@/stores/useTextStore";
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
  const { text } = useTextStore();

  function handleFeedUpload() {
    console.log("API 연결 예정정");
  }

  return (
    <MainLayout headerProps={{ ...headerProps, onRightTextClick: handleFeedUpload }}>
      <div className="bg-white">
        <SelectCategory />
        <ImageUploader />
        <TextInput />
        <HashtagInput />
        <AddInfo />
      </div>
    </MainLayout>
  );
}
