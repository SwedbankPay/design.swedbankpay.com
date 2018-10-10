const sidebar = (() => {
    const init = () => {
        [...document.querySelectorAll(".sidebar")].forEach(navSidebar => {
            const listElem = navSidebar.querySelectorAll("li");

            if ([...listElem].length > 4) {
                const menu = document.createElement("a");
                const hiddenItems = [...listElem].slice(4);

                menu.classList.add("hamburger");
                menu.innerHTML += "<i class='material-icons'>menu</i>";

                hiddenItems.forEach(item => {
                    item.classList.add("itemInvis");
                });

                navSidebar.appendChild(menu);

                menu.addEventListener("click", () => {
                    if (navSidebar.classList.contains("sidebar-vertical")) {
                        navSidebar.classList.remove("sidebar-vertical");

                        hiddenItems.forEach(item => {
                            item.classList.add("itemInvis");
                        });
                    } else {
                        navSidebar.classList.add("sidebar-vertical");

                        hiddenItems.forEach(item => {
                            item.classList.remove("itemInvis");
                        });
                    }
                });
            }
        });
    };

    return { init };
})();

export default sidebar;
