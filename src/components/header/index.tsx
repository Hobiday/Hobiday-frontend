import ArrowBack from "@/assets/icons/arrow-back.svg";
import Icon from "@/components/commons/icon";
import cn from "@/lib/tailwind-cn";
import { PropsWithChildren } from "react";

export default function Header({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <header
      className={cn(
        "flex items-center w-full h-[48px] px-4 py-2 rounded-lg bg-white border border-transparent border-b-gray-100",
        className,
      )}
    >
      <Icon alt="arrow-back" className="cursor-pointer">
        <ArrowBack />
      </Icon>
      {children}
    </header>
  );
}
