import NavMenu from "./NavMenu";

const topbar = (() => {
    const init = index => {
        const menu = document.querySelectorAll(".topbar")[index || 0];
        let leftNavMenu;
        let rightNavMenu;

        if (menu) {
            // TODO: remove when left and right btn gets deleted from topbar
            const leftMenuBtnElement = menu.querySelector(".topbar-btn-left");
            const rightMenuBtnElement = menu.querySelector(".topbar-btn-right");
            const menuBtnElement = menu.querySelector(".topbar-btn");

            if (leftMenuBtnElement) {
                leftNavMenu = new NavMenu(leftMenuBtnElement);
            }

            if (rightMenuBtnElement) {
                rightNavMenu = new NavMenu(rightMenuBtnElement);
            }

            // TODO: Simpler if-statement after deprecated parts are removed
            if (!leftMenuBtnElement && !rightMenuBtnElement && menuBtnElement) {
                leftNavMenu = new NavMenu(menuBtnElement);
            }

            document.querySelector("html").addEventListener("mousedown", e => {
                if (leftNavMenu && leftNavMenu.isOpen && !leftNavMenu.containsPoint(e.clientX, e.clientY)) {
                    leftNavMenu.close();
                }

                if (rightNavMenu && rightNavMenu.isOpen && !rightNavMenu.containsPoint(e.clientX, e.clientY)) {
                    rightNavMenu.close();
                }
            });
        }
    };

    return { init };
})();

export default topbar;
