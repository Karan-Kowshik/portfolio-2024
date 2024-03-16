import ProjectList from "@/components/ProjectList";
import { Projects } from "@/utils/types";
import React from "react";
import { client } from "sanity/lib/client";

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
		<div className="my-14">
			<h1 className="text-5.5xl font-medium my-14">All work</h1>
			<ProjectList projects={projects} />
		</div>
	);
};

export default page;
