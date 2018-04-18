export const applyToEachElement = (elements, fn) => {
    for (let i = 0, l = elements.length; i < l; i++) {
        fn(elements[i], i);
    }
};

export const findAncestor = (el, cls) => {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
};

export default {
    applyToEachElement,
    findAncestor
};
