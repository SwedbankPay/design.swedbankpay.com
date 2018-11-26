import { isWithinBoundingBox } from "../utils";

const icons = {
    default: "menu", // "&#xE5D2;"
    close: "close" // "&#xE5CD;"
};

export default class NavMenu {
    constructor (btnElement) {
        this.navMenuElement = document.querySelector(btnElement.dataset.toggleNav);
        this.isOpen = false;
        this.btnElement = btnElement;
        this.iconElement = btnElement.querySelector(".topbar-btn-icon");
        this.userIcon = this.iconElement ? this.iconElement.innerHTML : icons.default;

        if (this.navMenuElement) {
            btnElement.addEventListener("click", e => {
                e.preventDefault();
                this.handleClick();
            });
            this._initAnchors();
        }
    }

    _initAnchors () {
        // Closing menu for clicking on links in SPA's.
        this.navMenuElement.querySelectorAll("a")
            .forEach(anchor => anchor.addEventListener("click", () => this.close()));
    }

    open () {
        if (!this.isOpen) {
            this.navMenuElement.classList.add("in");
            this.isOpen = true;

            if (this.iconElement) {
                this.iconElement.innerHTML = icons.close;
            }
        }
    }

    close () {
        if (this.isOpen) {
            this.navMenuElement.classList.remove("in");
            this.isOpen = false;

            if (this.iconElement) {
                this.iconElement.innerHTML = this.userIcon;
            }
        }
    }

    handleClick () {
        this.isOpen ? this.close() : this.open();
    }

    containsPoint (x, y) {
        return isWithinBoundingBox(x, y, this.navMenuElement) || isWithinBoundingBox(x, y, this.btnElement);
    }
}
