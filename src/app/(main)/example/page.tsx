"use client";

import Button from "@/components/commons/button";
import Chip from "@/components/commons/chip";
import TextField from "@/components/commons/text-field";
import { ChangeEvent, useState } from "react";

export default function Example() {
  const [nickname, setNickname] = useState("");
  const [status, setStatus] = useState<"default" | "success" | "error">("default");
  const [message, setMessage] = useState("");

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setNickname(value);

    // 닉네임 상태 로직(예시이며 '중복 체크'라는 닉네임 입력할때만 올바른 닉네임으로 설정됨)
    if (value === "중복 체크") {
      setStatus("success");
      setMessage("사용 가능한 닉네임입니다.");
    } else if (value === "") {
      setStatus("default");
      setMessage("");
    } else {
      setStatus("error");
      setMessage("이미 사용 중인 닉네임입니다.");
    }
  };

  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [preSelectedChips, setPreSelectedChips] = useState<string[]>([]);

  const categories = [
    "전체",
    "연극",
    "무용",
    "대중무용",
    "클래식",
    "국악",
    "대중음악",
    "복합",
    "서커스/마술",
    "뮤지컬",
  ];

  const handleChipClick = (category: string) => {
    if (selectedChip === category) {
      // 현재 클릭된 Chip이 다시 클릭되면 default 상태로 전환
      setSelectedChip(null);
    } else if (preSelectedChips.includes(category)) {
      // preSelected 상태에서 클릭 시 default로 전환
      setPreSelectedChips((prev) => prev.filter((item) => item !== category));
    } else {
      // 새로운 Chip을 selected 상태로 설정
      if (selectedChip) {
        setPreSelectedChips((prev) => [...prev, selectedChip]);
      }
      setSelectedChip(category);
    }
  };
  return (
    <section>
      {/* TextField 테스트 */}
      <div className="p-6 space-y-6">
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

      {/* Button 테스트 */}
      <div className="space-y-4 mt-6">
        <Button variant="primary" size="sm" type="button" onClick={() => alert("Small Button Clicked!")}>
          Small Button
        </Button>
        <Button variant="primary" size="md">
          Medium Button
        </Button>
        <Button variant="primary" size="lg" className="bg-blue-500 hover:bg-blue-600">
          Large Button
        </Button>
        <Button variant="primary" size="md" disabled>
          Disabled Button
        </Button>
        <Button variant="primary" size="md" fullWidth>
          Full-Width Button
        </Button>
      </div>

      {/* Chip 테스트 */}
      <div className="space-y-4 mt-6">
        <Chip label="Default Chip" />

        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              state={
                selectedChip === category ? "selected" : preSelectedChips.includes(category) ? "preSelected" : "default"
              }
              withClose={false}
              onClick={() => handleChipClick(category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
