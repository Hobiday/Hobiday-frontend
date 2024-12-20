import { CheckNicknameResponse } from "@/types/user";
import { apiClient } from ".";
import { ENDPOINTS } from "./end-points";

/**
 * 닉네임 중복 확인 API
 * @param nickname - 중복 여부를 확인할 닉네임
 * @returns 중복 상태 메시지 (overlapping | non-overlapping)
 */
export const getCheckNickname = async (nickname: string): Promise<CheckNicknameResponse> => {
  const response = await apiClient.get<CheckNicknameResponse>(ENDPOINTS.PROFILES.NICKNAME_CHECK(nickname));
  return { ...response.data, result: response.data.result || {} };
};

export const getMyProfile = async () => {
  const response = await apiClient.get(ENDPOINTS.PROFILES.PROFILE);
  return response.data.result;
};

export const getMyFeed = async () => {
  const response = await apiClient.get(ENDPOINTS.FEED.GET.MINE);
  return response.data.result;
};

export const userLogout = async () => {
  const response = await apiClient.delete(ENDPOINTS.USERS.LOGOUT);
  return response;
};

export const updateMyProfile = async (data: { [key: string]: string | string[] }) => {
  const response = await apiClient.put(ENDPOINTS.PROFILES.UPDATE, data);
  console.log("updateAPI", response.data);
  return response.data;
};
