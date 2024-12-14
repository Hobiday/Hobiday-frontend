"use client";

import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import Chip from "@/components/commons/chip";
import cn from "@/lib/tailwind-cn";

type Category = {
  id: number;
  name: string;
};

type TabsProps = {
  categories: Category[];
  gap?: number;
  onTabClick?: (category: Category) => void;
  activeTab?: number;
  className?: string;
};

export default function Tabs({ categories, gap = 12, onTabClick, activeTab = 0, className = "" }: TabsProps) {
  const [selectedTabId, setSelectedTabId] = useState<number>(activeTab);

  const handleChipClick = (category: Category) => {
    setSelectedTabId(category.id);
    onTabClick?.(category);
  };

  return (
    <Swiper
      slidesPerView="auto"
      freeMode={true}
      spaceBetween={gap}
      slidesOffsetBefore={16}
      slidesOffsetAfter={16}
      initialSlide={selectedTabId} // 활성화된 탭 유지
      preventInteractionOnTransition={true} // 스와이프 중 상태 유지
      className={cn("w-full cursor-pointer", className)}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id} className="!w-auto">
          <Chip
            label={category.name}
            state={selectedTabId === category.id ? "selected" : "default"}
            onClick={() => handleChipClick(category)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
