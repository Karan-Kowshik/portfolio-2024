"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const ChevronUp = () => {
	const { theme } = useContext(ThemeContext);
	const fillColor = theme === "dark" ? "#7578FF" : "#4E36F5";
	return (
		<svg
			width="20"
			height="16"
			viewBox="0 0 20 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 16L-3.17912e-07 8.72703L10 5.1656e-07L20 8.72703L20 16L10 7.27249L0 16Z"
				fill={fillColor}
			/>
		</svg>
	);
};

export default ChevronUp;
