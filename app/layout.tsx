import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohamed Fatnassi | Software Engineer Portfolio",
  description:
    "Professional portfolio of Mohamed Fatnassi, a Full-Stack Software Engineer specializing in modern web technologies and cloud solutions.",
  keywords: ["software engineer", "full stack developer", "react", "next.js", "portfolio"],
  authors: [{ name: "Mohamed Fatnassi" }],
  openGraph: {
    title: "Mohamed Fatnassi | Software Engineer Portfolio",
    description: "Full-Stack Software Engineer specializing in modern web technologies",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Fatnassi | Software Engineer Portfolio",
    description: "Full-Stack Software Engineer specializing in modern web technologies",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
