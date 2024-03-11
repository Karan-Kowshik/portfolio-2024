import { Image } from "sanity";

export interface Projects {
	_id: string;
	name: string;
	titleSummary: string;
	summaryPoints: string[];
	slug: string;
	isFeatured: boolean;
	featureImage: Image;
}
export interface Testimonials {
	_id: string;
	name: string;
	designation: string;
	type: string;
	testimonial: string;
}
