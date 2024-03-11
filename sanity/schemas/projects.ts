const projects = {
	name: "projects",
	type: "document",
	title: "Projects",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "titleSummary",
			type: "string",
			title: "Title summary",
		},
		{
			name: "summaryPoints",
			type: "array",
			title: "Points",
			of: [{ type: "string" }],
		},
		{
			name: "slug",
			type: "string",
			title: "URL Slug",
		},
		{
			name: "isFeatured",
			type: "boolean",
			title: "Is featured project?",
		},
		{
			name: "featureImage",
			type: "image",
			title: "Feature image",
		},
	],
};

export default projects;
