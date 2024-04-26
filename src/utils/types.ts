import { Image, Slug } from "sanity";

export interface Projects {
	_id: string;
	name: string;
	titleSummary: string;
	summaryPoints: string[];
	slug: Slug;
	isFeatured: boolean;
	featureImage: Image;
	content: Array<any>;
	caseStudyTitle?: string;
	projectOverview?: Array<any>;
	work?: string[];
	timeline?: string;
	impact?: {
		impactName?: string;
		impactDescription?: Array<any>;
		impactPoints?: Array<{
			number: string;
			subtext: string;
		}>;
	};
	seo?: {
		title: string;
		description: string;
		keywords: string;
	};
}
export interface Testimonials {
	_id: string;
	name: string;
	designation: string;
	type: string;
	testimonial: string;
}
