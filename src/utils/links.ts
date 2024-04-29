import text from "@/lang/en.json";
const { common } = text;
import Icon1 from "@/assets/Icon1";
import Icon2 from "@/assets/Icon2";
import Icon3 from "@/assets/Icon3";
import Icon4 from "@/assets/Icon4";

export const resumeLink =
	"https://www.dropbox.com/s/e4v58eg4xqda1jo/Karan%20V%20Kowshik%20Resume.pdf?dl=0";
export const linkedIn = "https://www.linkedin.com/in/karankowshik/";
export const whatsApp = "https://wa.me/8197526224";
export const calendar = "https://cal.com/karankowshik";
export const instagram = "https://www.instagram.com/karankowshik/";
export const medium = "https://medium.com/@karankowshik";

export const links = [
	{ name: common.home, link: "/" },
	{ name: common.work, link: "/work" },
	{ name: common.contact, link: "/contact", button: true },
];
export const phoneLink = { label: "+91 81975 26224", url: "tel:+918197526224" };
export const emailLink = {
	label: "hello@karankowshik.com",
	url: "mailto:hello@karankowshik.com",
};
export const mainFooterLinks = [
	emailLink,
	phoneLink,
	{ label: "Bangalore, India", url: "" },
];
export const socialLinks = [
	{
		label: common.resume,
		url: resumeLink,
	},
	{
		label: common.linkedIn,
		url: linkedIn,
	},
	{ label: common.instagram, url: instagram },
	{ label: common.medium, url: medium },
	{ label: common.whatsApp, url: whatsApp },
];

export const sidebarLinks = [
	{ label: "Medium", url: medium, icon: Icon4 },
	{ label: "Instagram", url: instagram, icon: Icon3 },
	{
		label: "ADPList",
		url: "https://adplist.org/mentors/karan-kowshik",
		icon: Icon2,
	},
	{ label: "LinkedIn", url: linkedIn, icon: Icon1 },
];
