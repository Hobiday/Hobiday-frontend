"use client";

import LikeGradientPressed from "@/assets/svgr-icons/like-gradient-pressed";
import Icon from "@/components/commons/icons";

export default function Wishlist() {
  return (
    <div className="flex flex-col items-center justify-center h-content text-gray-600 gap-4">
      <Icon size={60}>
        <LikeGradientPressed width={60} height={60} />
      </Icon>
      <p className="font-semibold">다음 업데이트를 기대해주세요 :{`>`}</p>
    </div>
  );
}
