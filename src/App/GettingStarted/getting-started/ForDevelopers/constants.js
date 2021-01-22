import routes from "@src/App/routes/all";

const [, identity, components, utilities] = routes;
const iconography = identity.routes.find(component => component.title === "Iconography");

export const browsers = [
    {
        url: "img/documentation/forDevelopers/chrome.png",
        alt: "Image of chrome",
        text: "Yes"
    },
    {
        url: "img/documentation/forDevelopers/edge.png",
        alt: "Image of Edge",
        text: "Yes"
    },
    {
        url: "img/documentation/forDevelopers/internet-explorer.png",
        alt: "Image of Internet explorer",
        text: "11"
    },
    {
        url: "img/documentation/forDevelopers/firefox.png",
        alt: "Image of Firefox",
        text: "Yes"
    },
    {
        url: "img/documentation/forDevelopers/opera.png",
        alt: "Image of Opera",
        text: "Yes"
    },
    {
        url: "img/documentation/forDevelopers/safari.png",
        alt: "Image of Safari",
        text: "Yes"
    }
];

export const gridAndBreakpoints = [
    {
        size: "Mobile",
        breakpoints: "320-767 px",
        columns: "4",
        margins: "16 px"
    },
    {
        size: "Tablet",
        breakpoints: "767-1023 px",
        columns: "8",
        margins: "24 px"
    },
    {
        size: "Small desktop",
        breakpoints: "1024-1439 px",
        columns: "12",
        margins: "24 px"
    },
    {
        size: "Large desktop",
        breakpoints: "≥ 1440 px",
        columns: "12",
        margins: "24 px"
    }
];

export const discoverMore = [
    {
        title: components.title,
        url: components.path,
        text: "See all available components"
    },
    {
        title: utilities.title,
        url: utilities.path,
        text: "See all available components"
    },
    {
        title: iconography.title,
        url: iconography.path,
        text: "Our icon library and how to use it"
    }
];
