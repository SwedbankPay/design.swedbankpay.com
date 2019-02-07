import { isWithinBoundingBox } from "../utils";

class ActionList {
    constructor (element) {
        this.container = element;
        this.toggleBtn = element.querySelector("i.material-icons");
        this.actionMenu = element.querySelector(".action-menu");
        this.actionMenuLinks = this.actionMenu.querySelectorAll("a");
        this.isOpen = this.actionMenu.classList.contains("active");

        this.toggleBtn.addEventListener("click", () => {
            this.toggleMenu();
        });

        // close menu when clicking on links
        this.actionMenuLinks.forEach(link => link.addEventListener("click", () => this.close()));
    }

    open () {
        this.actionMenu.classList.add("active");
        this.isOpen = true;
    }

    close () {
        this.actionMenu.classList.remove("active");
        this.isOpen = false;
    }

    toggleMenu () {
        this.isOpen ? this.close() : this.open();
    }

    containsPoint (x, y) {
        return (isWithinBoundingBox(x, y, this.toggleBtn) || isWithinBoundingBox(x, y, this.actionMenu));
    }
}

const actionList = (() => {
    const init = () => {
        let actionLists = document.querySelectorAll(".action-list");

        if (actionLists.length) {
            actionLists = [...actionLists].map(l => new ActionList(l));

            document.addEventListener("click", e => {
                actionLists.forEach(l => {
                    if (!l.containsPoint(e.clientX, e.clientY) && l.isOpen) {
                        l.close();
                    }
                });
            });
        }
    };

    return { init };
})();

export default actionList;
