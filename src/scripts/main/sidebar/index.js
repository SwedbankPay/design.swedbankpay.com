
const SELECTORS = {
    SIDEBAR: ".sidebar",
    SIDEBARNAV: ".sidebar-nav",
    NAVGROUP: ".nav-group",
    NAVSUBGROUP: ".nav-subgroup",
    NAVLEAF: ".nav-leaf",
    ACTIVE: ".active"
};

const scrollBuffer = 20;

const _closeElement = element => {

    element.classList.remove("active");

    const activeSubGroups = element.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE);

    activeSubGroups.length > 0 && [...activeSubGroups].map(activeSubGroup => activeSubGroup.classList.remove("active"));
};

const _setActiveStatus = (element, sidebar, selector) => {

    const activeElements = sidebar.querySelectorAll(selector + SELECTORS.ACTIVE);

    element.classList.add("active");

    [...activeElements].map(activeElement => {

        if (selector !== SELECTORS.NAVLEAF) {
            activeElement === element && _closeElement(element);
        } else {
            activeElement !== element && activeElement.classList.remove("active");
        }

    });

    if (selector === SELECTORS.NAVLEAF) {
        const activeGroups = sidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE);
        const activeSubGroups = sidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE);

        [...activeGroups].filter(group => !group.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE)).map(group => _closeElement(group));
        [...activeSubGroups].filter(subGroup => !subGroup.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE)).map(subGroup => _closeElement(subGroup));
    }

};

const setActiveState = (id, group, subGroup, leaf) => {

    if (group !== null) {
        const sidebar = document.getElementById(id);

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
    } else {
        console.warn("siderbar.setActiveState: The group parameter must be provided");
    }
};

const removeActiveState = (id, group, subGroup, leaf) => {

    if (group !== null) {
        const sidebar = document.getElementById(id);

        const activeGroup = sidebar.querySelectorAll(SELECTORS.NAVGROUP)[group];

        activeGroup.classList.remove("active");

        let active = activeGroup;

        if (subGroup !== null) {

            const activeSubGroup = activeGroup.querySelectorAll(SELECTORS.NAVSUBGROUP)[subGroup];

            activeSubGroup.classList.remove("active");

            active = activeSubGroup;
        }

        leaf !== null && (active = active.querySelectorAll(SELECTORS.NAVLEAF)[leaf]);

        active.classList.remove("active");
    } else {
        console.warn("siderbar.setActiveState; The group parameter must be provided");
    }
};

const _mainContentScrollListener = (id, mainContent, headers) => (
    () => {
        const scrollNumber = [...headers].filter(header => header.offsetTop <= mainContent.scrollTop + scrollBuffer).length - 1;
        const sidebar = document.getElementById(id);
        const activeLeaf = sidebar.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE);
        const leaves = activeLeaf.parentElement.querySelectorAll(SELECTORS.NAVLEAF);

        if (scrollNumber === -1) {
            _setActiveStatus(leaves[0], sidebar, SELECTORS.NAVLEAF);
        } else {
            _setActiveStatus(leaves[scrollNumber], sidebar, SELECTORS.NAVLEAF);
        }

        if (mainContent.scrollTop + scrollBuffer >= mainContent.scrollHeight - mainContent.clientHeight) {
            _setActiveStatus(leaves[leaves.length - 1], sidebar, SELECTORS.NAVLEAF);
        }

    }
);

const initScrollListener = (id, mainContentId, headerType) => {
    removeScrollListener(mainContent);

    const mainContent = document.getElementById(mainContentId);

    if (mainContent) {
        const headers = mainContent.querySelectorAll(`${headerType}[id]`);

        mainContent.addEventListener("scroll", _mainContentScrollListener(id, mainContent, headers));
    } else {
        console.warn(`sidebar.initScrollListener: Cannot find main content with id ${mainContentId}`);
    }

};

const removeScrollListener = mainContentId => {
    const mainContent = document.getElementById(mainContentId);

    mainContent && mainContent.removeEventListener("scroll", _mainContentScrollListener);
};

const init = id => {
    if (id) {

        const sidebar = document.getElementById(id);

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
    }
};

export default {
    init,
    setActiveState,
    removeActiveState,
    initScrollListener,
    removeScrollListener
};
