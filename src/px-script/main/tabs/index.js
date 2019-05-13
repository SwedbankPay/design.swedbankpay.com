const SELECTORS = {
    TABS: ".tabs",
    ACTIVE: ".active"
};

const _tabs = _tabs || [];

class Tabs {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.classList = el.classList;
        this.isOpen = el.classList.contains("tabs-open");
        this.hasActive = !!this._el.querySelector(SELECTORS.ACTIVE);
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

        this._addListener();
    }

    _addListener () {
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

const _createTab = tabQuery => {
    const tabObject = new Tabs(tabQuery);

    _tabs.push(tabObject);

    return tabObject;
};

const init = id => {
    document.addEventListener("click", e => {
        _tabs.forEach(tab => {
            if (!e.target.closest(SELECTORS.TABS) && tab.isOpen) {
                tab.close();
            }
        });
    });

    if (id) {
        const tab = document.getElementById(id);

        if (!tab) {
            console.warn("doesn't exist");

            return null;
        }

        return _createTab(tab);
    } else {
        const tabs = document.querySelectorAll(SELECTORS.TABS);

        if (!tabs.length) {
            console.warn("doesn't exist");

            return null;
        }

        return [...tabs].map(tab => _createTab(tab));
    }
};

const open = id => {
    let tabs = null;

    _tabs.forEach(t => t.id === id ? tabs = t : null);

    try {
        tabs.open();
    } catch (e) {
        console.error(`tabs.open: No tabs with id "${id}" found.`);

        return false;
    }

    return tabs;

};

const close = id => {
    let tabs = null;

    _tabs.forEach(t => t.id === id ? tabs = t : null);

    try {
        tabs.close();
    } catch (e) {
        console.error(`tabs.close: No tabs with id "${id}" found.`);

        return false;
    }

    return tabs;

};

export default {
    init,
    open,
    close
};
