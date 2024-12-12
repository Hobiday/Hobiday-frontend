import { useState } from "react";

interface CategoryProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}

export default function CategoryModal({ isOpen, onClose, onSelectCategory }: CategoryProps) {
  const categories = ["연극", "무용", "대중무용", "클래식", "국악", "대중음악", "복합", "서커스/마술", "뮤지컬"];
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-80 p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-center">주제 선택</h2>
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
              onSelectCategory(selectedCategory);
              onClose();
            }
          }}
          className="mt-6 w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:bg-gray-300"
          disabled={!selectedCategory}
        >
          선택하기
        </button>
      </div>
    </div>
  );
}
