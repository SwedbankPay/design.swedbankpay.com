class Sidebar {
    constructor (el) {
        this._el = el;
        this.isExp = el.classList.contains("sidebar-expanded");
        this.containsChild = [...this._el.querySelectorAll("li")].filter(hasChild => hasChild.querySelector("ul"));

        document.addEventListener("click", e => {
            if (!e.target.closest(".sidebar") && this.isExp) {
                this.close();
                this.hideItems();
            }
        });

        if ([...this._el.querySelectorAll("li")].length > 4 || this.containsChild.length > 0) {
            const menu = document.createElement("a");

            this.hideItems();

            menu.classList.add("hamburger"); // Temporary name [AW]
            menu.innerHTML += "<i class='material-icons'>menu</i>";

            this._el.appendChild(menu);

            menu.querySelector("i").addEventListener("click", () => {
                if (this.isExp) {
                    this.close();
                    this.hideItems();
                } else {
                    this.open();
                    this.showItems();
                }
            });
        }
    }

    showItems () {
        [...this._el.querySelectorAll("li")].forEach(listItem => {
            if (listItem.classList.contains("itemInvis")) {
                listItem.classList.remove("itemInvis");
            }
        });
    }

    hideItems () {
        const firstFour = [...this._el.querySelectorAll("li")].filter(noInvis => !noInvis.classList.contains("itemInvis") && noInvis.querySelector("UL") === null && this._el.querySelector("UL") === noInvis.parentElement);
        const hasTwoLevels = this._el.querySelectorAll(".submenu");

        if (hasTwoLevels) {
            hasTwoLevels.forEach(levelTwo => {
                levelTwo.parentElement.classList.add("itemInvis");
            });

            if (firstFour.length > 4) {
                firstFour.slice(4).forEach(item => {
                    item.parentElement.classList.add("itemInvis");
                });
            }
        } else {
            [...this._el.querySelectorAll("li")].slice(4).forEach(items => {
                items.parentElement.classList.add("itemInvis");
            });
        }
    }

    open () {
        this.isExp = true;
        this._el.classList.add("sidebar-expand");
        window.addEventListener("resize", () => {
            this.close();
            this.hideItems();
        });
    }

    close () {
        this.isExp = false;
        this._el.classList.remove("sidebar-expand");
        window.removeEventListener("resize", this.close);
        window.removeEventListener("resize", this.hideItems);
    }
}

const sidebar = (() => {
    const init = () => {
        [...document.querySelectorAll(".sidebar")].map(sidebars => new Sidebar(sidebars));
    };

    return { init };
})();

export default sidebar;
