
import SELECTORS from "./selectors";

const scrollBuffer = 20;

const _closeElement = element => {

    element.classList.remove("active");

    const activeSubGroups = element.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE);

    activeSubGroups.length > 0 && [...activeSubGroups].map(activeSubGroup => activeSubGroup.classList.remove("active"));
};

const _scrollToActiveLeaf = sidebar => {
    const sidebarNav = sidebar.querySelector(".sidebar-nav");
    const activeLeaf = sidebar.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE);

    sidebarNav.scrollTop = activeLeaf.offsetTop - activeLeaf.clientHeight * 2;
};

const _setActiveStatus = (element, sidebar, selector, isScroll) => {

    const activeElements = sidebar.querySelectorAll(selector + SELECTORS.ACTIVE);

    element.classList.add("active");

    [...activeElements].map(activeElement => {

        if (selector !== SELECTORS.NAVLEAF) {
            activeElement === element && _closeElement(element);
        } else {
            activeElement !== element && activeElement.classList.remove("active");
        }

    });

    if (selector === SELECTORS.NAVLEAF && !isScroll) {
        const activeGroups = sidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE);
        const activeSubGroups = sidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE);

        [...activeGroups].filter(group => !group.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE)).map(group => _closeElement(group));
        [...activeSubGroups].filter(subGroup => !subGroup.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE)).map(subGroup => _closeElement(subGroup));

        _scrollToActiveLeaf(sidebar);
    }
};

const setActiveState = (id, group, subGroup, leaf) => {

    if (group !== null) {
        const sidebar = document.getElementById(id);

        if (!sidebar) {
            console.warn(`sidebar.setActiveState: No sidebar with id ${id} found.`);

            return null;
        }

        const activeGroup = sidebar.querySelectorAll(SELECTORS.NAVGROUP)[group];

        activeGroup.classList.add("active");

        let active = activeGroup;

        if (subGroup !== null && subGroup < activeGroup.querySelectorAll(SELECTORS.NAVSUBGROUP).length) {

            const activeSubGroup = activeGroup.querySelectorAll(SELECTORS.NAVSUBGROUP)[subGroup];

            activeSubGroup.classList.add("active");

            active = activeSubGroup;
        }

        leaf !== null && leaf < active.querySelectorAll(SELECTORS.NAVLEAF).length && (active = active.querySelectorAll(SELECTORS.NAVLEAF)[leaf]);

        active.classList.add("active");

        leaf && _scrollToActiveLeaf(sidebar);

        return active;
    } else {
        console.warn("sidebar.setActiveState: The group parameter must be provided");

        return null;
    }
};

const removeActiveState = (id, group, subGroup, leaf) => {

    if (group !== null) {
        const sidebar = document.getElementById(id);

        if (!sidebar) {
            console.warn(`sidebar.removeActiveState: No sidebar with id ${id} found.`);

            return null;
        }

        const activeGroup = sidebar.querySelectorAll(SELECTORS.NAVGROUP)[group];

        let active = activeGroup;

        if (subGroup !== null) {

            const activeSubGroup = activeGroup.querySelectorAll(SELECTORS.NAVSUBGROUP)[subGroup];

            active = activeSubGroup;
        }

        leaf !== null && (active = active.querySelectorAll(SELECTORS.NAVLEAF)[leaf]);

        active.classList.remove("active");
    } else {
        console.warn("sidebar.removeActiveState: The group parameter must be provided");

        return null;
    }
};

const _contentScrollListener = (id, content, headers) => (
    () => {
        const scrollNumber = [...headers].filter(header => header.offsetTop <= content.scrollTop + scrollBuffer).length - 1;
        const sidebar = document.getElementById(id);
        const activeLeaf = sidebar.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE);
        const leaves = activeLeaf.parentElement.querySelectorAll(SELECTORS.NAVLEAF);

        if (scrollNumber === -1) {
            _setActiveStatus(leaves[0], sidebar, SELECTORS.NAVLEAF, true);
        } else {
            _setActiveStatus(leaves[scrollNumber], sidebar, SELECTORS.NAVLEAF, true);
        }

        if (content.scrollTop + scrollBuffer >= content.scrollHeight - content.clientHeight) {
            _setActiveStatus(leaves[leaves.length - 1], sidebar, SELECTORS.NAVLEAF, true);
        }

    }
);

const initScrollListener = (id, contentId, headerType) => {
    removeScrollListener(contentId);

    const content = document.getElementById(contentId);

    if (content) {

        const headers = content.querySelectorAll(`${headerType}[id]`);

        content.addEventListener("scroll", _contentScrollListener(id, content, headers));
    } else {
        console.warn(`sidebar.initScrollListener: Cannot find main content with id ${contentId}`);
    }

};

const removeScrollListener = contentId => {
    const content = document.getElementById(contentId);

    content && content.removeEventListener("scroll", _contentScrollListener);
};

const init = id => {
    if (id) {

        const sidebar = document.getElementById(id);

        if (!sidebar) {
            console.warn(`sidebar.init: No sidebar with id ${id} found`);

            return null;
        }

        const navGroups = sidebar.querySelectorAll(SELECTORS.NAVGROUP);
        const navSubGroups = sidebar.querySelectorAll(SELECTORS.NAVSUBGROUP);
        const navLeaves = sidebar.querySelectorAll(SELECTORS.NAVLEAF);

        [...navGroups].map(navGroup => navGroup.querySelector(".nav-group-heading").addEventListener("click", () => _setActiveStatus(navGroup, sidebar, SELECTORS.NAVGROUP)));
        [...navSubGroups].map(navSubGroup => navSubGroup.querySelector(".nav-subgroup-heading")
            .addEventListener("click", () => _setActiveStatus(navSubGroup, sidebar, SELECTORS.NAVSUBGROUP)));
        [...navLeaves].map(navLeaf => navLeaf.addEventListener("click", () => _setActiveStatus(navLeaf, sidebar, SELECTORS.NAVLEAF)));

        return sidebar;
    } else {
        console.warn("sidebar.init: No id provided. The id of the sidebar must be provided");

        return null;
    }
};

export default {
    init,
    setActiveState,
    removeActiveState,
    initScrollListener,
    removeScrollListener
};
