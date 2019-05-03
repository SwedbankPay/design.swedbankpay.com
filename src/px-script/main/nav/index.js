import { hashId } from "../utils";

const SELECTORS = {
    NAV: ".nav",
    SUB: ".submenu",
    SUBMENU: {
        OPEN: ".submenu-open"
    }
};

class Nav {
    constructor (el) {
        this._el = el;
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
            menu.innerHTML = "<i class='material-icons'>menu</i>";

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
                const submenuCopy = submenu.querySelector("i").cloneNode(true);

                submenuCopy.classList.add("submenu-icon-clickable");
                submenu.insertBefore(submenuCopy, submenu.querySelector("i"));

                submenuCopy.addEventListener("click", () => {
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
    }

    _submenuCloseAll () {
        window.removeEventListener("resize", this.resizeEventSubmenuOpen, { passive: true });
        this.submenus.forEach(submenu => submenu.classList.remove("submenu-open"));
        this.submenuOpen = false;
    }

    _showItems () {
        this.listItems.forEach(listItem => listItem.classList.remove("responsive-hidden"));
    }

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

const init = id => {
    const navId = hashId(id);
    const navSelector = navId ? document.querySelectorAll(navId) : document.querySelectorAll(SELECTORS.NAV);
    let navs = [];

    if (navSelector.length > 0) {
        navs = [...navSelector].map(nav => new Nav(nav));

        document.addEventListener("click", e => {
            navs.forEach(nav => {
                if (!e.target.closest(SELECTORS.NAV) && nav.navOpen) {
                    nav.close();
                    nav._hideItems();
                }

                if (!e.target.closest(SELECTORS.SUB) && nav.submenuOpen) {
                    nav._submenuCloseAll();
                }
            });
        });
    }

    return navs;
};

export default {
    init
};
