import { getElementsByIds } from "../utils";

class Tabs {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.classList = el.classList;
        this.isOpen = el.classList.contains("tabs-open");
        this.hasActive = !!this._el.querySelector(".active");
        this.openUl = this._el.querySelector("UL");

        this._el.addEventListener("click", e => {
            this.flexDir = getComputedStyle(this.openUl).flexDirection;

            if (!this.isOpen && this.flexDir === "column") {
                this.open();
            } else if (this.isOpen && this.flexDir === "column" && e.target !== this.openUl) {
                this.close();
            }
        });

        if (!this.hasActive) {
            this._el.querySelector("li").classList.add("active");
        }

        this.addListener();
    }

    addListener () {
        [...this._el.querySelectorAll("li")].forEach(listElem => {
            listElem.addEventListener("click", e => {
                if (listElem.classList.contains("active")) {
                    e.preventDefault();
                }
            });
        });
    }

    open () {
        this.isOpen = true;
        this._el.classList.add("tabs-open");
        window.addEventListener("resize", () => this.close());
    }

    close () {
        this.isOpen = false;
        this._el.classList.remove("tabs-open");
        window.removeEventListener("resize", this.close);
    }
}

const init = ids => {
    const tabsSelector = ids || ids === "" ? getElementsByIds(ids, "tabs") : document.querySelectorAll(".tabs");
    let tabs = [];

    if (tabsSelector.length > 0) {
        tabs = [...tabsSelector].map(tab => new Tabs(tab));

        document.addEventListener("click", e => {
            tabs.forEach(tab => {
                if (!e.target.closest(".tabs") && tab.isOpen) {
                    tab.close();
                }
            });
        });
    }

    return tabs;
};

export default {
    init
};
