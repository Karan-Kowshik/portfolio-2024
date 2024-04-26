import React from "react";
import Button from "../Button";
import text from "@/lang/en.json";

const { common, process } = text;

const processes = [
	process.discover,
	process.define,
	process.develop,
	process.deliver,
];

const ProcessesSection = () => {
	return (
		<div className="my-32">
			<h2 className="text-4.5xl font-medium">{process.heading}</h2>
			<div className="grid grid-cols-12 gap-6">
				{processes.map((process, index) => (
					<div
						key={index}
						className="col-span-12 md:col-span-6 lg:col-span-3 mt-14"
					>
						<h5 className="text-2xl font-medium">
							{index + 1}. {process.title}
						</h5>
						<p className="mt-4 text-lg">{process.description}</p>
					</div>
				))}
			</div>
			<Button className="mt-8" to="/contact">
				{common.startAProject}
			</Button>
		</div>
	);
};

export default ProcessesSection;
