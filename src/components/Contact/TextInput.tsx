import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface TextInputProps
	extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
		TextareaHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
	multiLine?: boolean;
}
const TextInput = (props: TextInputProps) => {
	if (props.multiLine) {
		return (
			<textarea
				{...props}
				className={`px-6 py-4 outline-none focus:outline-1 focus:outline-purple-500 bg-neutral-100 dark:bg-neutral-900 rounded-lg placeholder-neutral-500 dark:placeholder-neutral-600 ${props.className}`}
			/>
		);
	}
	return (
		<input
			{...props}
			className={`px-6 py-4 outline-none focus:outline-1 focus:outline-purple-500 bg-neutral-100 dark:bg-neutral-900 rounded-lg placeholder-neutral-500 dark:placeholder-neutral-600 ${props.className}`}
		/>
	);
};

export default TextInput;
