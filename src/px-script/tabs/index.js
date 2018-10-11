class Tabs {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.classList = el.classList;
        this.isOpen = el.classList.contains("tabs-open");
        this.flexDir;
        this.hasActive = this._el.querySelector(".active");

        document.addEventListener("click", e => {
            if (!e.target.closest(".tabs") && this.isOpen) {
                this.close();
            }
        });

        [...this._el.children].forEach(elem => {
            elem.addEventListener("click", e => {
                e.preventDefault();

                if (!this.isOpen) {
                    this.open();
                } else {
                    this.close();
                }
            });
        });

        if (this.hasActive) {
            [...this._el.querySelectorAll("li")].map(listElem => {
                listElem.addEventListener("click", e => {
                    e.preventDefault();

                    if (!listElem.classList.contains("active")) {
                        this._el.querySelector(".active").classList.remove("active");
                        listElem.classList.add("active");
                    }
                });
            });
        } else {
            this._el.querySelector("li").classList.add("active");

            this.addListener();
        }
    }

    addListener () {
        [...this._el.querySelectorAll("li")].map(listElem => {
            listElem.addEventListener("click", e => {
                e.preventDefault();

                if (!listElem.classList.contains("active")) {
                    this._el.querySelector(".active").classList.remove("active");
                    listElem.classList.add("active");
                }
            });
        });
    }

    open () {
        [...this._el.children].forEach(tabsUl => {
            if (tabsUl.nodeName === "UL") {
                this.flexDir = getComputedStyle(tabsUl).flexDirection;
            }
        });

        if (!this.isOpen && this.flexDir === "column") {
            this.isOpen = true;
            this._el.classList.add("tabs-open");
            window.addEventListener("resize", () => this.close());
        }
    }

    close () {
        if (this.isOpen) {
            this.isOpen = false;
            this._el.classList.remove("tabs-open");
            window.removeEventListener("resize", this.close);
        }
    }
}

const tabs = (() => {
    const init = () => {
        [...document.querySelectorAll(".tabs")].map(tabs => new Tabs(tabs));
    };

    return { init };
})();

export default tabs;
