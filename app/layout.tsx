import type React from "react"
import "./globals.css"
import {Inter} from "next/font/google"
import type {Metadata} from "next"
import {ThemeProvider} from "@/components/theme-provider"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Michael Loney - Software Engineer",
  description: "Michael Loney, a software developer for over 5 years.",
  generator: "Next.js",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
