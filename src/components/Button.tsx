import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	to?: string;
	onClick?: () => void;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	to,
	className,
}) => {
	const buttonComponent = (
		<button
			onClick={onClick}
			className="bg-purple-600 text-neutral-50 rounded-full px-6 py-2"
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
