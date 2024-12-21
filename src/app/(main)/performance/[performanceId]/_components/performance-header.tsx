import FeedGradation from "@/assets/icons/feed-gradation.svg";
import { CalendarMonth, Location } from "@/assets/svgr-icons";
import LikeGradientDefault from "@/assets/svgr-icons/like-gradient-default";
import LikeGradientPressed from "@/assets/svgr-icons/like-gradient-pressed";
import Chip from "@/components/commons/chip";
import Gap from "@/components/commons/gap";
import Icon from "@/components/commons/icons";
import { SectionLayout } from "@/components/layout";
import { useState } from "react";

interface PerformanceDetailHeaderProps {
  genre: string;
  name: string;
  location: string;
  dateStart: string;
  dateEnd: string;
}

const INITIAL_COUNT = 38;
export default function PerformanceDetailHeader(props: PerformanceDetailHeaderProps) {
  const { genre, name, location, dateStart, dateEnd } = props;
  const [wishCount, setWishCount] = useState(INITIAL_COUNT);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setWishCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

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

      <Gap vertical size={16} />
      <div className="flex justify-evenly items-center max-w-[398px] w-full min-h-[112px] bg-white text-sm text-gray-600 font-medium shadow-md">
        <div onClick={handleLikeToggle} className="cursor-pointer flex flex-col items-center gap-1">
          {isLiked ? <LikeGradientPressed width={40} height={40} /> : <LikeGradientDefault width={40} height={40} />}
          <p>
            위시 <span>{wishCount}</span>
          </p>
        </div>
        <div className="h-20 w-[1px] bg-gray-300 mx-4" />
        <div className="flex flex-col items-center gap-1">
          <Icon size={40} className="cursor-pointer">
            <FeedGradation />
          </Icon>
          <p>
            피드 <span>12</span>
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
