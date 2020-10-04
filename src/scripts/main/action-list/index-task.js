const SELECTORS = {
    ACTIONLIST: ".action-list",
    ACTIONMENU: ".action-menu",
    TOGGLE: ".action-toggle"
};

const _actionLists = _actionLists || [];

class ActionList {
    constructor (element) {
        this.element = element;
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

// This is the focus
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

export default {
    init
};
