import "./globals.css";

import ThemeProvider from "@/context/ThemeContext"; // Assuming the theme context is defined in "../context/ThemeContext"
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Karan Kowshik Portfolio",
	description:
		"Discover the innovative world of Karan Kowshik, where expertise in UI/UX Design, Product Design, and UX Research converge. Explore a portfolio that showcases years of leadership as a Head of Design and Design Lead, driving user-centric solutions that deliver results.",
	keywords:
		"B2B SaaS, Digital Marketing, Data driven design, User centric design, UI/UX design, Product design, critical thinking, GTM strategy, Data Analysis, AB Testing, Strategic leadership and planning, ROI Boost, Lead generation and conversion, Agile Project management, Audience engagement, Traffic acquisition, Marketing funnel, User research, User testing, User persona, User journey, User flow, Wireframing, Prototyping, Usability testing, User interviews, User stories, User scenarios, User requirements, User experience, User interface, User interface design, User interface design system, User interface design patterns, User interface design principles, User interface design best practices, User interface design tools, User interface design process, User interface design guidelines, User interface design examples, User interface design inspiration, User interface design trends, User interface design portfolio, User interface design case study, User interface design course, User interface design certification",
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

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className="text-neutral-900 dark:text-neutral-50">
				<ThemeProvider>
					<div className="transition-colors bg-randomColor-50 dark:bg-neutral-1000 duration-200">
						<NavMenu />
						<main>{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
