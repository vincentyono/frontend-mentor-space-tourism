import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";

import "@/app/globals.css";

const barlow = Barlow({
	weight: ["400", "800"],
	variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
	weight: ["400", "800"],
	variable: "--font-barlowCondensed",
});

const bellefair = Bellefair({
	weight: ["400"],
	variable: "--font-bellefair",
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
				className={`${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
