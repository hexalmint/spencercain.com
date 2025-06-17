import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spencer Cain — Software Engineer",
  description: "The website of Spencer Cain, a software engineer and technical writer. Explore engineering projects, technical insights, and original writing across development, systems, and creative technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-screen min-h-screen flex justify-center antialiased"
      >
        {children}
      </body>
    </html>
  );
}
