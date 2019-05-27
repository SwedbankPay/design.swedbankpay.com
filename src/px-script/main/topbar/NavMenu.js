import { isWithinBoundingBox } from "../utils";

const SELECTORS = {
    BTN: ".topbar-btn",
    ICON: ".topbar-btn-icon"
};

export default class NavMenu {
    constructor (topbarComponent, navMenu) {
        this.id = topbarComponent.id;
        this.navMenuElement = navMenu;
        this.isOpen = false;
        this.btnElement = topbarComponent.querySelector(SELECTORS.BTN);
        this.iconElement = this.btnElement ? this.btnElement.querySelector(SELECTORS.ICON) : null;
        this.userIcon = this.iconElement ? this.iconElement.innerHTML : null;

        if (this.btnElement) {
            this.btnElement.addEventListener("click", e => {
                e.preventDefault();
                this._handleClick();
            });
        }

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

    _handleClick () {
        this.isOpen ? this.close() : this.open();
    }

    _containsPoint (x, y) {
        return isWithinBoundingBox(x, y, this.navMenuElement) || isWithinBoundingBox(x, y, this.btnElement);
    }
}
