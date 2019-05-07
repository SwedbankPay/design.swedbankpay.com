import { hashId } from "../utils";

const SELECTORS = {
    ACTIONMENU: ".action-menu",
    ACTIONLIST: ".action-list",
    ICONS: "i.material-icons"
};

const _actionLists = _actionLists || [];

class ActionList {
    constructor (element) {
        this.id = element.id;
        this.container = element;
        this.toggleBtn = element.querySelector(SELECTORS.ICONS);
        this.actionMenu = element.querySelector(SELECTORS.ACTIONMENU);
        this.actionMenuLinks = this.actionMenu.querySelectorAll("a");
        this.isOpen = this.container.classList.contains("active");

        this.toggleBtn.addEventListener("click", () => {
            this._toggleMenu();
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

    _toggleMenu () {
        this.isOpen ? this.close() : this.open();
    }
}

const init = id => {
    const actionListId = hashId(id);
    const actionListQuery = actionListId ? document.querySelectorAll(actionListId) : document.querySelectorAll(SELECTORS.ACTIONLIST);
    let actionLists = [];

    if (actionListQuery.length) {
        actionLists = [...actionListQuery].map(l => {
            const actionListObject = new ActionList(l);

            _actionLists.push(actionListObject);

            return actionListObject;
        });

        document.addEventListener("click", e => {
            actionLists.forEach(l => {
                if (e.target.closest(SELECTORS.ACTIONLIST) !== l.container && l.isOpen) {
                    l.close();
                }
            });
        });

        return actionLists.length === 1 ? actionLists[0] : actionLists;
    }

    return null;
};

const close = id => {
    let actionlist = null;

    _actionLists.forEach(d => d.id === id ? actionlist = d : null);

    try {
        actionlist.close();
    } catch (e) {
        console.error(`actionlist.close: No actionlist with id "${id}" found.`);

        return false;
    }

    return actionlist;
};

const open = id => {
    let actionlist = null;

    _actionLists.forEach(d => d.id === id ? actionlist = d : null);

    try {
        actionlist.open();
    } catch (e) {
        console.error(`actionlist.open: No actionlist with id "${id}" found.`);

        return false;
    }

    return actionlist;
};

export default {
    init,
    open,
    close
};
