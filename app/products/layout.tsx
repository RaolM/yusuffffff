import "../globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import FakeBuyerWidget from "../components/FakeBuyerWidget"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CloudStore - Our Products",
  description:
    "Explore our premium cloud solutions including Pterodactyl Panels, WhatsApp Bot Scripts, and VPS services.",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FakeBuyerWidget />
      </body>
    </html>
  )
}

