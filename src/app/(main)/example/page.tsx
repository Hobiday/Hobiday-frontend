"use client";

import Button from "@/components/commons/button";
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
    </section>
  );
}
