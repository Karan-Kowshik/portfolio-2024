import text from "@/lang/en.json";
const { common } = text;
export const links = [
	{ name: common.home, link: "/" },
	{ name: common.photography, link: "/photography" },
	{ name: common.articles, link: "/articles" },
	{ name: common.work, link: "/work" },
	{ name: common.contact, link: "/contact", button: true },
];
export const mainFooterLinks = [
	{ label: "hello@karankowshik.com", url: "mailto:hello@karankowshik.com" },
	{ label: "+91 81975 26224", url: "tel:+918197526224" },
	{ label: "Bangalore, India", url: "" },
];
export const socialLinks = [
	{
		label: common.resume,
		url: "https://www.dropbox.com/s/e4v58eg4xqda1jo/Karan%20V%20Kowshik%20Resume.pdf?dl=0",
	},
	{
		label: common.linkedIn,
		url: "https://www.linkedin.com/in/karankowshik/",
	},
	{ label: common.instagram, url: "https://www.instagram.com/karankowshik/" },
	{ label: common.medium, url: "https://medium.com/@karankowshik" },
	{ label: common.whatsApp, url: "https://wa.me/8197526224" },
];
