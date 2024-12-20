import { CalendarMonth, Location } from "@/assets/svgr-icons";
import Chip from "@/components/commons/chip";
import Icon from "@/components/commons/icons";
import { SectionLayout } from "@/components/layout";

interface PerformanceDetailHeaderProps {
  genre: string;
  name: string;
  location: string;
  dateStart: string;
  dateEnd: string;
}

export default function PerformanceDetailHeader(props: PerformanceDetailHeaderProps) {
  const { genre, name, location, dateStart, dateEnd } = props;

  return (
    <SectionLayout className="py-6">
      <div className="mb-4">
        <Chip label={genre} state="hashTag" />
      </div>
      <h1 className="mb-3 text-xl font-bold">{name}</h1>
      <div className="flex items-center">
        <Icon size={16} className="mr-1">
          <Location width={9.29} height={13} className="fill-black" />
        </Icon>
        <h3 className="text-textColor text-sm">{location}</h3>
      </div>
      <div className="flex items-center">
        <Icon size={16} className="mr-1">
          <CalendarMonth width={12} height={13} className="fill-black" />
        </Icon>
        <h3 className="text-textColor text-sm">
          {dateStart} - {dateEnd}
        </h3>
      </div>
    </SectionLayout>
  );
}
