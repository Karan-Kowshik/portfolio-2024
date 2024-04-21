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
			name: "caseStudyTitle",
			type: "string",
			title: "Case study title",
		},
		{
			name: "projectOverview",
			type: "array",
			of: [
				{
					type: "block",
					styles: [{ title: "Description", value: "description" }],
				},
			],
			title: "Project overview",
		},

		{
			name: "summaryPoints",
			type: "array",
			title: "Points",
			of: [{ type: "string" }],
		},
		{
			name: "work",
			type: "array",
			title: "Work",
			of: [{ type: "string" }],
		},
		{
			name: "timeline",
			type: "string",
			title: "Timeline",
		},
		{
			name: "slug",
			type: "slug",
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
		{
			name: "content",
			type: "array",
			title: "Content",
			of: [
				{
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "H4", value: "h4" },
						{ title: "H5", value: "h5" },
						{ title: "Quote", value: "blockquote" },
					],
				},
				{
					type: "image",
					fields: [
						{
							type: "text",
							name: "alt",
							title: "Alternative text",
							description: `Some of your visitors cannot see images, 
							be they blind, color-blind, low-sighted; 
							alternative text is of great help for those 
							people that can rely on it to have a good idea of 
							what\'s on your page.`,
							options: {
								isHighlighted: true,
							},
						},
					],
				},
			],
		},
		{
			title: "Impact",
			name: "impact",
			type: "object",
			fields: [
				{
					name: "impactDescription",
					type: "array",
					of: [
						{
							type: "block",
							styles: [
								{ title: "Description", value: "description" },
							],
						},
					],
					title: "Impact description",
				},
				{
					name: "impactPoints",
					type: "array",
					title: "Impact points",
					of: [
						{
							type: "object",
							fields: [
								{
									name: "number",
									type: "string",
									title: "Number",
								},
								{
									name: "subtext",
									type: "string",
									title: "Subtext",
								},
							],
						},
					],
				},
			],
		},
	],
};

export default projects;
