import NavigationBar from "@/components/navigation-bar";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      <NavigationBar className="sticky w-full bottom-0 bg-white" />
    </div>
  );
}
