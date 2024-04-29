"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const DarkModeSwitch = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<button
			className="absolute top-1/2 -translate-y-1/2  right-8"
			aria-label="Toggle Dark Mode"
			onClick={toggleTheme}
		>
			{theme === "light" ? (
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.2334 8.57166C2.2334 12.5592 5.46588 15.7916 9.45335 15.7916C12.2882 15.7916 14.7414 14.1579 15.9228 11.7805C9.45335 11.7805 6.24448 8.57166 6.24448 2.10219C3.86716 3.28362 2.2334 5.73684 2.2334 8.57166Z"
						stroke="#020617"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			) : (
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1711_1905)">
						<path
							d="M9.10948 13.3442C11.4492 13.3442 13.3459 11.4475 13.3459 9.1078C13.3459 6.76808 11.4492 4.87137 9.10948 4.87137C6.76976 4.87137 4.87305 6.76808 4.87305 9.1078C4.87305 11.4475 6.76976 13.3442 9.10948 13.3442Z"
							stroke="#F8FAFC"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16.1699 9.10783H16.876"
							stroke="#F8FAFC"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9.10742 2.04711V1.34103"
							stroke="#F8FAFC"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9.10742 16.8746V16.1685"
							stroke="#F8FAFC"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14.7569 14.7564L14.0508 14.0503"
							stroke="#F8FAFC"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14.7569 3.45924L14.0508 4.16532"
							stroke="#F8FAFC"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M3.45898 14.7564L4.16506 14.0503"
							stroke="#F8FAFC"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M3.45898 3.45924L4.16506 4.16532"
							stroke="#F8FAFC"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M1.3418 9.10783H2.04787"
							stroke="#F8FAFC"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1711_1905">
							<rect width="18" height="18" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)}
		</button>
	);
};

export default DarkModeSwitch;
