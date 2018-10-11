class Tabs {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.classList = el.classList;
        this.isOpen = el.classList.contains("tabs-open");
        this.flexDir = getComputedStyle(el.querySelector("UL")).flexDirection;
        this.hasActive = !!this._el.querySelector(".active");

        document.addEventListener("click", e => {
            if (!e.target.closest(".tabs") && this.isOpen) {
                this.close();
            }
        });

        this._el.addEventListener("click", e => {
            e.preventDefault();
            this.flexDir = getComputedStyle(this._el.querySelector("UL")).flexDirection;

            if (!this.isOpen && this.flexDir === "column") {
                this.open();
            } else {
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
            listElem.addEventListener("click", () => {
                if (!listElem.classList.contains("active")) {
                    this._el.querySelector(".active").classList.remove("active");
                    listElem.classList.add("active");
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
