import { BottomSheetProvider, ModalProvider } from "@/contexts";
import KakaoScript from "@/contexts/providers/kakao-script";
import ReactQueryProvider from "@/contexts/providers/query.provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../styles/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Hobiday",
  description: "문화생활을 기록하고 공유하는 맞춤형 아카이브 플랫폼 Hobiday",
  icons: {
    icon: "/img/logo-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased max-w-[430px] w-full mx-auto bg-blue-50`}>
        <ReactQueryProvider>
          <BottomSheetProvider>
            <ModalProvider>{children}</ModalProvider>
          </BottomSheetProvider>
        </ReactQueryProvider>
        <div id="portal-root" />
      </body>
      <KakaoScript />
    </html>
  );
}
