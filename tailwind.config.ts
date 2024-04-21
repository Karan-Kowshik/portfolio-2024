import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "selector",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				red: {
					600: "#DE213D",
				},
				green: {
					500: "#10B981",
					600: "#059669 ",
				},
				purple: {
					50: "#ECF0FF",
					100: "#DDE3FF",
					200: "#C2CBFF",
					300: "#9CA7FF",
					400: "#7578FF",
					500: "#635BFF",
					600: "#4E36F5",
					700: "#432AD8",
					800: "#3725AE",
					900: "#302689",
					1000: "#1E1650",
				},
				blue: {
					500: "#3B82F6",
					800: "#1E40AF",
				},
				neutral: {
					50: "#F8FAFC",
					100: "#F1F5F9",
					200: "#E2E8F0",
					300: "#CBD5E1",
					400: "#94A3B8",
					500: "#64748B",
					600: "#475569",
					700: "#334155",
					800: "#1E293B",
					900: "#0F172A",
					1000: "#020617",
				},
				grey: {
					50: "#FAFAFA",
					100: "#F5F5F5",
					200: "#E5E5E5",
					300: "#D4D4D4",
					400: "#A3A3A3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
					1000: "#0A0A0A",
				},
			},
			fontSize: {
				"5.5xl": "3.25rem",
				"4.5xl": "2.5rem",
				"3.5xl": "2rem",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
