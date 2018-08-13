export const applyToEachElement = (elements, fn) => {
    for (let i = 0, l = elements.length; i < l; i++) {
        fn(elements[i], i);
    }
};

export const findAncestor = (el, cls) => {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
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
    isWithinBoundingBox
};
