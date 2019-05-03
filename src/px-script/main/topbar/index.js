import NavMenu from "./NavMenu";
import { hashId } from "../utils";

const SELECTORS = {
    TOPBAR: ".topbar",
    TOPBARLINKS: ".topbar-nav"
};

const init = ids => {
    // const topbarComponents = ids || ids === "" ? getElementsByIds(ids, "topbar") : document.querySelectorAll(SELECTORS.TOPBAR);
    // let navMenus = [];

    // if (topbarComponents.length) {
    //     topbarComponents.forEach(topbar => {
    //         const navMenuSelector = topbar.querySelector(SELECTORS.TOPBARLINKS);

    //         /*
    //             A topbar can only have one navMenu, but you can initialize several topbars at the same time. [AW]
    //         */
    //         if (navMenuSelector) {
    //             const navMenuInstance = new NavMenu(topbar, navMenuSelector);

    //             navMenus = [...navMenus, navMenuInstance];

    //             /*
    //                 One document listener per topbar. Several document listeners for the same thing are normally bad practice,
    //                 but you should not have more than one topbar either. [AW]
    //             */
    //             document.querySelector("html").addEventListener("mousedown", e => {
    //                 if (navMenuInstance.isOpen && !navMenuInstance._containsPoint(e.clientX, e.clientY)) {
    //                     navMenuInstance.close();
    //                 }
    //             });
    //         }
    //     });

    //     return navMenus;
    // }
};

export default {
    init
};
