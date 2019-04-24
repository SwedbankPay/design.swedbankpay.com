import { getElementsByIds } from "../utils";

const SELECTORS = {
    ACTIONMENU: ".action-menu",
    ACTIONLIST: ".action-list",
    ICONS: "i.material-icons"
};

class ActionList {
    constructor (element) {
        this.container = element;
        this.toggleBtn = element.querySelector(SELECTORS.ICONS);
        this.actionMenu = element.querySelector(SELECTORS.ACTIONMENU);
        this.actionMenuLinks = this.actionMenu.querySelectorAll("a");
        this.isOpen = this.container.classList.contains("active");

        this.toggleBtn.addEventListener("click", () => {
            this.toggleMenu();
        });

        // close menu when clicking on links
        this.actionMenuLinks.forEach(link => link.addEventListener("click", () => this.close()));
    }

    open () {
        this.container.classList.add("active");
        this.isOpen = true;
    }

    close () {
        this.container.classList.remove("active");
        this.isOpen = false;
    }

    toggleMenu () {
        this.isOpen ? this.close() : this.open();
    }
}

const init = ids => {
    let actionLists = ids || ids === "" ? getElementsByIds(ids, "action-list") : document.querySelectorAll(SELECTORS.ACTIONLIST);

    if (actionLists.length) {
        actionLists = [...actionLists].map(l => new ActionList(l));

        document.addEventListener("click", e => {
            actionLists.forEach(l => {
                if (e.target.closest(SELECTORS.ACTIONLIST) !== l.container && l.isOpen) {
                    l.close();
                }
            });
        });
    }

    return actionLists;
};

export default {
    init
};
