class Sidebar {
    constructor (el) {
        this.element = el;
        this.isExp = el.classList.contains("sidebar-expanded");

        document.addEventListener("click", e => {
            if (!e.target.closest(".sidebar") && this.isExp) {
                this.close();
            }
        });

        if ([...this.element.querySelectorAll("li")].length > 4) {
            const menu = document.createElement("a");
            const hiddenItems = [...this.element.querySelectorAll("li")].slice(4);

            menu.classList.add("hamburger");
            menu.innerHTML += "<i class='material-icons'>menu</i>";

            hiddenItems.forEach(item => {
                item.classList.add("itemInvis");
            });

            this.element.appendChild(menu);

            menu.addEventListener("click", () => {
                if (this.isExp) {
                    this.close();

                    hiddenItems.forEach(item => {
                        item.classList.add("itemInvis");
                    });
                } else {
                    this.open();

                    hiddenItems.forEach(item => {
                        item.classList.remove("itemInvis");
                    });
                }
            });
        }
    }

    open () {
        this.isExp = true;
        this.element.classList.add("sidebar-expand");
        window.addEventListener("resize", () => this.close());
    }

    close () {
        this.isExp = false;
        this.element.classList.remove("sidebar-expand");
        window.removeEventListener("resize", this.close);
    }
}

const sidebar = (() => {
    const init = () => {
        [...document.querySelectorAll(".sidebar")].map(sidebars => new Sidebar(sidebars));
    };

    return { init };
})();

export default sidebar;
