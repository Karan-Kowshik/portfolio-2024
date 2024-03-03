import React, { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	to?: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
	return (
		<button className="bg-purple-600 text-neutral-50 rounded-full px-6 py-2">
			{children}
		</button>
	);
};

export default Button;
