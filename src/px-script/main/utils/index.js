export const extendObj = (overWrite, obj, ext) => {
    for (const key in ext) {
        if (overWrite) {
            obj[key] = ext[key];
        } else if (!obj[key]) {
            obj[key] = ext[key];
        }
    }

    return obj;
};

export const isWithinBoundingBox = (x, y, element) => {
    const rect = element.getBoundingClientRect();
    const xMin = rect.left;
    const xMax = rect.right;
    const yMin = rect.top;
    const yMax = rect.bottom;

    return ((xMin < x) && (xMax > x)) && ((yMin < y) && (yMax > y));
};

export const handleScrollbar = () => {
    const hasVScroll = (window.innerWidth - document.documentElement.clientWidth) > 0;

    if (hasVScroll) {
        document.body.classList.add("has-vscroll");
    } else {
        document.body.classList.remove("has-vscroll");
    }
};

export const getElementsByIds = (ids, componentName) => {
    const elements = [];
    const component = componentName || "component";
    const pushElement = id => {
        const element = document.getElementById(id);

        element ? elements.push(element) : console.warn(`No ${component} found with ID: ${id}`);
    };

    if (typeof ids === "string") {
        pushElement(ids);
    } else if (Array.isArray(ids)) {
        ids.forEach(id => typeof id === "string" ? pushElement(id) : console.warn(`Skipping init selector ${id}, must be of type string.`));
    } else {
        console.warn(`Typeof selector "${ids}" is invalid for ${component}; must be a string or an array of strings`);
    }

    return elements;
};

export default {
    extendObj,
    isWithinBoundingBox,
    handleScrollbar,
    getElementsByIds
};
