import { isWithinBoundingBox } from "../utils";

class ActionList {
    constructor (element) {
        this.isOpen = false;
        this.container = element;
        this.toggleBtn = element.querySelector("i.material-icons");
        this.actionMenu = element.querySelector(".action-menu");

        this.toggleBtn.addEventListener("click", () => {
            if (!this.isOpen) {
                this.openMenu();
            } else {
                this.closeMenu();
            }
        });
    }

    openMenu () {
        this.actionMenu.classList.add("active");
        this.isOpen = true;
    }

    closeMenu () {
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

        actionLists.forEach(l => {
            const list = new ActionList(l);

            document.querySelector("html").addEventListener("mousedown", e => {
                if (list.isOpen && !list.containsPoint(e.clientX, e.clientY)) {
                    list.closeMenu();
                }
            });
        });
    };

    return { init };
})();

export default actionList;
