import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

import { TimeBasedTheme } from "@/components/time-based-theme";

export const metadata: Metadata = {
  title: "Personal Finance Risk Dashboard",
  description: "Visualize risk and returns for Savings, Bonds, Index Funds, and Crypto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TimeBasedTheme />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto max-w-7xl px-4 py-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
