import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import EduraLayoutProvider from "@/components/common/EduraLayoutProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edura Learning Platform",
  description: "A gamified, story-mode learning environment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <EduraLayoutProvider>
              {children}
            </EduraLayoutProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

