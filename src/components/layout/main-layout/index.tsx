import Header, { HeaderProps } from "@/components/header";
import NavigationBar from "@/components/navigation-bar";
import { PropsWithChildren } from "react";

export default function MainLayout({ children, headerProps }: PropsWithChildren<{ headerProps?: HeaderProps }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header {...headerProps} className="sticky top-0 w-full z-header" />
      <main className="flex-1 overflow-y-auto hide-scrollbar mobile-smooth-touch-scrolling bg-white">{children}</main>
      <NavigationBar className="sticky bottom-0 w-full z-navbar" />
    </div>
  );
}
