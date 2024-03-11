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
