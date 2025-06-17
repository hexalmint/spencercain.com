import type { Metadata } from "next"
import "./globals.css"

import { cn } from "@/utils/cn"
import { STIX_Two_Text } from "next/font/google"

const stix = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix-two-text",
})

export const metadata: Metadata = {
  title: "Spencer Cain — Software Engineer",
  description:
    "The website of Spencer Cain, a software engineer and technical writer. Explore engineering projects, technical insights, and original writing across development, systems, and creative technology.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "w-screen min-h-screen flex justify-center antialiased",
          stix.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
