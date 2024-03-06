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
	],
};

export default projects;
