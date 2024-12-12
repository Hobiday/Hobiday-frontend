import CommentText from "src/assets/icons/comment-text.svg";
import ArrowForward from "src/assets/icons/arrow-forward.svg";
import Chip from "@/components/commons/chip";
import { useState } from "react";
import { useBottomSheet } from "@/contexts";
import BottomSheet from "@/components/bottom-sheet";
import Icon from "@/components/commons/Icon";

export default function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tempCategory, setTempCategory] = useState("");
  const { open, close } = useBottomSheet();
  const categories = ["연극", "무용", "대중무용", "클래식", "국악", "대중음악", "복합", "서커스/마술", "뮤지컬"];

  return (
    <>
      <div className="flex p-3 items-center gap-x-2 h-12 border-y border-y-gray-100">
        <Icon size={24}>
          <CommentText />
        </Icon>
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
            <Icon size={24}>
              <ArrowForward />
            </Icon>
          </button>
        )}
      </div>
      <BottomSheet height="70%">
        <BottomSheet.Title>주제 선택</BottomSheet.Title>
        <BottomSheet.Contents>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category} className="flex items-center justify-between p-2 rounded">
                <label
                  htmlFor={category}
                  className="cursor-pointer text-gray-700 flex items-center justify-between w-full"
                >
                  {category}
                  <input
                    type="radio"
                    id={category}
                    name="category"
                    value={category}
                    checked={tempCategory === category}
                    onChange={() => setTempCategory(category)}
                    className="w-5 h-5 text-primary border-gray-300 checked:bg-primary"
                  />
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              if (tempCategory) {
                setSelectedCategory(tempCategory);
                close();
              }
            }}
            className="mt-6 w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:bg-gray-300"
            disabled={!tempCategory}
          >
            선택하기
          </button>
        </BottomSheet.Contents>
      </BottomSheet>
    </>
  );
}
