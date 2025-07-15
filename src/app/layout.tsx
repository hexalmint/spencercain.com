import type { Metadata } from "next"
import "./globals.css"

import { Navbar } from "@/components/navbar"
import { brand, items } from "@/components/navbar/defaults"

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
      <body className="w-full min-h-screen flex flex-col items-center gap-4 antialiased">
        <Navbar brand={brand} items={items} />
        <div className="w-full flex justify-center p-4">{children}</div>
      </body>
    </html>
  )
}
