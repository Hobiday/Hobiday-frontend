import { BaseResponse } from "./base-response";

export interface AllPerformances {
  performId: string;
  performName: string;
  startDate: string;
  endDate: string;
  genreName: string;
  performState: string;
  placeName: string;
  openRun: boolean;
  area: string;
  poster: string;
  likeCount: number;
}

export type AllPerformancesResponse = BaseResponse<AllPerformances[]>;
