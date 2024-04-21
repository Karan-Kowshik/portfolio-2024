import ContactForm from "@/components/Contact/ContactForm";
import ContactLinks from "@/components/Contact/ContactLinks";

import React from "react";

const page = () => {
	return (
		<div className="container px-5">
			<h1 className="text-5.5xl font-medium leading-tight my-14">
				Let&apos;s bring your ideas to life
			</h1>
			<div className="my-14 grid grid-cols-12 gap-6">
				<ContactLinks />
				<ContactForm />
			</div>
		</div>
	);
};

export default page;
