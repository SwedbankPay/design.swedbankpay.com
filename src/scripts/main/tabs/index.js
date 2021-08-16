const SELECTORS = {
    TABS: ".tabs",
    ACTIVE: ".active"
};

const _tabs = [];

class Tabs {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.classList = el.classList;
        this.hasActive = !!this._el.querySelector(SELECTORS.ACTIVE);
        this.openUl = this._el.querySelector("UL");

        this._el.addEventListener("click", e => {

            // Only move scrollbar when interacting with the tab elements
            if (e.target.tagName === "A") {
                const scrollStart = this.openUl.scrollLeft;
                const scrollTotalAmount = (e.target.offsetLeft - (this._el.offsetWidth / 2) + (e.target.offsetWidth / 2)) - scrollStart;

                this.scrollTabs(scrollStart, scrollTotalAmount);
            }
        });

        // Add listeners in cases when the tabs is scrollable. Listeners are to decide if the tabs fades should be shown.
        if (this._el.classList.contains("tabs-scroll")) {
            this._decideScrollFade = this._decideScrollFade.bind(this);
            this.openUl.addEventListener("scroll", this._decideScrollFade);
            window.addEventListener("resize", this._decideScrollFade, { passive: true });
            this._decideScrollFade();
        }

        if (!this.hasActive) {
            this._el.querySelector("li").classList.add("active");
        }

        this._addListener();
    }

    scrollTabs (scrollStart, scrollTotalAmount) {
        this.openUl.scrollLeft = scrollStart;

        let scrolledCount = 0;
        const smoothTabScroll = setInterval(() => {
            this.openUl.scrollLeft += scrollTotalAmount / 10;
            scrolledCount = scrolledCount + 1;
            (scrolledCount === 10) && window.clearInterval(smoothTabScroll);
        }, 5);
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

    _decideScrollFade () {

        if (this.openUl.scrollLeft > 1) {
            this._el.classList.add("tabs-fade-left");
        } else {
            this._el.classList.remove("tabs-fade-left");
        }

        if (this.openUl.scrollWidth - this.openUl.scrollLeft - this.openUl.clientWidth > 1) {
            this._el.classList.add("tabs-fade-right");
        } else {
            this._el.classList.remove("tabs-fade-right");
        }
    }
}

const _createTab = tabQuery => {
    const tabObject = new Tabs(tabQuery);

    _tabs.push(tabObject);

    return tabObject;
};

const init = id => {
    if (id) {
        const tab = document.getElementById(id);

        if (!tab) {
            console.warn(`No tab with id ${id} found`);

            return null;
        }

        return _createTab(tab);
    } else {
        const tabs = document.querySelectorAll(SELECTORS.TABS);

        if (!tabs.length) {
            console.warn("No tabs found");

            return null;
        }

        return [...tabs].map(tab => _createTab(tab));
    }
};

const setScrollState = (id, scrollState) => {

    let tab = null;

    _tabs.forEach(t => t.id === id && (tab = t));

    try {
        tab.scrollTabs(scrollState.scrollStart, scrollState.scrollTotalAmount);
    } catch (e) {
        console.warn(`tabs.setScrollState: No tabs with id ${id} found.`);

        return false;
    }

    return tab;
};

export default {
    init,
    setScrollState
};
