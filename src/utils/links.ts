import text from "@/lang/en.json";
const { common } = text;

export const resumeLink =
	"https://www.dropbox.com/s/e4v58eg4xqda1jo/Karan%20V%20Kowshik%20Resume.pdf?dl=0";
export const linkedIn = "https://www.linkedin.com/in/karankowshik/";
export const whatsApp = "https://wa.me/8197526224";
export const calendar = "https://cal.com/karankowshik";

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
	{ label: common.instagram, url: "https://www.instagram.com/karankowshik/" },
	{ label: common.medium, url: "https://medium.com/@karankowshik" },
	{ label: common.whatsApp, url: whatsApp },
];
