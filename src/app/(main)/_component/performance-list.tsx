"use client";

import Location from "@/assets/icons/location.svg";
import Card from "@/components/card";
import Chip from "@/components/commons/chip";
import LoadingSpinner from "@/components/commons/spinner";
import { SectionLayout } from "@/components/layout";
import { TAB_CATEGORY } from "@/constants/category";
import { useAllPerformancesQuery, usePerformancesByGenreQuery } from "@/hooks";
import { useState } from "react";
import Tabs from "./tabs";

export default function PerformanceList() {
  const [selectedTab, setSelectedTab] = useState(0); // 초기 상태를 "전체"로 설정

  // "전체" 탭 데이터 가져오기
  const {
    data: allPerformances,
    isPending: isAllPerformancesPending,
    isError: isAllPerformancesError,
  } = useAllPerformancesQuery({
    rowStart: "0",
    rowEnd: "10",
  });

  // 장르별 데이터 가져오기
  const {
    data: performancesByGenre,
    isPending: isPerformancesByGenrePending,
    isError: isPerformancesByGenreError,
  } = usePerformancesByGenreQuery({
    params: {
      genre: TAB_CATEGORY[selectedTab].name,
      rowStart: "0",
      rowEnd: "10",
    },
    enabled: selectedTab !== 0, // "전체" 탭이 아닐 때만 데이터 요청
  });

  const isPending = selectedTab === 0 ? isAllPerformancesPending : isPerformancesByGenrePending;
  const isError = selectedTab === 0 ? isAllPerformancesError : isPerformancesByGenreError;
  const performances = selectedTab === 0 ? allPerformances : performancesByGenre;

  const handleTabClick = (category: { id: number; name: string }) => {
    setSelectedTab(category.id);
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <LoadingSpinner size={40} />
      </div>
    );
  }
  if (isError) return <div>데이터를 불러오는 중 문제가 발생했습니다.</div>;

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
        {performances?.map((performance) => (
          <Card key={performance.performId} className="w-full">
            <Card.Image src={performance.poster} alt={performance.performName} width={"w-[88px]"} height="h-[88px]" />
            <Card.Content>
              <Card.Category>
                <Chip label={performance.genreName} state="hashTag" />
              </Card.Category>
              <Card.Title>{performance.performName}</Card.Title>
              <Card.Info svgr={<Location />} info={performance.placeName} />
            </Card.Content>
          </Card>
        ))}
      </SectionLayout>
    </>
  );
}
