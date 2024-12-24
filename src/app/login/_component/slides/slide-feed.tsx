import Gap from "@/components/commons/gap";
import Image from "next/image";

export default function SlideFeed() {
  return (
    <div className="w-full px-[28px]">
      <h2 className="font-semibold text-[32px] leading-snug">
        당신의 문화생활 경험을
        <br /> 피드에 기록해보세요!
      </h2>
      <p className="text-lg font-medium mt-4">
        당신의 문화 기록을 간단히 남겨보세요.
        <br /> 당신의 경험이 아름다운 아카이브로 남습니다.
      </p>
      <Gap vertical size={58} />
      <div className="flex justify-between w-full bg-white/50 p-4">
        <ImageContainer src="/login-onboarding/login-onboarding-left.svg" alt="left" />
        <ImageContainer src="/login-onboarding/login-onboarding-middle.svg" alt="middle" className="w-[172px]" />
        <ImageContainer src="/login-onboarding/login-onboarding-right.svg" alt="right" />
      </div>
    </div>
  );
}

function ImageContainer({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative w-[96px] h-[290px] overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
