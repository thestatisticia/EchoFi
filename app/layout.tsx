import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EchoFi - Earn Rewards for Social Content",
  description: "A SocialFi platform that rewards users for creating engaging content about blockchain projects",
  generator: 'EchoFi'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './globals.css'
