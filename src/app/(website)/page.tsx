export const revalidate = 120;

import HeroSection from "@/components/HomePage/HeroSection";
import ProcessesSection from "@/components/HomePage/ProcessesSection";
import TestimonialsSection from "@/components/HomePage/TestimonailsSection";
import ProjectList from "@/components/ProjectList";
import { Projects, Testimonials } from "@/utils/types";
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
	const testimonials = await client.fetch<Testimonials[]>(`
		*[_type == "testimonials"] | order(name asc){
			_id,
			name,
			designation,
			type,
			testimonial,
		}
	`);

	return (
		<div className="container px-5">
			<HeroSection />
			<h2 className="text-4.5xl font-medium">Selected work</h2>
			<div className="my-14">
				<ProjectList projects={projects} />
			</div>
			<ProcessesSection />
			<TestimonialsSection testimonials={testimonials} />
		</div>
	);
}
