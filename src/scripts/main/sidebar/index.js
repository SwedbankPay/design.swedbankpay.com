
const SELECTORS = {
    SIDEBAR: ".sidebar",
    SIDEBARNAV: ".sidebar-nav",
    NAVGROUP: ".nav-group",
    NAVSUBGROUP: ".nav-subgroup",
    NAVLEAF: ".nav-leaf",
    ACTIVE: ".active"
};

const _navGroups = _navGroups || [];

const _closeElement = element => {

    element.classList.remove("active");

    const activeSubGroups = element.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE);

    activeSubGroups.length > 0 && [...activeSubGroups].map(activeSubGroup => activeSubGroup.classList.remove("active"));
};

const _setActiveStatus = (element, sidebar, selector) => {

    const activeElements = sidebar.querySelectorAll(selector + SELECTORS.ACTIVE);

    activeElements.length < 1 && element.classList.add("active");

    [...activeElements].map(activeElement => {

        // const activeLeafInElement = activeElement.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE);

        if (selector !== SELECTORS.NAVLEAF) {
            // !activeLeafInElement && _closeElement(activeElement);
            _closeElement(activeElement);
        } else {
            activeElement !== element && activeElement.classList.remove("active");

        }

        activeElement !== element && element.classList.add("active");

        if (selector === SELECTORS.NAVLEAF) {
            const activeGroups = sidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE);
            const activeSubGroups = sidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE);

            [...activeGroups].map(activeGroup => !activeGroup.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE) && _closeElement(activeGroup));
            [...activeSubGroups].map(activeSubGroup => !activeSubGroup.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE) && _closeElement(activeSubGroup));
        }
    });

};

const setActiveState = (group, subGroup, leaf) => {
    const sidebar = document.querySelector(SELECTORS.SIDEBAR);

    const activeGroup = sidebar.querySelectorAll(SELECTORS.NAVGROUP)[group];

    _setActiveStatus(activeGroup, sidebar, SELECTORS.NAVGROUP);

    let active = activeGroup;

    if (subGroup !== null) {

        const activeSubGroup = activeGroup.querySelectorAll(SELECTORS.NAVSUBGROUP)[subGroup];

        _setActiveStatus(activeSubGroup, sidebar, SELECTORS.NAVSUBGROUP);

        active = activeSubGroup;
    }

    active = active.querySelectorAll(SELECTORS.NAVLEAF)[leaf];

    _setActiveStatus(active, sidebar, SELECTORS.NAVLEAF);

};

const init = () => {
    const sidebar = document.querySelector(SELECTORS.SIDEBAR);

    const navGroups = sidebar.querySelectorAll(SELECTORS.NAVGROUP);
    const navSubGroups = sidebar.querySelectorAll(SELECTORS.NAVSUBGROUP);
    const navLeaves = sidebar.querySelectorAll(SELECTORS.NAVLEAF);

    [...navGroups].map(navGroup => navGroup.querySelector(".nav-group-heading").addEventListener("click", () => _setActiveStatus(navGroup, sidebar, SELECTORS.NAVGROUP)));
    [...navSubGroups].map(navSubGroup => navSubGroup.querySelector(".nav-subgroup-heading")
        .addEventListener("click", () => _setActiveStatus(navSubGroup, sidebar, SELECTORS.NAVSUBGROUP)));
    [...navLeaves].map(navLeaf => navLeaf.addEventListener("click", () => _setActiveStatus(navLeaf, sidebar, SELECTORS.NAVLEAF)));

    return sidebar;
};

export default {
    init,
    setActiveState
};
