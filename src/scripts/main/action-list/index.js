const SELECTORS = {
    ACTIONLIST: ".action-list",
    ACTIONMENU: ".action-menu",
    TOGGLE: ".action-toggle"
};

const _actionLists = [];

class ActionList {
    constructor (element) {
        this.id = element.id ? element.id : null;
        this.container = element;
        this.actionMenu = element.querySelector(SELECTORS.ACTIONMENU);
        this.actionMenuLinks = this.actionMenu.querySelectorAll("a");
        this.isOpen = this.container.classList.contains("active");
        this.toggleBtn = element.querySelector(SELECTORS.TOGGLE);

        try {
            this.toggleBtn.addEventListener("click", () => {
                this._toggleMenu();
            });
        } catch (e) {
            console.warn("No toggle element exist, add an element with the class .action-toggle");
        }

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

const _createActionList = actionListQuery => {
    const actionListObject = new ActionList(actionListQuery);

    _actionLists.push(actionListObject);

    document.addEventListener("click", e => {
        if (e.target.closest(SELECTORS.ACTIONLIST) !== actionListObject.container && actionListObject.isOpen) {
            actionListObject.close();
        }
    });

    return actionListObject;
};

const init = id => {
    if (id) {
        const actionList = document.getElementById(id);

        if (!actionList) {
            console.warn(`No action List with id ${id} found`);

            return null;
        }

        return _createActionList(actionList);
    } else {
        const actionLists = document.querySelectorAll(SELECTORS.ACTIONLIST);

        if (!actionLists.length) {
            console.warn("No action lists found");

            return null;
        }

        return [...actionLists].map(actionList => _createActionList(actionList));
    }
};

const close = id => {
    let actionlist = null;

    _actionLists.forEach(d => d.id === id ? actionlist = d : null);

    try {
        actionlist.close();
    } catch (e) {
        console.warn(`actionlist.close: No actionlist with id "${id}" found.`);

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
        console.warn(`actionlist.open: No actionlist with id "${id}" found.`);

        return false;
    }

    return actionlist;
};

export default {
    init,
    open,
    close
};
