import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import HeaderServer from "@/app/_server/header-server";
import FooterServer from "@/app/_server/footer-server";

const montserrat = Montserrat({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AKİAB",
  description: "Azərbaycan Korporativ İş Adamları Birliyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <div className={"min-h-[calc(100vh-369px)]"}>
          <Suspense fallback={<NavSkeleton />}>
            <HeaderServer />
          </Suspense>
          {children}
        </div>

        <Suspense fallback={<FooterSkeleton />}>
          <FooterServer />
        </Suspense>
      </body>
    </html>
  );
}
function NavSkeleton() {
  return <div style={{ height: 56 }} />;
}
function FooterSkeleton() {
  return <div style={{ height: 200 }} />;
}
