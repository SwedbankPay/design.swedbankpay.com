import NavMenu from "./NavMenu";

const topbar = (() => {
    const init = index => {
        const topbarComponent = document.querySelectorAll(".topbar")[index || 0];
        let navMenu;

        if (topbarComponent) {
            navMenu = topbarComponent.querySelector(".topbar-nav");

            if (navMenu) {
                navMenu = new NavMenu(topbarComponent);

                document.querySelector("html").addEventListener("mousedown", e => {
                    if (navMenu.isOpen && !navMenu.containsPoint(e.clientX, e.clientY)) {
                        navMenu.close();
                    }
                });

                // Close sheet on esc
                document.addEventListener("keydown", e => {
                    if (e.key === "Escape" && navMenu.isOpen) {
                        navMenu.close();
                    }
                });
            }
        }
    };

    return { init };
})();

export default topbar;
