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
        this.currentActive = this.navSlides[0];
        this.history = [];

        btnElement.addEventListener("click", e => {
            e.preventDefault();
            this.handleClick();
        });

        if (this.navSlides.length) {
            this._initNavSlides();
        }
        this._initTargetLinks();
    }

    _initNavSlides () {
        const appendBackBtn = element => {
            const i = document.createElement("i");
            i.classList.add("material-icons", "slide-back-btn");
            i.innerHTML = icons.back;
            i.addEventListener("click", () => {
                this.goBack();
            });

            element.appendChild(i);
        };

        for (let i = 0; i < this.navSlides.length; i++) {
            appendBackBtn(this.navSlides[i]);
        }

        this.navSlides[0].classList.add("current");
    }

    _initTargetLinks () {
        this.navMenuElement.querySelectorAll("[data-target]").forEach(link => {
            const targetLink = new TargetLink(link, icons.forward);

            targetLink.element.addEventListener("click", () => {
                if (targetLink.targetElement) {
                    this.currentActive = targetLink.targetElement;
                    this.history.push(targetLink.parentSlide);
                    targetLink.navigateToTarget();
                    if (this.history.length > 1) {
                        const index = this.history.length - 2;
                        this.history[index].classList.add("inactive");
                    }
                } else {
                    console.warn(`There is no element with the selector "${link.dataset.target}" present in the DOM.`);
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
        setTimeout(() => {
            this.reset();
        }, 500);
    }

    goBack () {
        if (this.history.length > 1) {
            const index = this.history.length - 2;
            this.history[index].classList.remove("inactive");
        }

        const lastActive = this.history.pop();
        this.currentActive.classList.remove("current");
        this.currentActive = lastActive;
        lastActive.classList.remove("prev");
        lastActive.classList.add("current");
    }

    reset () {
        this.history = [];
        this.navSlides.forEach((slide, i) => {
            slide.classList.remove("current", "prev", "inactive");
            if (i === 0) {
                slide.classList.add("current");
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
