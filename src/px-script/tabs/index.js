class Tabs {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.classList = el.classList;
        this.isOpen = el.classList.contains("tabs-open");
        this.hasActive = !!this._el.querySelector(".active");

        document.addEventListener("click", e => {
            if (!e.target.closest(".tabs") && this.isOpen) {
                this.close();
            }
        });

        this._el.addEventListener("click", () => {
            this.flexDir = getComputedStyle(this._el.querySelector("UL")).flexDirection;

            if (!this.isOpen && this.flexDir === "column") {
                this.open();
            } else if (this.isOpen && this.flexDir === "column") {
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

const tabs = (() => {
    const init = () => {
        [...document.querySelectorAll(".tabs")].map(tabs => new Tabs(tabs));
    };

    return { init };
})();

export default tabs;
