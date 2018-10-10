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

export default {
    extendObj,
    isWithinBoundingBox
};
