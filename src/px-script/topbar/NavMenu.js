import TargetLink from "./TargetLink";

const icons = {
    default: "menu", // "&#xE5D2;"
    close: "close", // "&#xE5CD;"
    back: "arrow_back", // "&#xE5C4;"
    forward: "chevron_right" // "&#xe5cc;"
};

export default class NavMenu {
    constructor (btnElement) {
        this.isOpen = false;
        this.btnElement = btnElement;
        this.iconElement = btnElement.querySelector(".topbar-btn-icon");
        this.userIcon = this.iconElement.innerHTML || icons.default;
        this.navMenuElement = document.querySelector(btnElement.dataset.toggleNav);
        this.navSlides = this.navMenuElement.querySelectorAll(".topbar-nav-slide");
        this.history = [];

        btnElement.addEventListener("click", e => {
            e.preventDefault();
            this.handleClick();
        });

        this._initNavSlides();
        this._initTargetLinks();
    }

    _initNavSlides () {
        const prependBackBtn = element => {
            const div = document.createElement("div");
            div.classList.add("left-bar");

            const i = document.createElement("i");
            i.classList.add("material-icons");
            i.innerHTML = icons.back;
            i.addEventListener("click", () => {
                this.goBack(element);
            });

            div.appendChild(i);

            element.insertBefore(div, element.firstChild);
        };

        for (let i = 1; i < this.navSlides.length; i++) {
            prependBackBtn(this.navSlides[i]);
        }

        this.navSlides[0].classList.add("active");
    }

    _initTargetLinks () {
        this.navMenuElement.querySelectorAll("[data-target]").forEach(link => {
            const targetLink = new TargetLink(link, icons.forward);

            targetLink.element.addEventListener("click", () => {
                if (targetLink.targetElement) {
                    this.history.push(targetLink.parentSlide);
                    targetLink.navigateToTarget();
                }
            });
        });
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
        this.reset();
    }

    goBack (currentActive) {
        const lastActive = this.history.pop();
        currentActive.classList.remove("active");
        lastActive.classList.remove("inactive");
        lastActive.classList.add("active");
    }

    reset () {
        this.history = [];
        this.navSlides.forEach((slide, i) => {
            slide.classList.remove("active", "inactive");
            if (i === 0) {
                slide.classList.add("active");
            }
        });
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
