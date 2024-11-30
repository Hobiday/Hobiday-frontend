import React from "react";
import LogoImage from "@/assets/images/logo-image.svg";

export default function Logo() {
  return (
    <div className="mt-32 ml-10">
      {/* <img src="public/img/logo.svg" alt="Logo" /> */}
      {/* animate-bounce */}
      <LogoImage className="animate-bounce" />
    </div>
  );
}
