import useTextStore from "@/stores/useTextStore";

export default function TextInput() {
  const { text, setText } = useTextStore();

  return (
    <div className="border-b border-b-gray-100">
      <textarea
        placeholder={`오늘 공연은 어땠나요? 공연에 대한 생각을 알려주세요.\n(사진은 최대 3장까지, 내용은 10자 ~ 2,200자까지 작성 가능합니다.)`}
        value={text}
        maxLength={2200}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        className="w-full h-28 text-xs px-4 border-none placeholder-gray-500 focus:outline-none"
      />

      <span className="text-right text-gray-500 text-xs">{text.length} / 2200</span>
    </div>
  );
}
