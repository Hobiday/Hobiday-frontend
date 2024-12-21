"use client";

import Gap from "@/components/commons/gap";
import LoadingSpinner from "@/components/commons/spinner";
import { usePerformanceDetailAll } from "@/hooks";
import Image from "next/image";
import { useParams } from "next/navigation";
import BackGroundPoster from "./background-poster";
import PerformanceDetailHeader from "./performance-header";
import PerformanceInfo from "./performance-info";

export default function PerformanceDetail() {
  const params = useParams();
  const performanceId = params?.performanceId?.toString();
  const { data, isLoading, isError } = usePerformanceDetailAll(performanceId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <LoadingSpinner size={40} />
      </div>
    );
  }

  if (isError || !data) {
    return <div className="flex justify-center items-center h-[300px]">데이터를 불러오는데 문제가 생겼습니다...</div>;
  }

  const PERFORMANCE_DEFAULT_INFO = [
    {
      title: "공연 상세내용",
      children: <Image src={data.storyImageUrl} alt={data.name} width={380} height={450} />,
    },
    { title: "공연 출연진", content: data.cast, placeholder: "공연자 정보가 없습니다." },
    { title: "티켓 가격", content: data.ticket.price, placeholder: "티켓 가격 정보가 없습니다." },
    { title: "공연 기간 및 시간", content: data.showtime, placeholder: "공연 시간 정보가 없습니다." },
    {
      title: "공연 위치",
      children: (
        <p className="text-sm text-textColor">
          {data.location.area?.trim() || "지역 정보가 없습니다."} <br />
          {data.location.place?.trim() || "장소 정보가 없습니다."}
        </p>
      ),
    },
  ];

  return (
    <section className="min-h-screen">
      <BackGroundPoster posterUrl={data.posterUrl} name={data.name} />

      {/* 공연 상세 헤더 */}
      <Gap vertical size={103} />
      <PerformanceDetailHeader
        genre={data.genre}
        name={data.name}
        location={data.location.place}
        dateStart={data.date.start}
        dateEnd={data.date.end}
      />

      {/* 공연 상세 정보 */}
      {PERFORMANCE_DEFAULT_INFO.map((section, index) => (
        <>
          <Gap vertical size={16} className="bg-blue-50" />
          <PerformanceInfo
            key={index}
            title={section.title}
            content={section.content}
            placeholder={section.placeholder}
          >
            {section.children}
          </PerformanceInfo>
        </>
      ))}
    </section>
  );
}