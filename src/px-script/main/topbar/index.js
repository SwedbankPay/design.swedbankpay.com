import NavMenu from "./NavMenu";
import { getElementsByIds } from "../utils";

const init = ids => {
    const topbarComponents = ids || ids === "" ? getElementsByIds(ids, "topbar") : document.querySelectorAll(".topbar");
    let navMenus = [];

    console.log(topbarComponents);

    if (topbarComponents.length) {
        topbarComponents.forEach(topbar => {
            const navMenuSelector = topbar.querySelector(".topbar-nav");

            /*
                A topbar can only have one navMenu, but you can initialize several topbars at the same time. [AW]
            */
            if (navMenuSelector) {
                const navMenuInstance = new NavMenu(topbar, navMenuSelector);

                navMenus = [...navMenus, navMenuInstance];

                /*
                    One document listener per topbar. Several document listeners for the same thing are normally bad practice,
                    but you should not have more than one topbar either. [AW]
                */
                document.querySelector("html").addEventListener("mousedown", e => {
                    if (navMenuInstance.isOpen && !navMenuInstance.containsPoint(e.clientX, e.clientY)) {
                        navMenuInstance.close();
                    }
                });
            }
        });

        return navMenus;
    }
};

export default {
    init
};
