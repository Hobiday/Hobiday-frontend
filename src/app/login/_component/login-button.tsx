"use client";

import KakaoLogo from "@/assets/icons/kakao-logo.svg";
import Icon from "@/components/commons/icons";
import { useOnboardingStore } from "@/stores";
import { removeAuthTokens } from "@/utils/remove-auth-token";
import { useEffect } from "react";

const redirectUri = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/kakao`;

export default function LoginButton() {
  // 기존 남아있는 토큰 및 유저 정보, 이전에 사용했던 온보딩 정보 삭제
  useEffect(() => {
    useOnboardingStore.getState().resetOnboarding();
    removeAuthTokens();
  }, []);

  // 카카오 SDK 초기화 재확인
  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY);
      }
    }
  }, []);

  function kakaoLoginHandler() {
    window.location.href = redirectUri;
  }

  return (
    <section className="flex flex-col justify-center items-center w-full px-4 py-[10px] gap-2 mt-[10px] z-10">
      <button onClick={kakaoLoginHandler} className="bg-kakao max-w-[330px] w-full py-[14.5px] rounded-full">
        <div className="flex justify-center items-center">
          <Icon size={24}>
            <KakaoLogo />
          </Icon>
          <h3 className="font-semibold text-black ml-2">카카오톡으로 시작하기</h3>
        </div>
      </button>
    </section>
  );
}
