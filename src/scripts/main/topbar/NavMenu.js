import { isWithinBoundingBox } from "../utils";

const SELECTORS = {
    BTN: ".topbar-btn",
    ICON: ".topbar-btn-icon",
    OPEN: "topbar-nav-open"
};

const FOCUSELEMENTS = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex=\"0\"], [contenteditable]";

export default class NavMenu {
    constructor (topbarComponent, navMenu) {
        this.id = topbarComponent.id;
        this.isOpen = navMenu.classList.contains(SELECTORS.OPEN);
        this.navMenuElement = navMenu;
        this.linkContainer = this.navMenuElement.querySelector(".topbar-link-container");
        this.closeNavIcon = topbarComponent.querySelector(".topbar-close");
        this.btnElement = topbarComponent.querySelector(SELECTORS.BTN);
        this.resizeEvent;

        /*
        NOTE: Firefox for mac emulates the system default for tab behaviour. Therefore tabbing does not work as intended for firefox on mac.
        Read more here: https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox#answer-11713537 [AW].
        */
        // Find focusable elements
        this.focusedElemBeforeNav = null;
        this.focusableElements = [...this.linkContainer.querySelectorAll(FOCUSELEMENTS)];
        this._setFirstTabStop(1); // Initially set to 1 to ignore close button during tabbing, when topbar-nav is not open
        this.lastTabStop = this.focusableElements[this.focusableElements.length - 1];

        this._btnElementOpenHandler = this._btnElementOpenHandler.bind(this);

        if (this.btnElement) {
            this.btnElement.addEventListener("click", this._btnElementOpenHandler);
        }

        if (this.navMenuElement) {
            this.navMenuElement.addEventListener("mousedown", e => {
                if (this.isOpen && !this._containsPoint(e.clientX, e.clientY)) { this.close(); }
            });

            try {
                this.closeNavIcon.addEventListener("click", () => {
                    this.close();
                });
            } catch (e) {
                console.warn("Topbar is missing a close icon");
            }
        }

        this._initListeners();
    }

    _btnElementOpenHandler (e) {
        e.preventDefault();
        this.open();
    }

    _initListeners () {
        this.navMenuElement.addEventListener("keydown", e => {
            if (e.key === "Tab") {
                // SHIFT + TAB
                if (e.shiftKey) {
                    if (document.activeElement === this.firstTabStop) {
                        e.preventDefault();
                        this.lastTabStop.focus();
                    }

                // TAB
                } else if (document.activeElement === this.lastTabStop) {
                    e.preventDefault();
                    this.firstTabStop.focus();
                }
            }
        });

        // Closing menu for clicking on links in SPA's.
        this.navMenuElement.querySelectorAll("a")
            .forEach(anchor => anchor.addEventListener("click", () => {
                if (this.isOpen) {
                    this.close();
                }
            }));
    }

    _resizeListener () { this.isOpen ? this._closeNoTransition() : null; }

    _closeNoTransition () {
        this.isOpen = false;

        this.focusedElementBeforeNav ? this.focusedElemBeforeNav.focus() : null;

        window.removeEventListener("resize", this.resizeEvent, { passive: true });
        this.navMenuElement.classList.remove("topbar-nav-open");
        this.navMenuElement.classList.remove("d-block");
    }

    _setFirstTabStop (index) {
        this.firstTabStop = this.focusableElements[index];
    }

    open () {
        this.isOpen = true;

        this.focusedElemBeforeNav = document.activeElement;

        this.resizeEvent = this._resizeListener.bind(this);
        window.addEventListener("resize", this.resizeEvent, { passive: true });
        this.navMenuElement.classList.add("topbar-nav-open");
        this.navMenuElement.classList.add("d-block");
        this.btnElement.classList.add("d-none");
        this.closeNavIcon.classList.add("d-flex");

        this._setFirstTabStop(0);
        this.firstTabStop.focus();
    }

    close () {
        this.isOpen = false;

        window.removeEventListener("resize", this.resizeEvent, { passive: true });
        this.navMenuElement.classList.remove("topbar-nav-open");
        this.navMenuElement.classList.add("topbar-nav-closing");
        setTimeout(() => {
            this.focusedElementBeforeNav ? this.focusedElemBeforeNav.focus() : null;

            this.navMenuElement.classList.remove("topbar-nav-closing");
            this.navMenuElement.classList.remove("d-block");
            this.btnElement.classList.remove("d-none");
            this.closeNavIcon.classList.remove("d-flex");
        }, 300);

        this._setFirstTabStop(1);
    }

    _containsPoint (x, y) {
        return isWithinBoundingBox(x, y, this.linkContainer);
    }
}
