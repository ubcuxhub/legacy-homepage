import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic", "normal"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "UX hub",
  description: "A collaborative whiteboard and design hub",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`$${dmSans.variable} ${lora.variable} antialiased`}
    >
      <head>
        <title>UX hub</title>
      </head>
      <body
        className={`${dmSans.className} font-sans text-black text-[16px]`}
      >
        {children}
      </body>
    </html>
  );
}
