
import SELECTORS from "./selectors";

const scrollBuffer = 20;

const _sidebars = _sidebars || [];

class Sidebar {
    constructor (el) {
        this.constructSidebar(el);
    }

    constructSidebar (el) {
        this.el = el;
        this.id = el.id;
        this._initListeners();
    }

    _initListeners () {
        const navGroups = this.el.querySelectorAll(SELECTORS.NAVGROUP);
        const navSubGroups = this.el.querySelectorAll(SELECTORS.NAVSUBGROUP);
        const navLeaves = this.el.querySelectorAll(SELECTORS.NAVLEAF);

        [...navGroups].map(navGroup => navGroup.querySelector(".nav-group-heading").addEventListener("click", () => this._setActiveStatus(navGroup, SELECTORS.NAVGROUP)));
        [...navSubGroups].map(navSubGroup => navSubGroup.querySelector(".nav-subgroup-heading")
            .addEventListener("click", () => this._setActiveStatus(navSubGroup, SELECTORS.NAVSUBGROUP)));
        [...navLeaves].map(navLeaf => navLeaf.addEventListener("click", () => this._setActiveStatus(navLeaf, SELECTORS.NAVLEAF)));
    }

    _closeElement (element) {

        element.classList.remove("active");

        const activeSubGroups = element.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE);

        activeSubGroups.length > 0 && [...activeSubGroups].map(activeSubGroup => activeSubGroup.classList.remove("active"));
    }

    _setActiveStatus (element, selector, isScroll) {

        const activeElements = this.el.querySelectorAll(selector + SELECTORS.ACTIVE);

        element.classList.add("active");

        [...activeElements].map(activeElement => {

            if (selector !== SELECTORS.NAVSUBGROUP) {
                activeElement !== element && activeElement.classList.remove("active");
            } else {
                (
                    activeElement !== element &&
                    [...activeElement.querySelectorAll(SELECTORS.NAVSUBGROUP)].filter(activeElementChild => activeElementChild === element).length === 0 &&
                    activeElement.classList.remove("active")
                );
            }

            if (selector !== SELECTORS.NAVLEAF) {
                activeElement === element && this._closeElement(element);
            }

        });

        if (selector === SELECTORS.NAVLEAF && !isScroll) {
            const activeGroups = this.el.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE);
            const activeSubGroups = this.el.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE);

            [...activeGroups].filter(group => !group.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE)).map(group => this._closeElement(group));
            [...activeSubGroups].filter(subGroup => !subGroup.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE)).map(subGroup => this._closeElement(subGroup));
        }
    }

    _contentScrollListener (id, content, headers) {

        return (
            () => {
                const scrollNumber = [...headers].filter(header => header.offsetTop <= content.scrollTop + scrollBuffer).length - 1;
                const activeLeaf = this.el.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE);
                const leaves = activeLeaf.parentElement.querySelectorAll(SELECTORS.NAVLEAF);

                if (scrollNumber === -1) {
                    this._setActiveStatus(leaves[0], SELECTORS.NAVLEAF, true);
                } else {
                    this._setActiveStatus(leaves[scrollNumber], SELECTORS.NAVLEAF, true);
                }

                if (content.scrollTop + scrollBuffer >= content.scrollHeight - content.clientHeight) {
                    this._setActiveStatus(leaves[leaves.length - 1], SELECTORS.NAVLEAF, true);
                }

            }
        );
    }

}

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

const initScrollListener = (id, contentId, headerType) => {
    removeScrollListener(id, contentId);

    const sidebar = _sidebars.filter(sidebar => sidebar.id === id)[0];

    const content = document.getElementById(contentId);

    if (content) {

        const headers = content.querySelectorAll(`${headerType}[id]`);

        content.addEventListener("scroll", sidebar._contentScrollListener(id, content, headers));
    } else {
        console.warn(`sidebar.initScrollListener: Cannot find main content with id ${contentId}`);
    }

};

const removeScrollListener = (id, contentId) => {
    const content = document.getElementById(contentId);
    const sidebar = _sidebars.filter(sidebar => sidebar.id === id)[0];

    content && content.removeEventListener("scroll", sidebar._contentScrollListener);
};

const _createSidebar = sidebarQuery => {

    if (_sidebars.filter(sidebar => sidebar.id === sidebarQuery.id).length > 0) {
        const updatedSidebarObject = _sidebars.filter(sidebar => sidebar.id === sidebarQuery.id)[0];

        updatedSidebarObject.constructSidebar(sidebarQuery);

        return updatedSidebarObject;
    }

    const sidebarObject = new Sidebar(sidebarQuery);

    _sidebars.push(sidebarObject);

    return sidebarObject;
};

const init = id => {
    if (id) {

        const sidebar = document.getElementById(id);

        if (!sidebar) {
            console.warn(`sidebar.init: No sidebar with id ${id} found`);

            return null;
        }

        const sidebarObject = _createSidebar(sidebar);

        return sidebarObject;
    } else {
        const sidebars = document.querySelectorAll(".sidebar");

        if (!sidebars.length) {
            console.warn("sidebar.init: No sidebars found");

            return null;
        }

        const sidebarObjects = [...sidebars].map(sidebar => _createSidebar(sidebar));

        return sidebarObjects;
    }
};

export default {
    init,
    setActiveState,
    removeActiveState,
    initScrollListener,
    removeScrollListener
};
