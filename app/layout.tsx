import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"
import { Vazirmatn } from "next/font/google"

import "./globals.css"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
})

export const metadata: Metadata = {
  title: "چاپ‌عکس | چاپ حرفه‌ای تصاویر شما",
  description: "سرویس آنلاین چاپ عکس با کیفیت بالا - انتخاب سایز، متریال و تحویل سریع",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`min-h-screen bg-[#F6EFE9] text-[#3B2F2A] antialiased ${vazirmatn.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
