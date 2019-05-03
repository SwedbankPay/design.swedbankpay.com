import NavMenu from "./NavMenu";
import { hashId } from "../utils";

const SELECTORS = {
    TOPBAR: ".topbar",
    TOPBARLINKS: ".topbar-nav"
};

const _navMenus = _navMenus || [];

const init = id => {
    const topbarId = hashId(id);
    const topbarComponents = topbarId ? document.querySelectorAll(topbarId) : document.querySelectorAll(SELECTORS.TOPBAR);
    const navMenus = [];

    if (topbarComponents.length) {
        topbarComponents.forEach(topbar => {
            const navMenuSelector = topbar.querySelector(SELECTORS.TOPBARLINKS);

            /*
                A topbar can only have one navMenu, but you can initialize several topbars at the same time. [AW]
            */
            if (navMenuSelector) {
                const navMenuInstance = new NavMenu(topbar, navMenuSelector);

                navMenus.push(navMenuInstance);

                /*
                    One document listener per topbar. Several document listeners for the same thing are normally bad practice,
                    but you should not have more than one topbar either. [AW]
                */
                document.querySelector("html").addEventListener("mousedown", e => {
                    if (navMenuInstance.isOpen && !navMenuInstance._containsPoint(e.clientX, e.clientY)) {
                        navMenuInstance.close();
                    }
                });
            }
        });
        _navMenus.push(...navMenus);

        return navMenus.length === 1 ? navMenus[0] : navMenus;
    }

    return null;
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
