"use client";

import React from "react";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Logo from "@/assets/Logo";
import { links } from "@/utils/links";

const NavMenu = () => {
	const pathname = usePathname();

	return (
		<header className="fixed top-0 w-full duration-200 z-40 bg-neutral-50 dark:bg-neutral-1000 text-base">
			<div className="w-full relative">
				<div className="container flex justify-between py-8 items-center px-5">
					<Link href="/">
						<Logo />
					</Link>
					<nav className="hidden xl:flex items-center gap-14">
						{links.map(link => (
							<Link
								key={link.name}
								href={link.link}
								className={`text-neutral-600 dark:text-neutral-400 
								${pathname === link.link ? "text-neutral-1000 dark:text-neutral-50" : ""}
								hover:text-purple-600 hover:dark:text-purple-400 transition-all duration-200`}
							>
								{link.button ? (
									<Button>{link.name}</Button>
								) : (
									link.name
								)}
							</Link>
						))}
					</nav>
				</div>
				<DarkModeSwitch />
			</div>
		</header>
	);
};

export default NavMenu;
