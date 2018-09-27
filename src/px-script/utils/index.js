export const applyToEachElement = (elements, fn) => {
    for (let i = 0, l = elements.length; i < l; i++) {
        fn(elements[i], i);
    }
};

export const findAncestor = (el, cls) => {
    while ((el = el.parentElement) && !el.classList.contains(cls)); // eslint-disable-line curly

    return el;
};

export const extendObj = (overWrite, obj, ext) => {
    for (const key in ext) {
        if (overWrite) {
            obj[key] = ext[key];
        } else {
            if (!obj[key]) {
                obj[key] = ext[key];
            }
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

export default {
    applyToEachElement,
    findAncestor,
    extendObj,
    isWithinBoundingBox
};
