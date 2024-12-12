"use client";

import Tabs from "./tabs";

const TAB_CATEGORY = [
  { id: 0, name: "전체" },
  { id: 1, name: "공연" },
  { id: 2, name: "뮤지컬" },
  { id: 3, name: "대중무용" },
  { id: 4, name: "서커스/마술" },
  { id: 5, name: "무용" },
  { id: 6, name: "복합" },
];

export default function PerformanceList() {
  // const {
  //   data: performances,
  //   isPending,
  //   isError,
  // } = useAllPerformancesQuery({
  //   rowStart: "0",
  //   rowEnd: "10",
  // });

  // if (isPending) return <div>Loading...</div>;
  // if (isError) return <div>데이터를 불러오는 중 문제가 발생했습니다.</div>;

  return (
    <>
      <Tabs categories={TAB_CATEGORY} gap={12} className="h-11 py-[6px]" />
      {/* <SectionLayout className="flex flex-col py-4 gap-3">
        {performances?.map((performance) => (
          <Card key={performance.performId} className="w-full">
            <Card.Image src={performance.poster} alt={performance.performName} width="w-[88px]" height="h-[88px]" />
            <Card.Content>
              <Card.Category>
                <Chip label={performance.genreName} state="hashTag" />
              </Card.Category>
              <Card.Title>{performance.performName}</Card.Title>
              <Card.Info iconSrc="/img/icon-location.png" info={performance.placeName} />
            </Card.Content>
          </Card>
        ))}
      </SectionLayout> */}
    </>
  );
}
