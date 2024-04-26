export const revalidate = 120;
import ProjectList from "@/components/ProjectList";
import { Projects } from "@/utils/types";
import { Metadata } from "next";
import React from "react";
import { client } from "sanity/lib/client";
export const metadata: Metadata = {
	title: "Projects | Karan Kowshik ",
	description:
		"Explore the portfolio of Karan Kowshik, showcasing years of expertise in UI/UX Design, Product Design, and UX Research. Discover a collection of projects that demonstrate leadership as a Head of Design and Design Lead, delivering user-centric solutions that drive results.",
};
const page = async () => {
	const projects = await client.fetch<Projects[]>(`
		*[_type == "projects"]{
			_id,
			name,
			slug,
			summaryPoints,
			featureImage,
			titleSummary,
		}
	`);
	return (
		<div className="my-14 container px-5">
			<h1 className="text-5.5xl font-medium my-14">All work</h1>
			<ProjectList projects={projects} />
		</div>
	);
};

export default page;
