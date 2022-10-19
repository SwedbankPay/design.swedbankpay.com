// FIXME: THIS IS A VERY TEMPORARY SCRIPT ADAPTING THE ACTION-LINK SCRIPT FOR DROPDOWN

const SELECTORS = {
    DROPDOWNLIST: ".dropdown-list",
    DROPDOWNMENU: ".dropdown-menu",
    TOGGLE: ".dropdown-toggle"
};

const _dropdownLists = [];

class ActionList {
    constructor (element) {
        this.id = element.id ? element.id : null;
        this.container = element;
        this.dropdownMenu = element.querySelector(SELECTORS.DROPDOWNMENU);
        this.dropdownMenuLinks = this.dropdownMenu.querySelectorAll("a");
        this.dropdownMenuButtons = this.dropdownMenu.querySelectorAll(".btn-elem");
        this.isOpen = this.container.classList.contains("active");
        this.toggleBtn = element.querySelector(SELECTORS.TOGGLE);

        try {
            this.toggleBtn.addEventListener("click", () => {
                this._toggleMenu();
            });
        } catch (e) {
            console.warn("No toggle element exist, add an element with the class .dropdown-toggle");
        }

        // close menu when clicking on links
        this.dropdownMenuLinks.forEach(link => link.addEventListener("click", () => this.close()));
        this.dropdownMenuButtons.forEach(link => link.addEventListener("click", () => this.close()));
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

const _createActionList = dropdownListQuery => {
    const dropdownListObject = new ActionList(dropdownListQuery);

    _dropdownLists.push(dropdownListObject);

    document.addEventListener("click", e => {
        if (e.target.closest(SELECTORS.DROPDOWNLIST) !== dropdownListObject.container && dropdownListObject.isOpen) {
            dropdownListObject.close();
        }
    });

    return dropdownListObject;
};

const init = id => {
    if (id) {
        const dropdownList = document.getElementById(id);

        if (!dropdownList) {
            console.warn(`No dropdown List with id ${id} found`);

            return null;
        }

        return _createActionList(dropdownList);
    } else {
        const dropdownLists = document.querySelectorAll(SELECTORS.DROPDOWNLIST);

        if (!dropdownLists.length) {
            console.warn("No dropdown lists found");

            return null;
        }

        return [...dropdownLists].map(dropdownList => _createActionList(dropdownList));
    }
};

const close = id => {
    let dropdownlist = null;

    _dropdownLists.forEach(d => d.id === id ? dropdownlist = d : null);

    try {
        dropdownlist.close();
    } catch (e) {
        console.warn(`dropdownlist.close: No dropdownlist with id "${id}" found.`);

        return false;
    }

    return dropdownlist;
};

const open = id => {
    let dropdownlist = null;

    _dropdownLists.forEach(d => d.id === id ? dropdownlist = d : null);

    try {
        dropdownlist.open();
    } catch (e) {
        console.warn(`dropdownlist.open: No dropdownlist with id "${id}" found.`);

        return false;
    }

    return dropdownlist;
};

export default {
    init,
    open,
    close
};
