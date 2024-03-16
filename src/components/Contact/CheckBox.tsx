import React from "react";
interface CheckBoxProps {
	name: string;
	value: string;
}

const CheckBox = ({ value, name }: CheckBoxProps) => {
	return (
		<label className="flex items-center gap-2 ">
			<input
				type="checkbox"
				name={name}
				value={value}
				className="peer relative checked:before:content-['\2713'] text-neutral-50 checked:before:absolute before:-bottom-0.5 before:right-0.5 appearance-none checked:bg-purple-600 checked:border-none w-4 h-4 border-2 border-neutral-500 dark:border-neutral-600 rounded"
			/>
			<span className="font-medium peer-checked:text-neutral-1000 text-neutral-500 dark:text-neutral-600 dark:peer-checked:text-neutral-50 transition-colors duration-200">
				{value}
			</span>
		</label>
	);
};

export default CheckBox;
