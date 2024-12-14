import { useQuery } from "@tanstack/react-query";
import { fetchAllPerformances, fetchPerformancesByGenre } from "../apis/performance-api";
import { performanceKeys } from "./queries";

export const useAllPerformancesQuery = (params: { rowStart: string; rowEnd: string }) => {
  return useQuery({
    queryKey: performanceKeys.all,
    queryFn: () => fetchAllPerformances(params),
    select: (data) => data?.result || [],
  });
};

export const usePerformancesByGenreQuery = ({
  params,
  enabled,
}: {
  params: { rowStart: string; rowEnd: string; genre: string };
  enabled: boolean;
}) => {
  return useQuery({
    queryKey: performanceKeys.byGenre(params.genre, params.rowStart, params.rowEnd),
    queryFn: () => fetchPerformancesByGenre(params),
    select: (data) => data?.result || [],
    enabled,
  });
};
