"use client";

import Location from "@/assets/icons/location.svg";
import Card from "@/components/card";
import Chip from "@/components/commons/chip";
import LoadingSpinner from "@/components/commons/spinner";
import { SectionLayout } from "@/components/layout";
import { TAB_CATEGORY } from "@/constants/category";
import { useAllWishlistQuery, useWishlistByGenreQuery } from "@/hooks/wishlist/use-wishlist-query";
import { useState } from "react";
import Tabs from "../../_components/tabs";

export default function WishlistPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  // "전체" 탭 데이터 가져오기
  const {
    data: allWishlist,
    isLoading: isAllWishlistLoading,
    isError: isAllWishlistError,
  } = useAllWishlistQuery("0", "20");

  // 장르별 데이터 가져오기
  const {
    data: wishlistByGenre,
    isLoading: isWishlistByGenreLoading,
    isError: isWishlistByGenreError,
  } = useWishlistByGenreQuery(TAB_CATEGORY[selectedTab]?.name);

  const wishlist = selectedTab === 0 ? allWishlist : wishlistByGenre;
  const isLoading = selectedTab === 0 ? isAllWishlistLoading : isWishlistByGenreLoading;
  const isError = selectedTab === 0 ? isAllWishlistError : isWishlistByGenreError;

  const handleTabClick = (category: { id: number; name: string }) => {
    setSelectedTab(category.id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-content">
        <LoadingSpinner size={40} />
      </div>
    );
  }

  if (isError) {
    return <div className="flex justify-center items-center h-content">데이터를 불러오는데 문제가 생겼습니다...</div>;
  }

  return (
    <>
      <Tabs
        categories={TAB_CATEGORY}
        gap={12}
        className="h-11 py-[6px]"
        onTabClick={handleTabClick}
        activeTab={selectedTab}
      />
      <SectionLayout className="flex flex-col py-4 gap-3">
        {wishlist?.map((item) => (
          <Card key={item.wishListId} href={`/performance/${item.performanceId}`} className="w-full">
            <Card.Image src={item.posterUrl} alt={item.performanceName} width={"w-[88px]"} height={"h-[88px]"} />
            <Card.Content>
              <Card.Category>
                <Chip label={item.genreName} state="hashTag" />
              </Card.Category>
              <Card.Title>{item.performanceName}</Card.Title>
              <Card.Info svgr={<Location className="fill-gray-400" />} info={item.placeName} />
            </Card.Content>
          </Card>
        ))}
      </SectionLayout>
    </>
  );
}
