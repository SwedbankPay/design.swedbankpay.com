const sidebar = (() => {
    const init = () => {
        [...document.querySelectorAll(".sidebar")].forEach(ulSidebar => {
            const listElem = ulSidebar.querySelectorAll("li");

            if ([...listElem].length > 4) {
                const hamburgerMenu = [...listElem].splice(3);
                const hamburger = document.createElement("li");
                const sidebarMenu = document.createElement("ul");

                hamburger.innerHTML += "<a><i class='material-icons'>menu</i></a>";

                hamburgerMenu.forEach(item => {
                    sidebarMenu.appendChild(item);
                    item.style.display = "none";
                });

                hamburger.appendChild(sidebarMenu);
                ulSidebar.appendChild(hamburger);

                hamburger.addEventListener("click", () => {
                    [...hamburger.querySelectorAll("li")].forEach(listElem => {
                        listElem.style.display = "block";
                    });
                });
            }
        });
    };

    return { init };
})();

export default sidebar;
