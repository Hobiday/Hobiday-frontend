import { useQuery } from "@tanstack/react-query";
import { fetchAllPerformances } from "../apis/performance-api";
import { performanceKeys } from "./queries";

export const useAllPerformancesQuery = (params: { rowStart: string; rowEnd: string }) => {
  return useQuery({
    queryKey: performanceKeys.all,
    queryFn: () => fetchAllPerformances(params),
    select: (data) => data.result,
  });
};
