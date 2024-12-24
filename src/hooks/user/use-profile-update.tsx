import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PROFILE_KEYS } from "../queries";
import { getMyProfile } from "@/apis/user-api";
import { useUserStore } from "@/stores/useUserStore";
import React from "react";

export const updateProfile = async (data: { [key: string]: string | string[] }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found in localStorage.");
    }

    const response = await axios.put("/api/profiles/update", data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to update profile:", error);
    throw error;
  }
};

export const useGetMyProfile = () => {
  const setUser = useUserStore((state) => state.setUser);

  const queryResult = useQuery({
    queryKey: [PROFILE_KEYS.myProfile],
    queryFn: async () => {
      const data = await getMyProfile();
      return data;
    },
    select: (data) => data || null,
  });

  // 프로필 데이터 전역 상태에 저장
  const { data } = queryResult;

  React.useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return queryResult;
};
