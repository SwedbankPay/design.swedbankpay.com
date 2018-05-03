import NavHierarchy from "./nav-hierarchy";

const defaultIcon = "&#xE5D2;";
const closeIcon = "&#xE5CD;";

export default class NavMenu {
    constructor (menu, btnElement) {
        this.isOpen = false;
        this.btnElement = btnElement;
        this.navMenuElement = _findNav(menu, btnElement);
        this.iconElement = btnElement.querySelector(".topbar-btn-icon");
        this.userIcon = this.iconElement.innerHTML;
        this.hierarchy = new NavHierarchy(this.navMenuElement);

        _attachEventListener(this.btnElement, this.handleClick.bind(this));
    }

    open () {
        if (!this.navMenuElement.classList.contains("in")) {
            this.navMenuElement.classList.add("in");
            this.isOpen = true;
            this.iconElement.innerHTML = closeIcon;
        }
    }

    close () {
        if (this.navMenuElement.classList.contains("in")) {
            this.navMenuElement.classList.remove("in");
            this.isOpen = false;
            this.iconElement.innerHTML = this.userIcon ? this.userIcon : defaultIcon;
            this.hierarchy.breadcrumbs.reset();
        }
    }

    containsPoint (x, y) {
        return _isWithinBoundingBox(x, y, this.navMenuElement) || _isWithinBoundingBox(x, y, this.btnElement);
    }

    handleClick () {
        (this.isOpen) ? this.close() : this.open();
    }
}

// PRIVATE METHODS
const _findNav = (menu, btn) => {
    const element = menu.querySelector(btn.dataset.toggleNav);
    console.log(btn.dataset.toggleNav);

    // TODO: This is stupid [EH]
    // element.style.top = `${menu.offsetTop + menu.offsetHeight}px`;

    return element;
};

const _attachEventListener = (element, fn) => {
    element.addEventListener("click", e => {
        e.preventDefault();
        fn(e);
    });
};

const _isWithinBoundingBox = (x, y, element) => {
    const rect = element.getBoundingClientRect();
    const xMin = rect.left;
    const xMax = rect.right;
    const yMin = rect.top;
    const yMax = rect.bottom;

    return ((xMin < x) && (xMax > x)) && ((yMin < y) && (yMax > y));
};
