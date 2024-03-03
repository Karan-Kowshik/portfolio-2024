"use client";

import React, { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
	theme: Theme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: "light",
	toggleTheme: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.className = newTheme;
	};

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") as Theme;
		if (storedTheme) {
			setTheme(storedTheme);
		} else {
			const systemTheme = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches
				? "dark"
				: "light";
			setTheme(systemTheme);
			document.documentElement.className = systemTheme;
			localStorage.setItem("theme", systemTheme);
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
