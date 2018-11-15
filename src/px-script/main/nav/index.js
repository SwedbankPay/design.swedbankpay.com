class Nav {
    constructor (el) {
        this._el = el;
        this.navOpen = el.classList.contains("nav-open");
        this.submenus = this._el.querySelectorAll(".submenu");
        this.listItems = [...this._el.querySelectorAll("li")];
        this.resizeEventMenuOpen;
        this.resizeEventSubmenuOpen;
        this.submenuOpen = this._el.querySelector(".submenu-open");

        if (this.listItems.length > 5 || this.submenus.length) {
            this.hideItems();

            const menu = document.createElement("a");

            menu.setAttribute("href", "#");
            menu.classList.add("nav-openbtn");
            menu.innerHTML = "<i class='material-icons'>menu</i>";

            this._el.appendChild(menu);

            menu.addEventListener("click", e => {
                e.preventDefault();

                if (this.navOpen) {
                    this.close();
                    this.hideItems();
                } else {
                    this.open();
                    this.showItems();
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
                        this.submenuCloseAll();
                    } else {
                        this.submenuCloseAll();
                        this.resizeEventSubmenuOpen = this.onResize.bind(this);
                        window.addEventListener("resize", this.resizeEventSubmenuOpen, { passive: true });
                        submenu.classList.add("submenu-open");
                        this.submenuOpen = true;
                    }
                });
            });
        }
    }

    submenuCloseAll () {
        window.removeEventListener("resize", this.resizeEventSubmenuOpen, { passive: true });
        this.submenus.forEach(submenu => submenu.classList.remove("submenu-open"));
        this.submenuOpen = false;
    }

    showItems () {
        this.listItems.forEach(listItem => listItem.classList.remove("responsive-hidden"));
    }

    hideItems () {
        const firstFour = this.listItems.filter(notHidden => !notHidden.classList.contains("responsive-hidden") && notHidden.querySelector(".submenu") === null && this._el.querySelector("UL") === notHidden.parentElement);

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

    onResize () {
        this.close();
        this.hideItems();
        this.submenuCloseAll();
    }

    open () {
        this.navOpen = true;
        this._el.classList.add("nav-open");
        this.resizeEventMenuOpen = this.onResize.bind(this);
        window.addEventListener("resize", this.resizeEventMenuOpen, { passive: true });
    }

    close () {
        this.navOpen = false;
        this._el.classList.remove("nav-open");
        window.removeEventListener("resize", this.resizeEventMenuOpen, { passive: true });
    }
}

const nav = (() => {
    const init = () => {
        let navs = document.querySelectorAll(".nav");

        if (navs.length > 0) {
            navs = [...navs].map(nav => new Nav(nav));

            document.addEventListener("click", e => {
                navs.forEach(nav => {
                    if (!e.target.closest(".nav") && nav.navOpen) {
                        nav.close();
                        nav.hideItems();
                    }

                    if (!e.target.closest(".submenu") && nav.submenuOpen) {
                        nav.submenuCloseAll();
                    }
                });
            });
        }
    };

    return { init };
})();

export default nav;
