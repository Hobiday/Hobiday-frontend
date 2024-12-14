export interface ClientPerformance {
  performanceId: number;
  performanceCode: string;
  performanceName: string;
  performanceStartDate: string;
  performanceEndDate: string;
  genreName: string;
  performanceState: string;
  facilityName: string;
  isOpenRun: boolean;
  area: string;
  posterUrl: string;
  likeCount: number;
}

export interface ClientPerformanceDetails {
  performanceDetailId: number;
  performanceCode: string;
  facilityCode: string;
  cast: string;
  crew: string;
  runtime: string;
  ageRestriction: string;
  guidance: string;
  styleUrl: string;
  detailGuidance: string;
  relatedRent: string;
  relatedUrl: string;
  performanceId: number;
  styleDescription: string;
}
