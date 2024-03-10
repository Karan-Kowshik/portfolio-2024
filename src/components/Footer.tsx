"use client";

import React from "react";
import text from "@/lang/en.json";
import Button from "./Button";
import Link from "next/link";
import { mainFooterLinks, socialLinks } from "@/utils/links";
const { footer, common } = text;

const stats = [
	{
		title: "7+",
		description: footer.yearsOfExpDesc,
	},
	{
		title: "30+",
		description: footer.successfulProjectsDesc,
	},
];

const Footer = () => {
	return (
		<footer>
			<div className="w-full bg-neutral-100 dark:bg-neutral-900 py-24 px-8">
				<div className="grid grid-cols-12 gap-y-8 container">
					<div className="lg:col-span-8 col-span-12 lg:col-start-2">
						<h1 className="text-5.5xl font-semibold">
							{footer.heading}
						</h1>
						<Button className="mt-14" to="/contact">
							{common.startAProject}
						</Button>
						<ul className="mt-4 flex flex-col gap-2">
							{mainFooterLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.url}
										className="hover:text-purple-600 hover:dark:text-purple-400 hover:duration-200"
										target="_blank"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
						<ul className="mt-10 flex gap-x-10 gap-y-2 flex-wrap">
							{socialLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.url}
										className="hover:text-purple-600 hover:dark:text-purple-400 hover:duration-200"
										target="_blank"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
						{stats.map(stat => (
							<div key={stat.title}>
								<h1 className="text-5.5xl font-bold">
									{stat.title}
								</h1>
								<p className="text-lg">{stat.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="w-full bg-neutral-800 py-3 px-8">
				<div className="grid grid-cols-12 container text-neutral-50 ">
					<div className="col-span-8 lg:col-start-2">
						<Link
							href="https://gsriram.dev"
							target="_blank"
							className="hover:dark:text-purple-400 hover:text-purple-600  hover:duration-200"
						>
							Developed by G Sriram
						</Link>
					</div>
					<div className="lg:col-start-12 col-start-10 col-span-4">
						<Link
							href=""
							className="underline hover:dark:text-purple-400 hover:text-purple-600  hover:duration-200"
							onClick={() =>
								window.scrollTo({ top: 0, behavior: "smooth" })
							}
						>
							Back to top
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
