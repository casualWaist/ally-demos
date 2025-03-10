import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animation Demos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <canvas id="canvas" className="w-screen h-screen"></canvas>
        {children}
      <Script src="fluid_sim.js" type="text/javascript"></Script>
      </body>
    </html>
  );
}
