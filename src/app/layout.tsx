import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";

const nanum = Noto_Sans_KR({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HRDK | 일본 외국계 기업 입사 희망자 대상 멘토링 특강",
  description:
    "한국산업인력공단（HRDK）이 주최하는 단순 주입식 강의 형태는 지양하고 취업 선배와 구직자 간의 소규모 그룹핑 및 상호 교류, 실습활동을 통한 실효성 있는 과정 운영 및 차년도 취업실적 증대를 위한 핵심 인력풀 구축을 위한 이벤트입니다.",
  generator: "@Tamastudy",
  applicationName: "hrdk-job-bootcamp",
  referrer: "origin-when-cross-origin",
  keywords: [
    "일본신졸",
    "멘토링",
    "미국계기업",
    "일본취업",
    "한국산업인력공단",
    "타마스터디",
    "한국인채용",
    "글로벌인재",
    "외국계기업",
  ],
  openGraph: {
    images: ["/img/header_logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={nanum.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
