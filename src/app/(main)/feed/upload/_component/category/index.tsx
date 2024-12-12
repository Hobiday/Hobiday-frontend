import CommentText from "src/assets/icons/comment-text.svg";
import ArrowForward from "src/assets/icons/arrow-forward.svg";
import CategoryModal from "./category-modal";
import Chip from "@/components/commons/chip";
import { useState } from "react";
import { useBottomSheet } from "@/contexts";
import BottomSheet from "@/components/bottom-sheet";

export default function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { open, close } = useBottomSheet();
  const categories = ["연극", "무용", "대중무용", "클래식", "국악", "대중음악", "복합", "서커스/마술", "뮤지컬"];

  return (
    <div className="p-3 flex items-center gap-x-2 h-12 border-y border-y-gray-100">
      <CommentText />
      <h3 className="text-sm font-semibold">주제선택</h3>
      {selectedCategory ? (
        <Chip
          label={`${selectedCategory}`}
          state="hashTag"
          isDelete={true}
          onClose={() => setSelectedCategory("")}
          className="ml-auto text-sm bg-white border border-gray-100"
        />
      ) : (
        <button onClick={open} className="ml-auto">
          <ArrowForward />
        </button>
      )}

      <BottomSheet height="70%">
        <BottomSheet.Title>주제 선택</BottomSheet.Title>
        <BottomSheet.Contents>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category} className="flex items-center justify-between p-2 rounded">
                <label htmlFor={category} className="cursor-pointer text-gray-700">
                  {category}
                </label>
                <input
                  type="radio"
                  id={category}
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="w-5 h-5 text-primary border-gray-300 checked:bg-primary"
                />
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              if (selectedCategory) {
                close();
              }
            }}
            className="mt-6 w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:bg-gray-300"
            disabled={!selectedCategory}
          >
            선택하기
          </button>
        </BottomSheet.Contents>
      </BottomSheet>

      {/* <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setCategoryModalOpen(false)}
        onSelectCategory={(category: string) => {
          setSelectedCategory(category);
          setCategoryModalOpen(false);
        }}
      /> */}
    </div>
  );
}
