const defaultIcon = "&#xE5D2;";
const closeIcon = "&#xE5CD;";

export default class NavMenu {
    constructor (menu, btnElement) {
        this.isOpen = false;
        this.btnElement = btnElement;
        this.navMenuElement = _initNav(menu, btnElement);
        this.iconElement = btnElement.querySelector(".topbar-btn-icon");
        this.userIcon = this.iconElement.innerHTML || defaultIcon;
        this.slideContainers = this.navMenuElement.querySelectorAll(".topbar-nav-slide");
        this.slideHistory = [];

        this.btnElement.addEventListener("click", e => {
            e.preventDefault();
            this.handleClick();
        });
    }

    open () {
        this.navMenuElement.classList.add("in");
        this.isOpen = true;
        this.iconElement.innerHTML = closeIcon;
    }

    close () {
        this.navMenuElement.classList.remove("in");
        this.isOpen = false;
        this.iconElement.innerHTML = this.userIcon;
        this.reset();
    }

    reset () {
        this.slideContainers.forEach(slide => {
            slide.classList.remove("active", "inactive");
        });

        this.navMenuElement.firstChild.classList.add("active");
        this.slideHistory = [];
    }

    containsPoint (x, y) {
        return _isWithinBoundingBox(x, y, this.navMenuElement) || _isWithinBoundingBox(x, y, this.btnElement);
    }

    handleClick () {
        this.isOpen ? this.close() : this.open();
    }
}

const _initNav = (menu, btn) => {
    const navMenu = document.querySelector(btn.dataset.toggleNav);
    navMenu.firstChild.classList.add("active");
    _initSlideLinks(navMenu);
    return navMenu;
};

const _initSlideLinks = navMenu => {
    const slideLinks = navMenu.querySelectorAll("[data-target]");

    slideLinks.forEach(link => {
        const targetSlide = document.getElementById(link.dataset.target);
        const parent = link.closest(".topbar-nav-slide");

        link.addEventListener("click", e => {
            e.preventDefault();
            targetSlide.classList.add("active");
            parent.classList.remove("active");
            parent.classList.add("inactive");
        });
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
