import BulletPoint from "@/assets/BulletPoint";
import { Projects } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { urlForImage } from "sanity/lib/image";
import text from "@/lang/en.json";

const { common } = text;
interface ProjectListProps {
	projects: Projects[];
}

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
	return (
		<>
			{projects.map(project => (
				<div
					key={project._id}
					className="grid grid-cols-12 gap-6 mt-10"
				>
					<div className="col-span-12 md:col-span-3 order-2 md:order-1">
						<h2 className="text-2xl font-medium">{project.name}</h2>
						<p className="mt-1 text-lg">{project.titleSummary}</p>
						<ul>
							{project.summaryPoints.map((point, index) => (
								<li
									key={index}
									className="mt-4 text-lg flex gap-1"
								>
									<div className="mt-1">
										<BulletPoint />
									</div>
									{point}
								</li>
							))}
						</ul>
						<div className="mt-14">
							<Link
								className="text-purple-600 dark:text-purple-400 font-medium"
								href={`/projects/${project.slug.current}`}
							>
								{common.readCaseStudy}
							</Link>
						</div>
					</div>
					<div className="col-span-12 md:col-span-9 justify-end  order-1 md:order-2">
						<Link href={`/projects/${project.slug.current}`}>
							<Image
								width="0"
								height="0"
								style={{ width: "100%", height: "auto" }}
								src={
									urlForImage(project.featureImage) as string
								}
								alt={project.name}
								sizes="100vw"
							/>
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default ProjectList;
