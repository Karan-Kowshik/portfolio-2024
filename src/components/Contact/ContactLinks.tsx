import { calendar, emailLink, phoneLink, whatsApp } from "@/utils/links";
import Link from "next/link";
import React from "react";
import Button from "../Button";
const ContactLinks = () => {
	return (
		<div className="col-span-12 md:col-span-5">
			<p className="text-lg">
				I&apos;m excited to hear about your design needs! Let&apos;s
				start crafting your design journey together.
			</p>
			<div className="grid grid-cols-12 gap-3">
				<div className="lg:col-span-4 col-span-12">
					<p className="mt-8">Phone</p>
					<Link
						href={phoneLink.url}
						className="hover:text-purple-600 hover:dark:text-purple-400 hover:duration-200 text-neutral-600 dark:text-neutral-400"
						target="_blank"
					>
						{phoneLink.label}
					</Link>
					<p className="mt-4">Email</p>
					<Link
						href={emailLink.url}
						className="hover:text-purple-600 hover:dark:text-purple-400 hover:duration-200 text-neutral-600 dark:text-neutral-400"
						target="_blank"
					>
						{emailLink.label}
					</Link>
				</div>
				<div className="lg:col-span-2 col-span-12 mt-8">
					<Link
						href={phoneLink.url}
						className="hover:text-purple-600 hover:dark:text-purple-400 hover:duration-200  col-span-1"
						target="_blank"
					>
						Resume &#8599;
					</Link>
				</div>
				<div className="xl:col-span-5 col-span-12 mt-8">
					<Link
						href={emailLink.url}
						className="hover:text-purple-600 mt-8 hover:dark:text-purple-400 hover:duration-200"
						target="_blank"
					>
						{emailLink.label} &#8599;
					</Link>
				</div>
			</div>
			<div className="flex gap-4 mt-8 ">
				<Button newTab to={calendar}>
					Schedule time
				</Button>
				<Button
					outlined
					buttonClass="outline-green-500 dark:outline-green-600"
					to={whatsApp}
					newTab
				>
					Chat on WhatsApp
				</Button>
			</div>
		</div>
	);
};

export default ContactLinks;
