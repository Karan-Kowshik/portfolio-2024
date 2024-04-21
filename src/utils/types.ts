import { Image } from "sanity";

export interface Projects {
	_id: string;
	name: string;
	titleSummary: string;
	summaryPoints: string[];
	slug: string;
	isFeatured: boolean;
	featureImage: Image;
	content: Array<any>;
	caseStudyTitle?: string;
	projectOverview?: Array<any>;
	work?: string[];
	timeline?: string;
	impact?: {
		impactDescription?: Array<any>;
		impactPoints?: Array<{
			number: string;
			subtext: string;
		}>;
	};
}
export interface Testimonials {
	_id: string;
	name: string;
	designation: string;
	type: string;
	testimonial: string;
}
