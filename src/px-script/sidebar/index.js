class Sidebar {
    constructor (el) {
        this._el = el;
        this.isExp = el.classList.contains("sidebar-expanded");
        this.containsChild = [];

        document.addEventListener("click", e => {
            if (!e.target.closest(".sidebar") && this.isExp) {
                this.close();
                this.hideItems();
            }
        });

        [...this._el.querySelectorAll("li")].map(noChild => {
            if (noChild.querySelector("UL") !== null) {
                this.containsChild.push(noChild);
            }
        });

        console.log(this.containsChild);

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
        [...this._el.querySelectorAll("li")].map(listItem => {
            if (listItem.classList.contains("itemInvis")) {
                listItem.classList.remove("itemInvis");
            }
        });
    }

    hideItems () {
        const noLevelTwoList = [];
        const firstFour = [];

        [...this._el.querySelectorAll("li")].map(noChild => {
            if (noChild.querySelector("UL") !== null) {
                noLevelTwoList.push(noChild);
            }
        });

        if (noLevelTwoList.length > 0) {
            noLevelTwoList.map(levelTwo => {
                levelTwo.classList.add("itemInvis");
            });

            [...this._el.querySelectorAll("li")].map(noInvis => {
                if (!noInvis.classList.contains("itemInvis") && noInvis.querySelector("UL") === null && this._el.querySelector("UL") === noInvis.parentElement) {
                    firstFour.push(noInvis);
                }
            });

            if (firstFour.length > 4) {
                firstFour.slice(4).map(item => {
                    item.classList.add("itemInvis");
                });
            }
        } else {
            [...this._el.querySelectorAll("li")].slice(4).map(items => {
                items.classList.add("itemInvis");
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
    }
}

const sidebar = (() => {
    const init = () => {
        [...document.querySelectorAll(".sidebar")].map(sidebars => new Sidebar(sidebars));
    };

    return { init };
})();

export default sidebar;
