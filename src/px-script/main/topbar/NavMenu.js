import { isWithinBoundingBox, handleScrollbar } from "../utils";

export default class NavMenu {
    constructor (topbarComponent) {
        this.topbar = topbarComponent;
        this.topbarNav = this.topbar.querySelector(".topbar-nav");
        this.linkContainer = this.topbarNav.querySelector(".topbar-link-container");
        this.btnElement = this.topbar.querySelector(".topbar-menu-button");
        this.closeNavIcon = this.topbar.querySelector(".close-topbar-nav");
        this.isOpen = false;
        this._initAnchors();

        try {
            this.btnElement.addEventListener("click", e => {
                e.preventDefault();
                this.handleClick();
            });
        } catch (e) {
            console.error("Topbar is missing a menu button");
        }

        try {
            this.closeNavIcon.addEventListener("click", () => {
                this.close();
            });
        } catch (e) {
            console.error("Topbar is missing a close icon");
        }
    }

    _initAnchors () {
        // Closing menu for clicking on links in SPA's.
        this.topbarNav.querySelectorAll("a")
            .forEach(anchor => anchor.addEventListener("click", () => this.isOpen ? this.close() : null));
    }

    open () {
        handleScrollbar();
        this.topbarNav.classList.add("d-block");
        setTimeout(() => {
            this.topbarNav.classList.add("topbar-nav-open");
        }, 10);
        this.isOpen = true;
    }

    close () {
        handleScrollbar();
        this.topbarNav.classList.remove("topbar-nav-open");
        this.isOpen = false;
        setTimeout(() => {
            this.topbarNav.classList.remove("d-block");
        }, 300);
    }

    handleClick () {
        this.isOpen ? this.close() : this.open();
    }

    containsPoint (x, y) {
        return isWithinBoundingBox(x, y, this.linkContainer);
    }
}
