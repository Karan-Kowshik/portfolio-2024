export const revalidate = 120;

import { Projects } from "@/utils/types";
import { cache } from "react";
import { client } from "sanity/lib/client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "sanity/lib/image";
import BulletPoint from "@/assets/BulletPoint";
import ChevronUp from "@/assets/ChevronUp";
type Props = {
	params: { slug: string };
};
const getProjectDetails = cache(async (slug: string) => {
	const projects = await client.fetch<Projects>(
		`
		*[_type == "projects" && slug.current == "${slug}"][0]{
			_id,
			name,
			caseStudyTitle,
			projectOverview,
			timeline,
			impact,
			work,
			slug,
			summaryPoints,
			featureImage,
			titleSummary,
			content,
			seo,
		}
	`
	);
	return projects;
});

export async function generateMetadata({ params }: Props) {
	const project = await getProjectDetails(params.slug);
	return {
		title: `${project?.seo?.title ?? project?.name} | Karan Kowshik`,
		description: project?.seo?.description ?? project?.titleSummary,
		keywords: project?.seo?.keywords ?? "",
	};
}

const page = async ({ params }: { params: { slug: string } }) => {
	const projects = await getProjectDetails(params.slug);
	const myPortableTextComponents: Partial<PortableTextReactComponents> = {
		block: {
			h2: ({ children }) => (
				<h2 className="text-3.5xl font-medium mt-16">{children}</h2>
			),
			h3: ({ children }) => (
				<h3 className="text-2xl font-medium mt-8">{children}</h3>
			),
			h4: ({ children }) => (
				<h4 className="text-xl font-medium mt-8">{children}</h4>
			),
			normal: ({ children }) => (
				<p className="text-lg font-normal mt-3 lg:w-1/2">{children}</p>
			),
			description: ({ children }) => (
				<p className="text-lg font-normal">{children}</p>
			),
		},
		marks: {
			strong: ({ children }) => (
				<strong className="font-medium text-purple-600 dark:text-purple-400">
					{children}
				</strong>
			),
		},
		listItem: {
			bullet: ({ children }) => (
				<li className="mt-4 text-lg flex gap-1 lg:w-1/2">
					<div className="mt-1">
						<BulletPoint />
					</div>
					<div>{children}</div>
				</li>
			),
		},
		types: {
			image: ({ value }: { value: any }) => {
				return (
					<Image
						width="0"
						height="0"
						alt={value.alt}
						style={{
							width: "100%",
							height: "auto",
						}}
						src={urlForImage(value) as string}
						sizes="100vw"
						className="my-16 rounded-none"
					/>
				);
			},
		},
	};
	if (!projects) return null;
	return (
		<>
			<Image
				width="0"
				height="0"
				alt={projects?.name}
				style={{
					width: "100%",
					height: "500px",
					objectFit: "cover",
					overflowX: "visible",
				}}
				src={urlForImage(projects?.featureImage) as string}
				sizes="100vw"
				className="hidden lg:block"
			/>

			<div className="container px-5">
				<h1 className="text-5.5xl font-medium mt-10 mb-8">
					{projects?.caseStudyTitle}
				</h1>
				<div className="grid grid-cols-12 lg:grid-cols-12 gap-x-3 gap-y-12">
					{projects?.projectOverview && (
						<div className="lg:col-span-6 col-span-12">
							<h3 className="text-xl font-medium mb-3">
								Project Overview
							</h3>
							<PortableText
								value={projects.projectOverview}
								components={myPortableTextComponents}
							/>
						</div>
					)}
					{projects.work && (
						<div className="lg:col-start-8 lg:col-span-2 col-span-6">
							<h3 className="text-xl font-medium">Work</h3>
							<ul className="mt-3">
								{projects?.work?.map(
									(item: string, index: number) => (
										<li key={index}>{item}</li>
									)
								)}
							</ul>
						</div>
					)}
					{projects.timeline && (
						<div className="lg:col-span-2 col-span-6">
							<h3 className="text-xl font-medium">Timeline</h3>
							<p className="text-lg font-normal mt-3 lg:w-1/2">
								{projects?.timeline}
							</p>
						</div>
					)}
				</div>
				<div className="mt-32">
					<PortableText
						value={projects?.content}
						components={myPortableTextComponents}
					/>
				</div>
				{projects?.impact?.impactName && (
					<div className="mt-24">
						<h2 className="text-3.5xl font-medium ">
							{projects?.impact?.impactName}
						</h2>
						<div className="grid grid-cols-12 lg:grid-cols-12 gap-x-3 gap-y-12 mt-3">
							{projects.impact?.impactDescription && (
								<div className="lg:col-span-6 col-span-12">
									<PortableText
										value={
											projects?.impact?.impactDescription
										}
										components={myPortableTextComponents}
									/>
								</div>
							)}
							<div className="col-span-12 xl:col-span-6 xl:col-start-8 grid grid-cols-12 xl:gap-x-12 gap-y-12 justify-between">
								{projects?.impact?.impactPoints?.map(impact => (
									<div
										key={impact.number}
										className="md:col-span-6 col-span-12"
									>
										<h2 className="text-5.5xl leading-9 font-bold flex items-end gap-2">
											<ChevronUp />
											{impact?.number}
										</h2>

										<p className="text-sm font-normal mt-4 text-wrap">
											{impact?.subtext}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default page;
