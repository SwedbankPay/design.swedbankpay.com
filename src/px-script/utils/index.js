export const applyToEachElement = (elements, fn) => {
    for (let i = 0, l = elements.length; i < l; i++) {
        fn(elements[i], i);
    }
};

export const findAncestor = (el, cls) => {
    while ((el = el.parentElement) && !el.classList.contains(cls));
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

export default {
    applyToEachElement,
    findAncestor,
    extendObj
};
