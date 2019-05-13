import NavMenu from "./NavMenu";

const SELECTORS = {
    TOPBAR: ".topbar",
    TOPBARLINKS: ".topbar-nav"
};

const _navMenus = _navMenus || [];

const _createTopbar = (topbar, navMenu) => {
    const navMenuObject = new NavMenu(topbar, navMenu);

    _navMenus.push(navMenuObject);

    document.querySelector("html").addEventListener("mousedown", e => {
        if (navMenuObject.isOpen && !navMenuObject._containsPoint(e.clientX, e.clientY)) {
            navMenuObject.close();
        }
    });

    return navMenuObject;
};

const init = id => {
    if (id) {
        const topbar = document.getElementById(id);
        const navMenuQuery = topbar.querySelector(SELECTORS.TOPBARLINKS);

        if (!topbar) {
            console.warn("doesn't exist");

            return null;
        }

        return navMenuQuery ? _createTopbar(topbar, navMenuQuery) : null;
    } else {
        const topbars = document.querySelectorAll(SELECTORS.TOPBAR);

        if (!topbars.length) {
            console.warn("doesn't exist");

            return null;
        }

        const navMenuObjects = [...topbars].map(topbar => {
            const navMenuQuery = topbar.querySelector(SELECTORS.TOPBARLINKS);

            navMenuQuery ? _createTopbar(topbar, navMenuQuery) : null;
        });

        return navMenuObjects;
    }
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

export default {
    init,
    open,
    close
};
