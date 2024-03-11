import React from "react";
import Button from "../Button";
import text from "@/lang/en.json";
import { resumeLink } from "@/utils/links";

const { common, hero } = text;
const HeroSection = () => {
	return (
		<div className="grid grid-cols-12 min-h-[calc(100vh-7rem)] items-center">
			<div className="col-span-12 md:col-span-6">
				<h1 className="text-5.5xl font-medium leading-tight">
					{hero.heading}
				</h1>
				<p className="mt-4 leading-6">
					{hero.subHeading1}{" "}
					<span className="text-purple-600">{hero.subHeading2} </span>
					{hero.subHeading3} <br /> <br /> {hero.subHeading4}
				</p>
				<div className="flex gap-4 mt-9">
					<Button>{common.letsChat}</Button>
					<Button outlined to={resumeLink} newTab>
						{common.resume}
					</Button>
				</div>
			</div>
			<div className="blob-cont hidden lg:flex">
				<div className="yellow blob"></div>
				<div className="red blob"></div>
				<div className="green blob"></div>
			</div>
		</div>
	);
};

export default HeroSection;
