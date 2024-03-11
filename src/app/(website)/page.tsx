import HeroSection from "@/components/HomePage/HeroSection";
import ProcessesSection from "@/components/HomePage/ProcessesSection";
import ProjectList from "@/components/ProjectList";
import { Projects } from "@/utils/types";
import { client } from "sanity/lib/client";

export default async function Home() {
	const projects = await client.fetch<Projects[]>(`
		*[_type == "projects" && isFeatured == true]{
			_id,
			name,
			slug,
			summaryPoints,
			featureImage,
			titleSummary,
		}
	`);
	return (
		<>
			<HeroSection />
			<h2 className="text-4.5xl font-medium">Selected work</h2>
			<div className="my-14">
				<ProjectList projects={projects} />
			</div>
			<ProcessesSection />
		</>
	);
}
