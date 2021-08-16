import NavMenu from "./NavMenu";

import { openComponent, closeComponent } from "../utils";

const SELECTORS = {
    TOPBAR: ".topbar",
    TOPBARNAV: ".topbar-nav"
};

const _navMenus = [];

const _closeOnNavMenus = () => (_navMenus.some(menu => menu.isOpen ? menu.close() : false));

const _addEscListenerHandler = e => {
    if (e.key === "Escape") {
        _closeOnNavMenus();
    }
};

const _addEscListener = () => {
    document.addEventListener("keydown", _addEscListenerHandler);
};

const _addSidebarClickCloseHandler = e => {
    if (e.target.tagName === "A") {
        _closeOnNavMenus();
    }
};

const _addSidebarClickClose = topbar => {
    const sidebar = topbar.querySelector(".sidebar");

    if (sidebar) {
        sidebar.addEventListener("click", _addSidebarClickCloseHandler);
    }
};

const _createTopbar = (topbar, navMenu) => {

    if (_navMenus.filter(navMenu => navMenu.id === topbar.id).length > 0) {
        const updatedNavMenuObject = _navMenus.filter(navMenu => navMenu.id === topbar.id)[0];

        updatedNavMenuObject.constructNavMenu(topbar, navMenu);

        return updatedNavMenuObject;
    }

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
        _addSidebarClickClose(topbar);

        return navMenuQuery ? _createTopbar(topbar, navMenuQuery) : null;
    } else {
        const topbars = document.querySelectorAll(SELECTORS.TOPBAR);

        if (!topbars.length) {
            console.warn("No topbars found");

            return null;
        }

        const navMenuObjects = [...topbars].map(topbar => {
            const navMenuQuery = topbar.querySelector(SELECTORS.TOPBARNAV);

            _addSidebarClickClose(topbar);

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
