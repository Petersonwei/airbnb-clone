import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import { ClerkProvider } from '@clerk/nextjs';

// FIXME: Remove this once we have a proper font
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// update inter to align with the tutorial
const inter = Inter({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Away",
  description: "Feel at home, away from home.",
};

// This is the root layout component that wraps the entire application.
// It uses ClerkProvider for authentication context and includes the Navbar and main content area.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className='container py-10'>{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
