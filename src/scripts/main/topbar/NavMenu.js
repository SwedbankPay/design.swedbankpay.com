import { isWithinBoundingBox, handleScrollbar } from "../utils";

const SELECTORS = {
    BTN: ".topbar-btn",
    ICON: ".topbar-btn-icon",
    OPEN: "topbar-nav-open"
};

const FOCUSELEMENTS = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex=\"0\"], [contenteditable]";

export default class NavMenu {
    constructor (topbarComponent, navMenu) {
        this._openHandler = this._openHandler.bind(this);
        this._closeHandler = this._closeHandler.bind(this);
        this._closeHandlerNavMenuElement = this._closeHandlerNavMenuElement.bind(this);
        this.close = this.close.bind(this);

        this.constructNavMenu(topbarComponent, navMenu);
    }

    constructNavMenu (topbarComponent, navMenu) {

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
        this._setFirstTabStop(0);
        this.lastTabStop = this.focusableElements[this.focusableElements.length - 1];

        if (this.btnElement) {
            this.btnElement.addEventListener("click", this._openHandler);
        }

        if (this.navMenuElement) {
            this.navMenuElement.addEventListener("mousedown", this._closeHandlerNavMenuElement);

            try {
                this.closeNavIcon.addEventListener("click", this._closeHandler);
            } catch (e) {
                console.warn("Topbar is missing a close icon");
            }
        }

        this._initListeners();
    }

    _openHandler (e) {
        e.preventDefault();
        this.open();
    }

    _closeHandler () {
        if (this.isOpen) {
            this.close();
        }
    }

    _closeHandlerNavMenuElement (e) {
        if (this.isOpen && !this._containsPoint(e.clientX, e.clientY)) {
            this.close();
        }
    }

    _initListeners () {

        // Closing menu for clicking on links in SPA's.
        this.navMenuElement.querySelectorAll("a")
            .forEach(anchor => anchor.addEventListener("click", this._closeHandler));
    }

    _resizeListener () { this.isOpen ? this._closeNoTransition() : null; }

    _closeNoTransition () {
        handleScrollbar();
        this.isOpen = false;

        this.focusedElementBeforeNav ? this.focusedElemBeforeNav.focus() : null;

        window.removeEventListener("resize", this.resizeEvent, { passive: true });
        this.navMenuElement.classList.remove("topbar-nav-open");
        this.navMenuElement.classList.remove("d-block");
        this.btnElement.classList.remove("d-none");
        this.closeNavIcon.classList.remove("d-flex");
    }

    _setFirstTabStop (index) {
        this.firstTabStop = this.focusableElements[index];
    }

    open () {
        handleScrollbar();
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
        handleScrollbar();
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

        this._setFirstTabStop(0);
    }

    _containsPoint (x, y) {
        return isWithinBoundingBox(x, y, this.linkContainer);
    }
}
