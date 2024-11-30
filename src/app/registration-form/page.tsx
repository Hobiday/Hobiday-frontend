"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function saveTokenToCookie(accessToken: string, refreshToken: string) {
  document.cookie = `accessToken=${accessToken}; path=/; `;
  document.cookie = `refreshToken=${refreshToken}; path=/; `;
}

async function checkRegistration(accessToken: string) {
  try {
    const apiUrl = `api/profiles/registration/check`;
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // if (response.data?.result?.regitster === undefined) {
    //   throw new Error("register not found in response data");
    // }

    console.log(response.data);
    return response.data.result;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response?.data?.message || "Registration check failed");
  }
}

export default function RegistrationForm() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let queryParams = new URLSearchParams(window.location.search);
    let accessToken = queryParams.get("access");
    let refreshToken = queryParams.get("refresh");

    console.log(accessToken, refreshToken);

    if (accessToken && refreshToken) {
      saveTokenToCookie(accessToken, refreshToken);

      checkRegistration(accessToken)
        .then((data) => {
          if (data.result.register == true) {
            router.push("/");
          } else {
            router.replace("/registration-form");
          }
        })
        .catch(() => {
          console.log("로그인 오류 발생");
          router.push("/login");
        });
    } else {
      console.log("토큰 정보가 없습니다");
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <h1>Registration Form Page</h1>
    </div>
  );
}
