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

export const findElemsWithId = (ids, elementName) => {
    const elements = [];
    const pushElement = id => {
        const val = document.querySelector(`#${id}`);

        val ? elements.push(val) : console.warn(`No ${elementName} found with ID: ${id}`);
    };

    if (typeof ids === "string") {
        pushElement(ids);
    } else if (Array.isArray(ids)) {
        ids.forEach(elem => pushElement(elem));
    } else {
        console.warn("ID type is invalid; must be a string or an array of strings");
    }

    return elements;
};

export default {
    extendObj,
    isWithinBoundingBox,
    handleScrollbar,
    findElemsWithId
};
