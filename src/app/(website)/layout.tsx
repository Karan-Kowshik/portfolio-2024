import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/context/ThemeContext"; // Assuming the theme context is defined in "../context/ThemeContext"
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Karan Kowshik",
	description: "I am designer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="text-neutral-900 dark:text-neutral-50">
				<ThemeProvider>
					<div className="transition-colors bg-neutral-50 dark:bg-neutral-1000 duration-200">
						<NavMenu />
						<main>{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
