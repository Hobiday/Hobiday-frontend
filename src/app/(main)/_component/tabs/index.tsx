"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import Chip from "@/components/commons/chip";
import cn from "@/lib/tailwind-cn";
import { useState } from "react";

type Category = {
  id: number;
  name: string;
};

type TabsProps = {
  categories: Category[];
  gap?: number;
  onTabClick?: (category: Category) => void;
  className?: string;
};

export default function Tabs({ categories, gap = 12, onTabClick, className = "" }: TabsProps) {
  const [selectedTabId, setSelectedTabId] = useState<number>(categories.length > 0 ? categories[0].id : 0);

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
