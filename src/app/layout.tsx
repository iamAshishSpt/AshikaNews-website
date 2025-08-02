import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AshikaNews - नेपाली समाचार",
	description:
		"नेपालको प्रमुख समाचार वेबसाइट - ताजा समाचार, राजनीति, खेलकुद, मनोरञ्जन र अधिक",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ne">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
