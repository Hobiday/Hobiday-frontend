"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type CompleteStepProps = {
  profile: string;
};

export default function CompleteStep({ profile }: CompleteStepProps) {
  const router = useRouter();

  // // 3초 후 홈페이지로 자동 이동
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/");
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [router]);

  return (
    <div className="relative flex flex-col justify-center items-center h-[calc(100vh-var(--header-height))] overflow-hidden">
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
    </div>
  );
}
