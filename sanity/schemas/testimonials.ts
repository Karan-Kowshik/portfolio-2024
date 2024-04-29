import { orderRankField } from "@sanity/orderable-document-list";

const testimonials = {
	name: "testimonials",
	type: "document",
	title: "Testimonials",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "designation",
			type: "string",
			title: "Designation",
		},
		{
			name: "type",
			type: "string",
			title: "Testimonial type",
			options: {
				list: ["Recommendation", "Testimonial"],
			},
		},
		{
			name: "testimonial",
			type: "text",
			title: "Testimonial",
		},
		orderRankField({ type: "testimonials" }),
	],
};

export default testimonials;
