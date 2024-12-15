import { ClientPerformanceDetails } from "../client";
import { ServerPerformanceDetails } from "../server";

export function performanceDetailsAdapter(data: ServerPerformanceDetails): ClientPerformanceDetails {
  return {
    performanceId: data.performId,
    facilityId: data.facilityId,
    cast: data.cast,
    runtime: data.runtime,
    description: data.perform,
    ticketPrice: data.ticketPrice,
    storyImageUrl: data.storyUrl,
    showtime: data.showtime,
    reservationChannel: data.reservationChannel,
    reservationUrl: data.reservationUrl,
  };
}
