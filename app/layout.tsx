import "./globals.css";
import type { Metadata } from "next"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OphxHost",
  description: "Private & secure image host for Discord, Revolt or any other chat app that supports embeds.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950`}>{children}</body>
    </html>
  )
}
