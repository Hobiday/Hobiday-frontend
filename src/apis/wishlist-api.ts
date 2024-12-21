import { WishlistResponse } from "@/types/wishlist/server";
import { handleApiError } from "@/utils/api-error/error-handler";
import { apiClient } from ".";
import { ENDPOINTS } from "./end-points";

/**
 * @param performId 공연 ID
 * @returns 위시리스트 추가 응답
 */
export const postAddWishlist = async (performId: string) => {
  try {
    const response = await apiClient.post(ENDPOINTS.WISHLIST.POST(performId));
    return response.data.result;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * @returns 전체 위시리스트 목록
 */
export const fetchWishlist = async () => {
  try {
    const response = await apiClient.get<WishlistResponse>(ENDPOINTS.WISHLIST.GET.ALL);
    return response.data.result;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * @param category 장르 이름
 * @returns 장르별 위시리스트 목록
 */
export const fetchWishlistByGenre = async (category: string) => {
  try {
    const response = await apiClient.get<WishlistResponse>(ENDPOINTS.WISHLIST.GET.GENRE, {
      params: { category },
    });
    return response.data.result;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * @param performId 공연 ID
 * @returns 서버의 위시리스트 삭제에 따른 응답
 */
export const removeFromWishlist = async (performId: string) => {
  try {
    const response = await apiClient.delete(ENDPOINTS.WISHLIST.DELETE(performId));
    return response.data.result;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
