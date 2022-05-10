
import SELECTORS from "./selectors";

const scrollBuffer = 20;

const _sidebars = [];

class TopbarSidebar {
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

    _setActiveStatus (element, selector) {

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
    }

    _contentScrollListener (id, content, headers) {

        return (
            () => {
                const scrollNumber = [...headers].filter(header => header.offsetTop <= content.scrollTop + scrollBuffer).length - 1;
                const activeLeaf = this.el.querySelector(SELECTORS.NAVLEAF + SELECTORS.ACTIVE);
                const leaves = activeLeaf.parentElement.querySelectorAll(SELECTORS.NAVLEAF);

                if (scrollNumber === -1) {
                    this._setActiveStatus(leaves[0], SELECTORS.NAVLEAF);
                } else {
                    this._setActiveStatus(leaves[scrollNumber], SELECTORS.NAVLEAF);
                }

                if (content.scrollTop + scrollBuffer >= content.scrollHeight - content.clientHeight) {
                    this._setActiveStatus(leaves[leaves.length - 1], SELECTORS.NAVLEAF);
                }

            }
        );
    }

}

class Sidebar {
    constructor (el) {
        this.constructSidebar(el);
    }

    constructSidebar (el) {
        this.el = el;
        this.id = el.id;
        this.headers = [];
        this._popStateListener = this._popStateListener.bind(this);
        this._contentScrollListener = this._contentScrollListener.bind(this);
        this._initListeners();
    }

    _popStateListener () {
        if (this.el && !this.el.querySelector(".main-nav-li.active")
            .querySelector(".sidebar-secondary-nav")) {
            this.el.classList.remove("has-secondary-nav");
        }
    }

    _initListeners () {
        const secondaryNavLI = this.el.querySelectorAll(".secondary-nav-li");
        const previousNavs = this.el.querySelectorAll(".previous-nav");

        const skipLink = document.querySelector("#skip-link");

        const liList = this.el.querySelectorAll("li");

        window.addEventListener("popstate", this._popStateListener);

        [...liList].map(li => li.querySelector("a").addEventListener("click", () => this._activate(li)));
        [...previousNavs].map(previousNav => previousNav.addEventListener("click", () => this._setPreviousNav(previousNav)));
        [...secondaryNavLI].map(secNavLi => secNavLi.addEventListener("keyup", e => {
            if (e.keyCode === 13) {
                skipLink.focus();
            }
        }));
    }

    _activate (element) {
        if (element.parentElement.querySelector("li.active")) {
            element.parentElement.querySelector("li.active").classList.remove("active");
        }

        element.classList.add("active");

        if (element.classList.contains("main-nav-li")) {
            this._closeChildElements(this.el, true);
            element.classList.add("active");

            if (element.querySelector(".sidebar-secondary-nav")) {
                this.el.classList.add("has-secondary-nav");
            } else {
                this.el.classList.remove("has-secondary-nav");
            }
        }
    }

    _setPreviousNav (element) {
        element.closest("li.leaf").classList.remove("active");
        this._closeChildElements(element.parentElement, true);
    }

    _closeChildElements (element, closeElement) {
        const activeChildElements = element.querySelectorAll(SELECTORS.ACTIVE);

        [...activeChildElements].map(activeChildElement => {
            activeChildElement.classList.remove("active");
        });

        closeElement && element.classList.remove("active");
    }

    _setActiveStatus (element, selector) {
        const activeElements = this.el.querySelectorAll(selector + SELECTORS.ACTIVE);

        element.classList.add("active");

        if (selector === ".main-nav-li") {
            if (element.querySelector(".sidebar-secondary-nav")) {
                this.el.classList.add("has-secondary-nav");
            } else {
                this.el.classList.remove("has-secondary-nav");
            }
        }

        [...activeElements].map(activeElement => {
            element !== activeElement && this._closeChildElements(activeElement, true);
        });
    }

    _setHeaders (headers) {
        this.headers = headers;
    }

    _navLeafScrollListener (header) {
        return (
            () => {
                window.scrollTo({
                    top: header.offsetTop,
                    left: 0,
                    behavior: "instant"
                });
            }
        );
    }

    _contentScrollListener () {
        const scrollNumber = [...this.headers].filter(header => header.offsetTop <= window.pageYOffset).length - 1;
        const activeSecondaryNavLi = this.el.querySelector(`.secondary-nav-li${SELECTORS.ACTIVE}`);
        const leaves = activeSecondaryNavLi ? activeSecondaryNavLi.querySelectorAll(SELECTORS.NAVLEAF) : [];

        if (leaves.length > 0) {
            if (scrollNumber === -1) {
                leaves[0] && this._setActiveStatus(leaves[0], SELECTORS.NAVLEAF);
            } else {
                this._setActiveStatus(leaves[scrollNumber], SELECTORS.NAVLEAF);
            }

            if ((window.innerHeight + window.scrollY >= document.body.scrollHeight) && window.scrollY !== 0) {
                this._setActiveStatus(leaves[leaves.length - 1], SELECTORS.NAVLEAF);
            }
        }

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
    removeScrollListener(id);

    const sidebar = _sidebars.filter(sidebar => sidebar.id === id)[0];

    const content = document.getElementById(contentId);

    if (content) {

        const headers = content.querySelectorAll(`${headerType}[id]`);

        sidebar._setHeaders(headers);

        window.addEventListener("scroll", sidebar._contentScrollListener);

        const sidebarElement = document.getElementById(id);
        const leaves = sidebarElement.querySelector(`.secondary-nav-li${SELECTORS.ACTIVE}`).querySelectorAll(SELECTORS.NAVLEAF);

        [...leaves].map((leaf, i) => leaf.addEventListener("click", sidebar._navLeafScrollListener(headers[i])));
        sidebar._contentScrollListener();
    } else {
        console.warn(`sidebar.initScrollListener: Cannot find main content with id ${contentId}`);
    }

};

const removeScrollListener = id => {
    const sidebar = _sidebars.filter(sidebar => sidebar.id === id)[0];

    window.removeEventListener("scroll", sidebar._contentScrollListener);
};

const _createTopbarSidebar = sidebarQuery => {

    if (_sidebars.filter(sidebar => sidebar.id === sidebarQuery.id).length > 0) {
        const updatedSidebarObject = _sidebars.filter(sidebar => sidebar.id === sidebarQuery.id)[0];

        updatedSidebarObject.constructSidebar(sidebarQuery);

        return updatedSidebarObject;
    }

    const sidebarObject = new TopbarSidebar(sidebarQuery);

    _sidebars.push(sidebarObject);

    return sidebarObject;
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

const populateSidebarTertiary = (id, leafList) => {
    const sidebar = document.getElementById(id);

    const activeTertiaryUl = sidebar.querySelector(".secondary-nav-li.active ul");

    activeTertiaryUl.innerHTML = "";

    [...leafList].map(leaf => {
        const newLeaf = document.createElement("li");
        const newLeafContent = document.createElement("a");

        newLeafContent.textContent = leaf.textContent;
        newLeafContent.href = "#";
        newLeafContent.onclick = e => { e.preventDefault(); };
        newLeaf.appendChild(newLeafContent);
        newLeaf.classList.add("nav-leaf");

        activeTertiaryUl.appendChild(newLeaf);
    });
};

const init = (id, topbarSidebar) => {
    if (id) {

        const sidebar = document.getElementById(id);

        if (!sidebar) {
            console.warn(`sidebar.init: No sidebar with id ${id} found`);

            return null;
        }

        const sidebarObject = topbarSidebar ? _createTopbarSidebar(sidebar) : _createSidebar(sidebar);

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
    removeScrollListener,
    populateSidebarTertiary
};
