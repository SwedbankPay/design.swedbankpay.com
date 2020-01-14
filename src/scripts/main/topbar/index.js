import NavMenu from "./NavMenu";

import { handleScrollbar, openComponent, closeComponent } from "../utils";

const SELECTORS = {
    TOPBAR: ".topbar",
    TOPBARNAV: ".topbar-nav"
};

const _navMenus = _navMenus || [];

const _closeOnEsc = () => (_navMenus.some(menu => menu.isOpen ? menu.close() : false));

const _addEscListener = () => {
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            /* Only runs handleScrollbar if a navMenu was actually closed [AW] */
            if (document.body.classList.contains("has-vscroll")) {
                if (_closeOnEsc()) { handleScrollbar(); }
            } else {
                _closeOnEsc();
            }
        }
    });
};

const _createTopbar = (topbar, navMenu) => {
    const navMenuObject = new NavMenu(topbar, navMenu);

    _navMenus.push(navMenuObject);

    return navMenuObject;
};

const open = id => openComponent(id, "topbar", _navMenus);

const close = id => closeComponent(id, "topbar", _navMenus);

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

            return navMenuQuery ? _createTopbar(topbar, navMenuQuery) : null;
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
