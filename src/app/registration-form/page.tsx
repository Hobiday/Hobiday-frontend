"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function saveTokenToStorage(accessToken: string, refreshToken: string) {
  sessionStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
}

async function checkRegistration(accessToken: string) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles/registration/check`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Registration check failed");
  }
}

export default function RegistrationForm() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get("access");
    const refreshToken = queryParams.get("refresh");

    if (accessToken && refreshToken) {
      saveTokenToStorage(accessToken, refreshToken);

      checkRegistration(accessToken)
        .then((data) => {
          if (data.exists) {
            router.push("/");
          } else {
            router.push("/register");
          }
        })
        .catch(() => {
          console.log("로그인 오류 발생");
          router.push("/login");
        });
    } else {
      router.push("/login");
    }
  }, [router]);
  //   }
  // });

  return (
    <div>
      <h1>Registration Form Page</h1>
    </div>
  );
}
