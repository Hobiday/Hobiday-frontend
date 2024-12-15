"use client";

import Button from "@/components/commons/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CompleteStepProps = {
  profile: string;
};

export default function CompleteStep({ profile }: CompleteStepProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // 2초 후 버튼 표시
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center h-[calc(100vh-var(--header-height))] overflow-hidden">
      <div
        className="absolute w-[350px] h-[350px] top-[40px] left-[-50px] rounded-full opacity-90 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(177,249,243,0.9) 0%, rgba(177,249,243,0) 100%)",
        }}
      />

      <div
        className="absolute w-[630px] h-[630px] left-[10px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(94,80,244,0.8) 0%, rgba(94,80,244,0) 100%)",
        }}
      />
      <div
        className="absolute w-[320px] h-[320px] right-[5px] rounded-full opacity-80 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(94,80,244,0.85) 0%, rgba(94,80,244,0) 100%)",
        }}
      />

      {/* 이미지 */}
      <div className="animate-fade-in-up z-10">
        <Image src="/img/logo-image.png" alt="가입 성공" width={176.84} height={182.4} priority />
      </div>

      {/* 축하 문구 */}
      <h1 className="mt-6 text-center text-[32px] font-semibold leading-snug text-white animate-fade-in-up z-10">
        <span className="text-primary">{profile}</span>님,
        <br />
        가입을 축하합니다!
      </h1>

      {showButton && (
        <div className="absolute bottom-[50px] w-full px-[23px] animate-fade-in-up">
          <Link href="/" className="block">
            <Button variant="primary" size="lg" fullWidth>
              Hobiday 둘러보기
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
