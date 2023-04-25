import identityRoute from "@src/App/routes/identity";
import componentRoute from "@src/App/routes/components";

const iconography = identityRoute[0].routes.find(
	(component) => component.title === "Iconography"
);

export const browsers = [
	{
		url: "img/documentation/forDevelopers/chrome.png",
		alt: "Chrome logo",
		text: "Yes",
	},
	{
		url: "img/documentation/forDevelopers/edge.png",
		alt: "Edge logo",
		text: "Yes",
	},
	{
		url: "img/documentation/forDevelopers/firefox.png",
		alt: "Firefox logo",
		text: "Yes",
	},
	{
		url: "img/documentation/forDevelopers/opera.png",
		alt: "Opera logo",
		text: "Yes",
	},
	{
		url: "img/documentation/forDevelopers/safari.png",
		alt: "Safari logo",
		text: "Yes",
	},
];

export const gridAndBreakpoints = [
	{
		size: "Mobile",
		breakpoints: "320-767 px",
		columns: "4",
		margins: "16 px",
	},
	{
		size: "Tablet",
		breakpoints: "767-1023 px",
		columns: "8",
		margins: "24 px",
	},
	{
		size: "Small desktop",
		breakpoints: "1024-1439 px",
		columns: "12",
		margins: "24 px",
	},
	{
		size: "Large desktop",
		breakpoints: "≥ 1440 px",
		columns: "12",
		margins: "24 px",
	},
];

export const discoverMore = [
	{
		title: componentRoute[0].title,
		url: componentRoute[0].path,
		text: "See all available components",
	},
	{
		title: iconography.title,
		url: iconography.path,
		text: "Our icon library and how to use it",
	},
];
