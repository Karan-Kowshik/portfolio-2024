import React from "react";
import Button from "../Button";
import text from "@/lang/en.json";
import { resumeLink } from "@/utils/links";

const { common, hero } = text;
const HeroSection = () => {
	return (
		<div className="grid grid-cols-12 min-h-screen items-center">
			<div className="col-span-12 md:col-span-6">
				<h1 className="text-5.5xl font-medium leading-tight">
					{hero.heading}
				</h1>
				<p className="mt-4 leading-6">
					{hero.subHeading1}{" "}
					<span className="text-purple-600">{hero.subHeading2} </span>
					{hero.subHeading3} <br /> <br /> {hero.subHeading4}
				</p>
				<div className="flex gap-4">
					<Button className="mt-9">{common.letsChat}</Button>
					<Button outlined to={resumeLink} className="mt-9">
						{common.resume}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
