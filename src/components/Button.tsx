import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	to?: string;
	onClick?: () => void;
	className?: string;
	outlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	to,
	className,
	outlined,
}) => {
	const buttonClassName = outlined
		? "outline outline-1 outline-neutral-800"
		: "bg-purple-600 text-neutral-50";
	const buttonComponent = (
		<button
			onClick={onClick}
			className={`${buttonClassName} px-6 py-2  rounded-full`}
		>
			{children}
		</button>
	);
	return (
		<div className={className}>
			{to ? <Link href={to}>{buttonComponent} </Link> : buttonComponent}
		</div>
	);
};

export default Button;
