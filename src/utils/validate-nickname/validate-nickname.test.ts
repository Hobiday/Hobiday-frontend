import { validateNickname } from "./index";

describe("닉네임 검증 테스트", () => {
  it("닉네임이 공란인 경우: false", () => {
    const result = validateNickname("");
    expect(result.isValid).toBe(false);
    expect(result.message).toBe("닉네임을 입력해주세요.");
  });

  it("닉네임이 공백인 경우: false", () => {
    const result = validateNickname("   ");
    expect(result.isValid).toBe(false);
    expect(result.message).toBe("닉네임을 입력해주세요.");
  });

  it("닉네임에 특수문자 포함시: false", () => {
    const result = validateNickname("hobidaygoodday!");
    expect(result.isValid).toBe(false);
  });

  it("자/모음이 조합되지 않은 경우: false", () => {
    const result = validateNickname("닉ㄴㅔ임");
    expect(result.isValid).toBe(false);
  });

  it("정상적인 닉네임일 경우: true", () => {
    const result = validateNickname("hobidaygoodday");
    expect(result.isValid).toBe(true);
    expect(result.message).toBe("");
  });
});
