import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import type { Metadata } from "next";

import "@/styles/globals.css"
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import ContentLayout from "@/components/layouts/content-layout";

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
  title: "COMP 426 (F'25)",
  description: "Course website for the Fall 2025 offering of COMP 426: Modern Web Programming @ UNC-Chapel Hill.",
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
          <div className="flex min-h-screen flex-col">
            <div className="container flex-1">
              <ContentLayout>{ children }</ContentLayout>
            </div>
            <SiteFooter className="border-t" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}