import Card from "@/components/card";
import Chip from "@/components/commons/chip";
import SectionLayout from "@/components/layout/section-layout";
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
  return (
    <>
      <Tabs categories={TAB_CATEGORY} gap={12} className="h-11 py-[6px]" />
      <SectionLayout className="flex flex-col py-4 gap-3">
        {PERF_MOCKUP_DATA.map((data) => (
          <Card key={data.id} className="w-full">
            <Card.Image src={data.image.src} alt={data.image.alt} width="w-[88px]" height="h-[88px]" />
            <Card.Content>
              <Card.Category>
                <Chip label={data.category.label} state="hashTag" />
              </Card.Category>
              <Card.Title>{data.title}</Card.Title>
              <Card.Info iconSrc={data.info.iconSrc} info={data.info.text} />
            </Card.Content>
          </Card>
        ))}
      </SectionLayout>
    </>
  );
}

// api로 대체하여 삭제예정
const PERF_MOCKUP_DATA = [
  {
    id: 1,
    image: {
      src: "/img/logo-image.png",
      alt: "눈꽃",
    },
    category: {
      label: "서커스/마술",
    },
    title: "매직쇼 더 라이브 [춘천]",
    info: {
      iconSrc: "/img/logo-image.png",
      text: "춘천교육문화관 공연장",
    },
  },
  {
    id: 2,
    image: {
      src: "/img/logo-image.png",
      alt: "눈꽃",
    },
    category: {
      label: "서커스/마술",
    },
    title: "매직쇼 더 라이브 [춘천]",
    info: {
      iconSrc: "/img/logo-image.png",
      text: "춘천교육문화관 공연장",
    },
  },
  {
    id: 3,
    image: {
      src: "/img/logo-image.png",
      alt: "눈꽃",
    },
    category: {
      label: "서커스/마술",
    },
    title: "매직쇼 더 라이브 [춘천]",
    info: {
      iconSrc: "/img/logo-image.png",
      text: "춘천교육문화관 공연장",
    },
  },
];
