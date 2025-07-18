import type { Metadata } from "next";
import { Barlow_Condensed, Bellefair } from "next/font/google";

import "@/app/globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["400"]
});

const bellefair = Bellefair({
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.className} ${bellefair.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
