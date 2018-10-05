class Tabs {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.classList = el.classList;
        this.isOpen = el.classList.contains("tabs-open");
        // this.sizeCollapse = this.classList.split(" "); // get size from classname
        this.screenSize;

        window.addEventListener("resize", () => {
            this.onWindowResize();
        });

        document.addEventListener("click", e => {
            if (!e.target.closest(".tabs") && this.isOpen) {
                this.close();
            }
        });
    }

    open () {
        if (!this.isOpen) {
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

    // onWindowResize () {
    //     this.screenSize = window.innerWidth;
    //     console.log(this.screenSize);

    //     switch (true) {
    //         case (this.screenSize < 768):
    //             console.log("case 1");

    //             break;
    //         case (this.screenSize < 992):
    //             console.log("case 2");

    //             break;
    //         case (this.screenSize < 1200):
    //             console.log("case 3");

    //             break;
    //         case (this.screenSize < 1600):
    //             console.log("case 4");

    //             break;
    //         default:
    //             console.log("default case");

    //             break;
    //     }
    // }
}

const tabs = (() => {
    const init = () => {
        const tabsresponsive = [...document.querySelectorAll(".tabs")].map(tabs => new Tabs(tabs));

        [...document.querySelectorAll(".tabs")].forEach(responsive => {
            const listElement = responsive.querySelectorAll("li");
            const id = responsive.id;

            let tabresp;

            tabsresponsive.forEach(t => { t.id === id ? tabresp = t : null; });

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
