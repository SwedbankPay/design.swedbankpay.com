export default class NavChildContainer {
    constructor (element) {
        this.element = element;
        this.link = element.firstElementChild;
        this.childContainer = element.lastElementChild;
        this.parentContainer = element.parentElement.closest(".topbar-nav-items-container");
        this.backBtn = new _BackBtn(this.childContainer);
    }

    addClick (fn) {
        _addClick(this.link, fn);
    }

    setActive () {
        _resetDescendants(this.parentContainer);
        this.parentContainer.classList.remove("active");
        this.parentContainer.classList.add("inactive");
        this.childContainer.classList.remove("inactive");
        this.childContainer.classList.add("active");
    }

    goBack () {
        this.childContainer.classList.remove("active");
        this.parentContainer.classList.remove("inactive");
        this.parentContainer.classList.add("active");
    }

    reset () {
        this.parentContainer.classList.remove("active", "inactive");
        this.childContainer.classList.remove("active", "inactive");
    }
}

// PRIVATE CLASSES

class _BackBtn {
    constructor (el) {
        this.parent = el;
        this.button = document.createElement("button");

        const icon = document.createElement("i");

        icon.innerHTML = "&#xE5C4";
        icon.classList.add("material-icons");
        this.button.appendChild(icon);
        this.button.classList.add("topbar-nav-back");

        this.parent.prepend(this.button);
    }

    addClick (fn) {
        _addClick(this.button, fn);
    }
}

// PRIVATE METHODS

const _addClick = (element, fn) => {
    element.addEventListener("click", e => {
        e.preventDefault();
        fn();
    });
};

const _resetDescendants = element => {
    const descendants = element.querySelectorAll(".topbar-nav-items-container");
    descendants.forEach(descendant => {
        descendant.classList.remove("active", "inactive");
    });
};
