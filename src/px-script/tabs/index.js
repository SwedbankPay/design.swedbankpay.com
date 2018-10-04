class Tabs {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.isOpen = el.parentElement.classList.contains("tabs-open");

        document.addEventListener("click", e => {
            if (!e.target.closest(".tabs") && this.isOpen) {
                this.close();
            }
        });
    }

    open () {
        if (!this.isOpen) {
            this.isOpen = true;
            this._el.parentElement.classList.add("tabs-open");
        }
    }

    close () {
        if (this.isOpen) {
            this.isOpen = false;
            this._el.parentElement.classList.remove("tabs-open");
        }
    }

}

const tabs = (() => {
    const init = () => {
        const tabsresponsive = [...document.querySelectorAll(".tabs-responsive")].map(tabs => new Tabs(tabs));

        [...document.querySelectorAll(".tabs-responsive")].forEach(responsive => {
            const listElement = responsive.querySelectorAll("li");
            const id = responsive.id;

            let tabresp;

            tabsresponsive.forEach(t => t.id === id ? tabresp = t : null);

            [...listElement].forEach(anchor => {
                anchor.addEventListener("click", e => {
                    e.preventDefault();

                    if (!tabresp.isOpen) {
                        tabresp.open();
                    } else {
                        tabresp.close();
                    }
                });
            });
        });
    };

    return { init };
})();

export default tabs;
