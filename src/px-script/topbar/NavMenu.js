const defaultIcon = "&#xE5D2;";
const closeIcon = "&#xE5CD;";

export default class NavMenu {
    constructor (menu, btnElement) {
        this.isOpen = false;
        this.backBtn = false;
        this.headerText = "";
        this.btnElement = btnElement;
        this.navMenuElement = this._initNav(menu);
        this.iconElement = btnElement.querySelector(".topbar-btn-icon");
        this.userIcon = this.iconElement.innerHTML || defaultIcon;
        this.slideContainers = this.navMenuElement.querySelectorAll(".topbar-nav-slide");
        this.slideHistory = [];

        this.btnElement.addEventListener("click", e => {
            e.preventDefault();
            this.handleClick();
        });

        this._initSlideLinks();
    }

    _initNav () {
        const navMenu = document.querySelector(this.btnElement.dataset.toggleNav);
        navMenu.querySelector(".topbar-nav-slide").classList.add("active");
        return navMenu;
    }

    _initSlideLinks () {
        const slideLinks = this.navMenuElement.querySelectorAll("[data-target]");

        slideLinks.forEach(link => {
            const targetSlide = document.getElementById(link.dataset.target);
            const parent = link.closest(".topbar-nav-slide");

            link.addEventListener("click", e => {
                e.preventDefault();
                targetSlide.classList.add("active");
                parent.classList.remove("active");
                parent.classList.add("inactive");

                if (!this.backBtn) {
                    this.navMenuElement.prepend(_createNavHeader(link.innerText));
                }
            });
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

        this.navMenuElement.querySelector(".topbar-nav-slide").classList.add("active");
        this.slideHistory = [];
    }

    containsPoint (x, y) {
        return _isWithinBoundingBox(x, y, this.navMenuElement) || _isWithinBoundingBox(x, y, this.btnElement);
    }

    handleClick () {
        this.isOpen ? this.close() : this.open();
    }
}

const _createNavHeader = text => {
    const container = document.createElement("div");
    container.classList.add("nav-header");

    const backBtn = document.createElement("i");
    backBtn.classList.add("material-icons");
    backBtn.innerHTML = "&#xE5C4";

    const header = document.createElement("span");
    header.innerText = text;

    container.appendChild(backBtn);
    container.appendChild(header);

    return container;
};

const _isWithinBoundingBox = (x, y, element) => {
    const rect = element.getBoundingClientRect();
    const xMin = rect.left;
    const xMax = rect.right;
    const yMin = rect.top;
    const yMax = rect.bottom;

    return ((xMin < x) && (xMax > x)) && ((yMin < y) && (yMax > y));
};
