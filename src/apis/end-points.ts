import { API_BASE_URL } from "./index";

export const ENDPOINTS = {
  PERFORMANCES: {
    GET_ALL: `${API_BASE_URL}/api/performs`,
    GENRE: `${API_BASE_URL}/api/performs/genre`,
    GET_BY_ID: (performId: string) => `${API_BASE_URL}/api/performs/${performId}`,
    SEARCH: `${API_BASE_URL}/api/performs/search`,
    RECOMMENDS: `${API_BASE_URL}/api/performs/search/recommends`,
    DETAIL: {
      BY_ID: (performId: string) => `${API_BASE_URL}/api/performs/detail/${performId}`,
      FACILITY: (facilityId: string) => `${API_BASE_URL}/api/performs/detail/facility/${facilityId}`,
    },
  },
  USER: {
    CHECK: `${API_BASE_URL}/api/profiles/registration/check`,
  },
};
