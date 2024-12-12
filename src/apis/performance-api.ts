import { AllPerformancesResponse } from "@/types";
import { handleApiError } from "@/utils/api-error/error-handler";
import { ENDPOINTS } from "./end-points";
import { apiClient } from "./index";

export const fetchAllPerformances = async (params: { rowStart: string; rowEnd: string }) => {
  try {
    const response = await apiClient.get<AllPerformancesResponse>(ENDPOINTS.PERFORMANCES.GET_ALL, { params });
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const fetchPerformanceById = async (performanceId: string) => {
  try {
    const response = await apiClient.get(ENDPOINTS.PERFORMANCES.GET_BY_ID(performanceId));
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
