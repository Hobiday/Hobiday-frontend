"use client";

import { useEffect } from "react";

const redirectUri = `${process.env.NEXT_PUBLIC_BACKEND_URL}/oauth2/authorization/kakao`;

// 카카오 SDK 초기화 재확인
export default function LoginButton() {
  useEffect(() => {
    console.log("window.Kakao: ", window.Kakao);
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY);
        console.log("after Init: ", window.Kakao.isInitialized());
      }
    }
  }, []);

  function kakaoLoginHandler() {
    window.location.href = redirectUri;
  }
  return <button onClick={kakaoLoginHandler}>카카오 로그인</button>;
}
