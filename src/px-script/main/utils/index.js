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

export default {
    extendObj,
    isWithinBoundingBox,
    handleScrollbar
};
