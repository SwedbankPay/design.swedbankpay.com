import NavMenu from "./NavMenu";

const topbar = (() => {
    const init = index => {
        const menu = document.querySelectorAll(".topbar")[index || 0];
        let leftNavMenu;

        if (menu) {
            const menuBtnElement = menu.querySelector(".topbar-btn");

            if (menuBtnElement && menuBtnElement.querySelector("i").innerHTML === "menu") {
                leftNavMenu = new NavMenu(menuBtnElement);
            }

            document.querySelector("html").addEventListener("mousedown", e => {
                if (leftNavMenu && leftNavMenu.isOpen && !leftNavMenu.containsPoint(e.clientX, e.clientY)) {
                    leftNavMenu.close();
                }
            });
        }
    };

    return { init };
})();

export default topbar;
