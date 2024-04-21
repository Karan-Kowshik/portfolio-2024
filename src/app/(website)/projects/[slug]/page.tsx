import { Projects } from "@/utils/types";
import React from "react";
import { client } from "sanity/lib/client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "sanity/lib/image";
import BulletPoint from "@/assets/BulletPoint";
import ChevronUp from "@/assets/ChevronUp";

const page = async ({ params }: { params: { slug: string } }) => {
	const projects = await client.fetch<Projects>(`
		*[_type == "projects" && slug.current == "${params.slug}"][0]{
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
			content
		}
	`);
	const myPortableTextComponents: Partial<PortableTextReactComponents> = {
		block: {
			h2: ({ children }) => (
				<h2 className="text-3.5xl font-medium">{children}</h2>
			),
			h3: ({ children }) => (
				<h3 className="text-2xl font-medium mt-8">{children}</h3>
			),
			normal: ({ children }) => (
				<p className="text-lg font-normal mt-3 md:w-1/2">{children}</p>
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
				<li className="mt-4 text-lg flex gap-1">
					<div className="mt-1">
						<BulletPoint />
					</div>
					{children}
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
				sizes="100vw hidden lg:block"
			/>

			<div className="container px-5">
				<h1 className="text-5.5xl font-medium my-14">
					{projects?.caseStudyTitle}
				</h1>
				<div className="grid grid-cols-12 md:grid-cols-12 gap-3">
					{projects?.projectOverview && (
						<div className="md:col-span-6 col-span-12">
							<h3 className="text-xl font-medium mt-8 mb-3">
								Project Overview
							</h3>
							<PortableText
								value={projects.projectOverview}
								components={myPortableTextComponents}
							/>
						</div>
					)}
					{projects.work && (
						<div className="md:col-start-8 md:col-span-2 col-span-6">
							<h3 className="text-xl font-medium mt-8">Work</h3>
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
						<div className="md:col-span-2 col-span-6">
							<h3 className="text-xl font-medium mt-8">
								Timeline
							</h3>
							<p className="text-lg font-normal mt-3 md:w-1/2">
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
				<div className="mb-24">
					<h2 className="text-3.5xl font-medium ">Impact</h2>
					<div className="grid grid-cols-12 md:grid-cols-12 gap-3 mt-3">
						{projects.impact?.impactDescription && (
							<div className="md:col-span-6 col-span-12">
								<PortableText
									value={projects?.impact?.impactDescription}
									components={myPortableTextComponents}
								/>
							</div>
						)}
						<div className="col-span-12 md:col-span-6 md:col-start-8 grid grid-cols-12 gap-x-12 gap-y-12 justify-between">
							{projects?.impact?.impactPoints?.map(impact => (
								<div
									key={impact.number}
									className="md:col-span-6 col-span-12"
								>
									<h2 className="text-5.5xl leading-9 font-bold flex items-end gap-2">
										<ChevronUp />
										{impact?.number}
									</h2>

									<p className="text-sm font-normal mt-4">
										{impact?.subtext}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
