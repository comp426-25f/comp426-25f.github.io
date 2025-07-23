import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import type { Metadata } from "next";

import "@/styles/globals.css"
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})


export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [
    {
      name: "Ajay Gandecha",
      url: "https://ajaygandecha.com"
    }
  ],
  creator: "Ajay Gandecha",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}