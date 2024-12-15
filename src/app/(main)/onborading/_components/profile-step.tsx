"use client";

import Button from "@/components/commons/button";
import TextField from "@/components/commons/text-field";
import { ChangeEvent, useState } from "react";

type ProfileStepProps = {
  onNext: (nickname: string) => void;
};

export default function ProfileStep({ onNext }: ProfileStepProps) {
  const [nickname, setNickname] = useState("");
  const [status, setStatus] = useState<"default" | "success" | "error">("default");
  const [message, setMessage] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setNickname(value);

    if (value === "사용 가능") {
      setStatus("success");
      setMessage("사용 가능한 닉네임입니다.");
    } else if (value === "중복") {
      setStatus("error");
      setMessage("이미 사용 중인 닉네임입니다.");
    } else {
      setStatus("default");
      setMessage("");
    }
  };
  return (
    <div className="flex flex-col h-[calc(100vh-var(--header-height)-4px)]">
      {/* Header 문구 */}
      <div className="mt-9 px-[23px]">
        <h1 className="text-[32px] font-semibold">
          시작하기 전 <br /> 당신의 닉네임을 정해주세요.
        </h1>
      </div>

      {/* 닉네임 필드 */}
      <div className="mt-[101px] px-[89px]">
        <TextField>
          <TextField.Label status={status}>닉네임</TextField.Label>
          <TextField.Input
            placeholder="닉네임을 입력하세요"
            value={nickname}
            onChange={handleNicknameChange}
            status={status}
            maxLength={15}
          />
          <TextField.HelperText status={status}>{message}</TextField.HelperText>
        </TextField>
      </div>

      {/* 문구 + 버튼 */}
      <div className="mt-auto px-4 pb-5">
        <div className="text-center text-sm text-gray-600 mb-5">닉네임은 나중에 다시 수정할 수 있어요!</div>
        <Button variant="primary" size="lg" fullWidth onClick={() => onNext(nickname)}>
          다음
        </Button>
      </div>
    </div>
  );
}
