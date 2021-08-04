const SELECTORS = {
    NAV: ".nav",
    SUB: ".submenu",
    SUBMENU: {
        OPEN: ".submenu-open"
    }
};

const _navs = [];

class Nav {
    constructor (el) {
        this.id = el.id;
        this._el = el;
        this.navVerticalSize;
        this.navVerticalWideSize;
        this.navOpen = el.classList.contains("nav-open");
        this.submenus = this._el.querySelectorAll(SELECTORS.SUB);
        this.listItems = [...this._el.querySelectorAll("li")];
        this.resizeEventMenuOpen;
        this.resizeEventSubmenuOpen;
        this.submenuOpen = this._el.querySelector(SELECTORS.SUBMENU.OPEN);

        if (this.listItems.length > 5 || this.submenus.length) {
            this._hideItems();

            const menu = document.createElement("a");

            menu.setAttribute("href", "#");
            menu.classList.add("nav-openbtn");
            menu.innerHTML = "<i class='material-icons' aria-hidden='true'>menu</i>";

            this._el.appendChild(menu);

            menu.addEventListener("click", e => {
                e.preventDefault();

                if (this.navOpen) {
                    this.close();
                    this._hideItems();
                } else {
                    this.open();
                    this._showItems();
                }
            });
        }

        if (this.submenus) {
            this.submenus.forEach(submenu => {
                const submenuAnchor = submenu.querySelector("a");

                if (!submenuAnchor) {
                    console.warn("nav.init(): No submenu icon found");
                }

                const submenuCopy = submenuAnchor.cloneNode(true);

                submenuCopy.classList.add("submenu-toggle");

                submenu.insertBefore(submenuCopy, submenuAnchor);
                submenuCopy.addEventListener("click", e => {
                    e.preventDefault();

                    if (submenu.classList.contains("submenu-open")) {
                        this._submenuCloseAll();
                    } else {
                        this._submenuCloseAll();
                        this.resizeEventSubmenuOpen = this._onResize.bind(this);
                        window.addEventListener("resize", this.resizeEventSubmenuOpen, { passive: true });
                        submenu.classList.add("submenu-open");
                        this.submenuOpen = true;
                    }
                });
            });
        }

        this._getBreakpoints();
    }

    /* Closes all open submenus */
    _submenuCloseAll () {
        window.removeEventListener("resize", this.resizeEventSubmenuOpen, { passive: true });
        this.submenus.forEach(submenu => submenu.classList.remove("submenu-open"));
        this.submenuOpen = false;
    }

    /* Removes hidden class from list items */
    _showItems () {
        this.listItems.forEach(listItem => listItem.classList.remove("responsive-hidden"));
    }

    /* Hides menu items with the class .responsive-hidden */
    _hideItems () {
        const firstFour = this.listItems.filter(notHidden => !notHidden.classList.contains("responsive-hidden") && notHidden.querySelector(SELECTORS.SUB) === null && this._el.querySelector("UL") === notHidden.parentElement);

        if (this.submenus.length > 0) {
            this.submenus.forEach(levelTwo => {
                levelTwo.parentElement.classList.add("responsive-hidden");
            });

            if (firstFour.length > 4) {
                firstFour.slice(4).forEach(item => {
                    item.parentElement.classList.add("responsive-hidden");
                });
            }
        } else {
            this.listItems.slice(4).forEach(items => {
                items.classList.add("responsive-hidden");
            });
        }
    }

    _getBreakpoints () {
        const breakpoints = [
            { "nav-xs-vertical": 0 },
            { "nav-sm-vertical": 576 },
            { "nav-md-vertical": 768 },
            { "nav-lg-vertical": 992 },
            { "nav-xl-vertical": 1200 },
            { "nav-xxl-vertical": 1600 }
        ];

        breakpoints.forEach(breakpoint => {
            if (this._el.classList.contains(Object.keys(breakpoint)[0])) {
                this.navVerticalSize = Number(Object.values(breakpoint));

                [...this._el.classList].forEach(classname => {
                    breakpoints.forEach(breakpoint => {
                        if (`${Object.keys(breakpoint)[0]}-wide` === classname) {
                            this.navVerticalWideSize = Object.values(breakpoint)[0];
                        }
                    });
                });

                this._setAttributes();
                this._addEventListener();
            }
        });
    }

    _setAttributes () {
        const icons = this._el.querySelectorAll("ul .material-icons");

        if (window.innerWidth > this.navVerticalSize && window.innerWidth < this.navVerticalWideSize) {
            [...icons].map(icon => {
                icon.removeAttribute("aria-hidden");
                icon.setAttribute("aria-label", icon.nextElementSibling.innerText);
            });
        } else {
            [...icons].map(icon => {
                if (icon.hasAttribute("aria-label")) {
                    icon.removeAttribute("aria-label");
                    icon.setAttribute("aria-hidden", true);
                }
            });
        }
    }

    _addEventListener () {
        window.addEventListener("resize", () => {
            const icon = this._el.querySelector("li .material-icons");

            if (icon.hasAttribute("aria-hidden")
                && window.innerWidth > this.navVerticalSize
                    && window.innerWidth < this.navVerticalWideSize) {
                this._setAttributes();
            }

            if (icon.hasAttribute("aria-label")
                && window.innerWidth > this.navVerticalWideSize
                    || window.innerWidth < this.navVerticalSize) {
                this._setAttributes();
            }
        });
    }

    /* Operations to run when the window is resized */
    _onResize () {
        this.close();
        this._hideItems();
        this._submenuCloseAll();
    }

    open () {
        this.navOpen = true;
        this._el.classList.add("nav-open");
        this.resizeEventMenuOpen = this._onResize.bind(this);
        window.addEventListener("resize", this.resizeEventMenuOpen, { passive: true });
    }

    close () {
        this.navOpen = false;
        this._el.classList.remove("nav-open");
        window.removeEventListener("resize", this.resizeEventMenuOpen, { passive: true });
    }
}

/* Generate nav instances */
const _createNav = navQuery => {
    const navObject = new Nav(navQuery);

    _navs.push(navObject);

    /* Add listener on document to close other navs */
    document.addEventListener("click", e => {
        if (!e.target.closest(".nav") && navObject.navOpen) {
            navObject.close();
            navObject._hideItems();
        }

        if (!e.target.closest(".submenu") && navObject.submenuOpen) {
            navObject._submenuCloseAll();
        }
    });

    return navObject;
};

const init = id => {
    if (id) {
        const nav = document.getElementById(id);

        if (!nav) {
            console.warn(`No nav with id ${id} found`);

            return null;
        }

        return _createNav(nav);
    } else {
        const navs = document.querySelectorAll(SELECTORS.NAV);

        if (!navs.length) {
            console.warn("No navs found");

            return null;
        }

        return [...navs].map(nav => _createNav(nav));
    }
};

const open = id => {
    let nav = null;

    _navs.forEach(n => n.id === id ? nav = n : null);

    try {
        nav.open();
    } catch (e) {
        console.error(`nav.open: No nav with id "${id}" found.`);

        return false;
    }

    return nav;
};

const close = id => {
    let nav = null;

    _navs.forEach(n => n.id === id ? nav = n : null);

    try {
        nav.close();
    } catch (e) {
        console.error(`nav.close: No nav with id "${id}" found.`);

        return false;
    }

    return nav;
};

export default {
    init,
    open,
    close
};
