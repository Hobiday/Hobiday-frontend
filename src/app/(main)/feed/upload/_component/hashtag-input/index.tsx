import { ChangeEvent, KeyboardEvent, useState } from "react";
import Hashtag from "src/assets/icons/hashtag.svg";

export default function HashtagInput() {
  const [inputValue, setInputValue] = useState("");
  const [hashtag, setHashtag] = useState<string[]>([]);
  const [error, setError] = useState("");

  function isValidTag(tag: string) {
    const regex = /^#[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9-_\/]+$/;
    return regex.test(tag);
  }

  function handleInputTag(e: ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.target.value);
    setError("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      const words = inputValue.split(" ");
      const lastWord = words[words.length - 1].trim();

      if (isValidTag(lastWord)) {
        setInputValue((prev) => prev + " ");
      } else {
        setError("태그는 #으로 시작해야 합니다. 특수문자는 -, _, /만 사용할 수 있습니다.");
      }
    }
  }

  function highlightTag() {
    return inputValue.split(" ").map((word, index) => {
      if (isValidTag(word)) {
        return (
          <span key={index} className="text-primary">
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  }

  function handleDeleteTag(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Backspace" && inputValue.endsWith(" ")) {
      const words = inputValue.trim().split(" ");
      words.pop();
      setInputValue(words.join(" ") + " ");
    }
  }

  return (
    <div className="border-b border-b-gray-100">
      <div className="p-3 flex items-center gap-x-2 h-12">
        <Hashtag />
        <h3 className="text-sm font-semibold">태그</h3>
        <h4 className="text-sm font-semibold text-gray-500">(선택)</h4>
      </div>
      <textarea
        className="w-full p-3 border-none focus:outline-none text-xs placeholder-gray-500"
        placeholder="해시태그를 입력하세요"
        value={inputValue}
        onChange={handleInputTag}
        onKeyDown={(e) => {
          handleKeyDown(e);
          handleDeleteTag(e);
        }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
