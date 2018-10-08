class Tabs {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.classList = el.classList;
        this.isOpen = el.classList.contains("tabs-open");
        this.flexDir;

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
    }

    open () {
        [...this._el.children].forEach(test => {
            if (test.nodeName === "UL") {
                this.flexDir = getComputedStyle(test).flexDirection;
            }
        });

        if (!this.isOpen && this.flexDir === "column") {
            this.isOpen = true;
            this._el.classList.add("tabs-open");
        }
    }

    close () {
        if (this.isOpen) {
            this.isOpen = false;
            this._el.classList.remove("tabs-open");
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
