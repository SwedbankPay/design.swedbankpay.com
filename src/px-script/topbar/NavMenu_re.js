const icons = {
    default: "menu", // "&#xE5D2;"
    close: "close", // "&#xE5CD;"
    back: "arrow_back", // "&#xE5C4;"
    forward: "arrow_forward" // "&#xe5c8;"
};

export default class NavMenu {
    constructor (btnElement) {
        this.isOpen = false;
        this.btnElement = btnElement;
        this.iconElement = btnElement.querySelector(".topbar-btn-icon");
        this.userIcon = this.iconElement.innerHTML || icons.default;
        this.navMenuElement = this._initNav(btnElement.dataset.toggleNav);

        btnElement.addEventListener("click", e => {
            e.preventDefault();
            this.handleClick();
        });
    }

    _initNav (selector) {
        const navMenu = document.querySelector(selector);
        navMenu.querySelector(".topbar-nav-slide").classList.add("active");
        return navMenu;
    }

    open () {
        this.navMenuElement.classList.add("in");
        this.isOpen = true;
        this.iconElement.innerHTML = icons.close;
    }

    close () {
        this.navMenuElement.classList.remove("in");
        this.isOpen = false;
        this.iconElement.innerHTML = this.userIcon;
        // this.reset();
    }

    handleClick () {
        this.isOpen ? this.close() : this.open();
    }

    containsPoint (x, y) {
        return _isWithinBoundingBox(x, y, this.navMenuElement) || _isWithinBoundingBox(x, y, this.btnElement);
    }
}

const _isWithinBoundingBox = (x, y, element) => {
    const rect = element.getBoundingClientRect();
    const xMin = rect.left;
    const xMax = rect.right;
    const yMin = rect.top;
    const yMax = rect.bottom;

    return ((xMin < x) && (xMax > x)) && ((yMin < y) && (yMax > y));
};
