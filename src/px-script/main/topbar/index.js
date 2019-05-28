import NavMenu from "./NavMenu";

import { handleScrollbar } from "../utils";

const SELECTORS = {
    TOPBAR: ".topbar",
    TOPBARNAV: ".topbar-nav"
};

const _navMenus = _navMenus || [];

const _addEscListener = () => {
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && document.body.classList.contains("has-vscroll")) {
            /* Only runs handleScrollbar if a navMenu was actually closed [AW] */
            if (_navMenus.some(menu => menu.isOpen ? menu.close() : false)) { handleScrollbar(); }
        }
    });
};

const _createTopbar = (topbar, navMenu) => {
    const navMenuObject = new NavMenu(topbar, navMenu);

    _navMenus.push(navMenuObject);

    return navMenuObject;
};

const open = id => {
    let navmenu = null;

    _navMenus.forEach(n => n.id === id ? navmenu = n : null);

    try {
        navmenu.open();
    } catch (e) {
        console.error(`navmenu.open: No navmenu with id "${id}" found.`);

        return false;
    }

    return navmenu;
};

const close = id => {
    let navmenu = null;

    _navMenus.forEach(n => n.id === id ? navmenu = n : null);

    try {
        navmenu.close();
    } catch (e) {
        console.error(`navmenu.close: No navmenu with id "${id}" found.`);

        return false;
    }

    return navmenu;
};

const init = id => {
    if (id) {
        const topbar = document.getElementById(id);

        if (!topbar) {
            console.warn(`No topbar with id ${id} found`);

            return null;
        }

        const navMenuQuery = topbar.querySelector(SELECTORS.TOPBARNAV);

        _addEscListener();

        return navMenuQuery ? _createTopbar(topbar, navMenuQuery) : null;
    } else {
        const topbars = document.querySelectorAll(SELECTORS.TOPBAR);

        if (!topbars.length) {
            console.warn("No topbars found");

            return null;
        }

        const navMenuObjects = [...topbars].map(topbar => {
            const navMenuQuery = topbar.querySelector(SELECTORS.TOPBARNAV);

            navMenuQuery ? _createTopbar(topbar, navMenuQuery) : null;
        });

        _addEscListener();

        return navMenuObjects;
    }
};

export default {
    init,
    open,
    close
};
