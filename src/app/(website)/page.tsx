export const revalidate = 120;
import type { Metadata } from "next";

import HeroSection from "@/components/HomePage/HeroSection";
import ProcessesSection from "@/components/HomePage/ProcessesSection";
import TestimonialsSection from "@/components/HomePage/TestimonailsSection";
import ProjectList from "@/components/ProjectList";
import { Projects, Testimonials } from "@/utils/types";
import { client } from "sanity/lib/client";

export const metadata: Metadata = {
	title: "Karan Kowshik Portfolio",
	description:
		"Discover the innovative world of Karan Kowshik, where expertise in UI/UX Design, Product Design, and UX Research converge. Explore a portfolio that showcases years of leadership as a Head of Design and Design Lead, driving user-centric solutions that deliver results.",
	keywords:
		"B2B SaaS, Digital Marketing, Data driven design, User centric design, UI/UX design, Product design, critical thinking, GTM strategy, Data Analysis, AB Testing, Strategic leadership and planning, ROI Boost, Lead generation and conversion, Agile Project management, Audience engagement, Traffic acquisition, Marketing funnel, User research, User testing, User persona, User journey, User flow, Wireframing, Prototyping, Usability testing, User interviews, User stories, User scenarios, User requirements, User experience, User interface, User interface design, User interface design system, User interface design patterns, User interface design principles, User interface design best practices, User interface design tools, User interface design process, User interface design guidelines, User interface design examples, User interface design inspiration, User interface design trends, User interface design portfolio, User interface design case study, User interface design course, User interface design certification",
};
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
