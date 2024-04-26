import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Button from "../Button";
const namePlaceholder = "Karan Kowshik";
const emailPlaceholder = "hello@karankowshik.com";
const budgetOptions = [
	{ value: "Less than 10,000 INR", label: "Less than 10,000 INR" },
	{
		value: "20,000 INR to 50,000 INR",
		label: "20,000 INR to 50,000 INR",
	},
	{ value: "More than 1,00,000 INR", label: "More than 1,00,000 INR" },
];
const serviceOptions = [
	{ value: "Website Design", label: "Website Design" },
	{ value: "Mobile app Design", label: "Mobile app Design" },
	{ value: "Branding", label: "Branding" },
	{ value: "Product Strategy", label: "Product Strategy" },
	{ value: "Other", label: "Other" },
];

const requiredAsterix = <span className="text-red-600">*</span>;

const ContactForm = () => {
	return (
		<div className="col-span-12 md:col-span-6 md:col-start-7">
			<p className="text-lg">
				For a tailored response to your design needs, please fill out
				the form below.
			</p>
			<form
				action="https://formspree.io/f/xpzvjpyy"
				method="POST"
				className="mt-8 flex flex-col gap-4"
			>
				<label className="grid grid-cols-6 items-center gap-4">
					<span className="md:col-span-2 col-span-6 font-medium">
						Name{requiredAsterix}
					</span>
					<TextInput
						name="name"
						type="text"
						required
						className="md:col-span-4 col-span-6"
						placeholder={namePlaceholder}
					/>
				</label>
				<label className="grid grid-cols-6 items-center gap-4">
					<span className="md:col-span-2 col-span-6 font-medium">
						Email{requiredAsterix}
					</span>
					<TextInput
						name="email"
						type="email"
						required
						className="md:col-span-4 col-span-6"
						placeholder={emailPlaceholder}
					/>
				</label>
				<label className="grid grid-cols-6 items-center gap-4">
					<span className="md:col-span-2 col-span-6 font-medium">
						Budget
					</span>
					<Select name="budget">
						<SelectTrigger
							aria-placeholder="Select your budget range"
							className="md:col-span-4 col-span-6"
						>
							<SelectValue
								placeholder={
									<span className="text-neutral-500 dark:text-neutral-600">
										Select your budget range
									</span>
								}
							/>
						</SelectTrigger>
						<SelectContent>
							{budgetOptions.map(option => (
								<SelectItem
									key={option.value}
									value={option.value}
								>
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</label>

				<div className="grid grid-cols-6 items-center gap-4 my-8">
					<div className="md:col-span-2 col-span-6">
						<p className="font-medium">
							Service(s) required{requiredAsterix}
						</p>
						<span className="text-xs mt-2">
							What design magic can I help bring to life? Select
							your interests.
						</span>
					</div>
					<div className="grid  grid-cols-12  md:col-span-4 col-span-6 gap-y-4 w-full">
						{serviceOptions.map(option => (
							<div key={option.value} className="col-span-6">
								<CheckBox name="service" value={option.value} />
							</div>
						))}
					</div>
				</div>
				<label className="grid grid-cols-6 items-center gap-4">
					<div className="md:col-span-2 col-span-6">
						<p className="font-medium">Requirement</p>
						<span className="text-xs mt-2">
							Describe your project or idea. The more I know, the
							better our first conversation will be.
						</span>
					</div>
					<TextInput
						name="requirement"
						type="text"
						rows={5}
						multiLine
						className="md:col-span-4 col-span-6"
						placeholder="Dreaming of a unicorn that showers the world in glitter? Let's make it real."
					/>
				</label>
				<Button className="ml-auto mt-8" type="submit">
					Submit form
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
