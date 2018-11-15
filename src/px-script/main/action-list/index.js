import { isWithinBoundingBox } from "../utils";

class ActionList {
    constructor (element) {
        this.container = element;
        this.toggleBtn = element.querySelector("i.material-icons");
        this.actionMenu = element.querySelector(".action-menu");
        this.actionMenuLinks = this.actionMenu.querySelectorAll("a");
        this.isOpen = this.actionMenu.classList.contains("active");

        this.toggleBtn.addEventListener("click", e => {
            e.stopPropagation();

            if (!this.isOpen) {
                this.open();
            } else {
                this.close();
            }
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

    containsPoint (x, y) {
        return isWithinBoundingBox(x, y, this.actionMenu);
    }
}

const actionList = (() => {
    const init = () => {
        const actionLists = document.querySelectorAll(".action-list");

        if (actionLists) {
            actionLists.forEach(l => {
                const list = new ActionList(l);

                document.querySelector("html").addEventListener("click", e => {
                    if (list.isOpen && !list.containsPoint(e.clientX, e.clientY)) {
                        list.close();
                    }
                });
            });
        }

    };

    return { init };
})();

export default actionList;
