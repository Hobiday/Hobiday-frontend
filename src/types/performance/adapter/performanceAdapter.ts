import { ClientPerformance } from "../performance-client";
import { ServerPerformance } from "../performance-server";

export function performanceAdapter(data: ServerPerformance[]): ClientPerformance[] {
  return data.map((item) => ({
    performanceId: item.id,
    performanceCode: item.mt20id,
    performanceName: item.prfnm,
    performanceStartDate: item.prfpdfrom,
    performanceEndDate: item.prfpdto,
    genreName: item.genrenm,
    performanceState: item.prfstate,
    facilityName: item.fcltynm,
    isOpenRun: item.openrun,
    area: item.area,
    posterUrl: item.poster,
    likeCount: item.like_count,
  }));
}
