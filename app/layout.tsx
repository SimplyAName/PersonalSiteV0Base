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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
