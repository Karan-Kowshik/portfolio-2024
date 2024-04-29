import { sidebarLinks } from "@/utils/links";
import React from "react";

const Sidebar = () => {
	return (
		<div className="mr-8 z-10 fixed -right-10 top-1/4 font-medium">
			<div className="hidden md:flex flex-col justify-evenly items-center">
				{sidebarLinks.map(link => (
					<div className="my-6" key={link.url}>
						<div className=" my-6 -rotate-90">
							<a
								target="_blank"
								rel="noreferrer"
								className="hover:text-purple-600 hover:dark:text-purple-400 duration-200 flex flex-row justify-center gap-2 items-center"
								href={link.url}
							>
								{link.icon()}
								{link.label}
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
