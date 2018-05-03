import NavMenu from "./nav-menu";

const topbar = (() => {

    const init = () => {
        const menu = document.querySelectorAll(".topbar")[1];

        let leftNavMenu,
            rightNavMenu;

        if (menu) {
            const leftMenuBtnElement = menu.querySelector(".topbar-btn-left");
            const rightMenuBtnElement = menu.querySelector(".topbar-btn-right");

            if (leftMenuBtnElement) {
                leftNavMenu = new NavMenu(menu, leftMenuBtnElement);
            }

            if (rightMenuBtnElement) {
                rightNavMenu = new NavMenu(menu, rightMenuBtnElement);
            }
        }

        window.onload = () => {
            document.querySelector("html").addEventListener("mousedown", event => {
                const itemContainers = document.body.querySelectorAll(".topbar-nav-items-container");
                const x = event.clientX;
                const y = event.clientY;

                if (leftNavMenu && leftNavMenu.isOpen && !leftNavMenu.containsPoint(x, y)) {
                    leftNavMenu.close();
                }

                if (rightNavMenu && rightNavMenu.isOpen && !rightNavMenu.containsPoint(x, y)) {
                    rightNavMenu.close();
                }

                if ((leftNavMenu && !leftNavMenu.containsPoint(x, y)) || (rightNavMenu && !rightNavMenu.containsPoint(x, y))) {
                    itemContainers.forEach(container => {
                        container.classList.remove("active", "inactive");
                    });
                }

            });
        };
    };

    return { init: init };
})();

export default topbar;
