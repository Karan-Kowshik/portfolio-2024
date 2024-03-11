import React, { FC } from "react";
import Button from "../Button";
import text from "@/lang/en.json";
import { Testimonials } from "@/utils/types";
import { linkedIn } from "@/utils/links";
import BulletPoint from "@/assets/BulletPoint";

const { common, testimonials: testimonialText } = text;
interface TestimonialsProps {
	testimonials: Testimonials[];
}

const renderTestimonial = (testimonials: Testimonials[]) => {
	return (
		<div className="grid col-span-12  md:col-span-6 gap-6">
			{testimonials.map(testimonial => (
				<div
					key={testimonial._id}
					className="max-w-full bg-neutral-100 dark:bg-neutral-900 py-8 px-10 justify-between flex flex-col"
				>
					<div>
						<p
							className={`text-xs ${
								testimonial.type === "Testimonial"
									? "dark:text-purple-400 text-purple-800"
									: "text-blue-800 dark:text-blue-500"
							}`}
						>
							{testimonial.type}
						</p>

						<p className="mt-4 text-xl">
							&quot;{testimonial.testimonial}&quot;
						</p>
					</div>
					<div>
						<p className="mt-14 text-lg font-medium">
							{testimonial.name}
						</p>
						<p className="text-neutral-600 dark:text-neutral-400">
							{testimonial.designation}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

const TestimonialsSection: FC<TestimonialsProps> = ({ testimonials }) => {
	const testimonial1 = testimonials.slice(
		0,
		Math.ceil(testimonials.length / 2)
	);
	const testimonial2 = testimonials.slice(Math.ceil(testimonials.length / 2));
	return (
		<div className="my-24">
			<h2 className="text-4.5xl font-medium">
				{testimonialText.heading}
			</h2>
			<div className="grid grid-cols-12 gap-6 mt-14">
				{renderTestimonial(testimonial1)}
				{renderTestimonial(testimonial2)}
			</div>
			<div className="flex gap-4 mt-8 justify-center">
				<Button to="/contact">{common.startAProject}</Button>
				<Button
					outlined
					buttonClass="outline-purple-600 text-purple-600 dark:text-purple-400 dark:outline-purple-400"
					icon={<BulletPoint />}
					to={linkedIn}
				>
					{common.myLinkedIn}
				</Button>
			</div>
		</div>
	);
};

export default TestimonialsSection;
