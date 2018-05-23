export default class TargetLink {
    constructor (element, arrowIcon) {
        this.element = element;
        this.target = element.dataset.target;
        this.targetElement = document.querySelector(this.target);
        this.parentSlide = this.element.closest(".topbar-nav-slide");

        this.appendArrow(arrowIcon);
    }

    appendArrow (icon) {
        const i = document.createElement("i");
        i.classList.add("material-icons");
        i.innerHTML = icon;
        this.element.append(i);
    }

    navigateToTarget () {
        this.parentSlide.classList.remove("current");
        this.parentSlide.classList.add("prev");
        this.targetElement.classList.add("current");
    }
}
