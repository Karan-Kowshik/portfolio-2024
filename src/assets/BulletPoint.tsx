"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const BulletPoint = ({ colorInherit = false }) => {
	const { theme } = useContext(ThemeContext);
	const fillColor = theme === "dark" ? "#7578FF" : "#4E36F5";
	return (
		<svg
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1710_956)">
				<path
					d="M7.382 5.244C7.314 5.094 7.164 5 7.001 5C6.839 5 6.689 5.094 6.621 5.244L5.238 8.238L2.244 9.618C2.094 9.686 2 9.836 2 10.001C2 10.167 2.094 10.314 2.244 10.382L5.238 11.765L6.618 14.756C6.686 14.905 6.836 15 6.999 15C7.161 15 7.311 14.905 7.379 14.756L8.762 11.762L11.756 10.379C11.905 10.311 12 10.161 12 9.999C12 9.836 11.905 9.686 11.756 9.618L8.765 8.238L7.382 5.244Z"
					fill={colorInherit ? `currentColor` : fillColor}
				/>
				<path
					opacity="0.4"
					d="M12.195 4.219L13.667 3.667L14.219 2.195C14.263 2.078 14.375 2 14.5 2C14.625 2 14.737 2.078 14.781 2.195L15.333 3.667L16.805 4.219C16.922 4.263 17 4.375 17 4.5C17 4.625 16.922 4.737 16.805 4.781L15.333 5.333L14.781 6.805C14.737 6.922 14.625 7 14.5 7C14.375 7 14.263 6.922 14.219 6.805L13.667 5.333L12.195 4.781C12.078 4.737 12 4.625 12 4.5C12 4.375 12.078 4.263 12.195 4.219Z"
					fill={colorInherit ? `currentColor` : fillColor}
				/>
				<path
					opacity="0.4"
					d="M14 14L12.234 14.663C12.094 14.716 12 14.85 12 15C12 15.15 12.094 15.284 12.234 15.337L14 16L14.663 17.766C14.716 17.906 14.85 18 15 18C15.15 18 15.284 17.906 15.337 17.766L16 16L17.766 15.337C17.906 15.284 18 15.15 18 15C18 14.85 17.906 14.716 17.766 14.663L16 14L15.337 12.234C15.284 12.094 15.15 12 15 12C14.85 12 14.716 12.094 14.663 12.234L14 14Z"
					fill={colorInherit ? `currentColor` : fillColor}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1710_956">
					<rect width="21" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default BulletPoint;
