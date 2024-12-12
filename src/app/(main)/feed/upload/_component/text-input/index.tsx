interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput({ value, onChange }: TextInputProps) {
  return (
    <div className="border-b border-b-gray-100">
      <textarea
        placeholder={`오늘 공연은 어땠나요? 공연에 대한 생각을 알려주세요.\n(사진은 최대 3장까지, 내용은 10자 ~ 2,200자까지 작성 가능합니다.)`}
        value={value}
        maxLength={2200}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
        className="w-full h-28 text-xs px-4 border-none placeholder-gray-500 focus:outline-none"
      />

      <h4 className="text-right text-gray-500 text-xs">{value.length} / 2200</h4>
    </div>
  );
}
