import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	to?: string;
	onClick?: () => void;
	className?: string;
	outlined?: boolean;
	buttonClass?: string;
	icon?: ReactNode;
	newTab?: boolean;
	type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	to,
	className,
	outlined,
	icon,
	buttonClass = "",
	newTab,
	type,
}) => {
	const buttonClassName = outlined
		? `outline outline-1 hover:bg-purple-600 duration-200 hover:outline-none hover:text-neutral-100`
		: "bg-purple-600 hover:bg-purple-700 duration-200 text-neutral-100";
	const buttonComponent = (
		<button
			type={type}
			onClick={onClick}
			className={`${buttonClassName} px-6 py-2 ${buttonClass} rounded-full font-medium  flex items-center gap-2`}
		>
			{icon}
			{children}
		</button>
	);
	return (
		<div className={className}>
			{to ? (
				<Link href={to} target={newTab ? "_blank" : "_self"}>
					{buttonComponent}
				</Link>
			) : (
				buttonComponent
			)}
		</div>
	);
};

export default Button;
