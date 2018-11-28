import { isWithinBoundingBox } from "../utils";

export default class NavMenu {
    constructor (topbarComponent, navMenu) {
        this.navMenuElement = navMenu;
        this.isOpen = false;
        this.btnElement = topbarComponent.querySelector(".topbar-btn");
        this.iconElement = this.btnElement.querySelector(".topbar-btn-icon");
        this.userIcon = this.iconElement ? this.iconElement.innerHTML : null;

        this.btnElement.addEventListener("click", e => {
            e.preventDefault();
            this.handleClick();
        });
        this._initAnchors();
    }

    _initAnchors () {
        // Closing menu for clicking on links in SPA's.
        this.navMenuElement.querySelectorAll("a")
            .forEach(anchor => anchor.addEventListener("click", () => this.close()));
    }

    open () {
        this.navMenuElement.classList.add("in");
        this.isOpen = true;

        if (this.iconElement) {
            this.iconElement.innerHTML = "close";
        }
    }

    close () {
        this.navMenuElement.classList.remove("in");
        this.isOpen = false;

        if (this.iconElement) {
            this.iconElement.innerHTML = this.userIcon;
        }
    }

    handleClick () {
        this.isOpen ? this.close() : this.open();
    }

    containsPoint (x, y) {
        return isWithinBoundingBox(x, y, this.navMenuElement) || isWithinBoundingBox(x, y, this.btnElement);
    }
}
