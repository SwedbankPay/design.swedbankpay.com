import { handleScrollbar } from "../utils";

const SELECTORS = {
    DIALOG: ".dialog",
    CLOSE: "[data-dialog-close]",
    OPEN: "[data-dialog-open]",
    CLOSEICON: ".dialog-close"
};

const _dialogs = _dialogs || [];

class Dialog {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.closeIcon = el.querySelector(SELECTORS.CLOSEICON);
        this.isOpen = el.classList.contains("d-flex");
        this.openBtns = this.id ? document.querySelectorAll(`[data-dialog-open=${this.id}]`) : null;
        this.closeBtns = this.id ? document.querySelectorAll(`[data-dialog-close=${this.id}]`) : null;

        if (this.closeIcon) {
            this.closeIcon.addEventListener("click", e => {
                e.preventDefault();
                this.close();
            });
        }

        if (this.isOpen) {
            document.body.classList.add("dialog-open");
        }

        this._initializeButtons();
    }

    _initializeButtons () {
        // Init open buttons
        if (this.openBtns) {
            this.openBtns.forEach(btn => {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    this.open();
                });
            });
        }

        // Init close buttons
        if (this.closeBtns) {
            this.closeBtns.forEach(btn => {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    this.close();
                });
            });
        }
    }

    open () {
        handleScrollbar();
        this.isOpen = true;
        this._el.classList.add("d-flex");
        document.body.classList.add("dialog-open");
    }

    close () {
        handleScrollbar();
        this.isOpen = false;
        this._el.classList.remove("d-flex");
        document.body.classList.remove("dialog-open");
    }
}

const _createDialog = dialogQuery => {
    const dialogObject = new Dialog(dialogQuery);

    _dialogs.push(dialogObject);

    return dialogObject;
};

const init = id => {
    if (id) {
        const dialog = document.getElementById(id);

        if (!dialog) {
            console.warn("doesn't exist");

            return null;
        }

        return _createDialog(dialog);
    } else {
        const dialogs = document.querySelectorAll(SELECTORS.DIALOG);

        if (!dialogs.length) {
            console.warn("doesn't exist");

            return null;
        }

        return [...dialogs].map(dialog => _createDialog(dialog));
    }
};

const open = id => {
    let dialog = null;

    _dialogs.forEach(d => d.id === id ? dialog = d : null);

    try {
        dialog.open();
    } catch (e) {
        console.warn(`dialog.open: No dialog with id "${id}" found.`);

        return false;
    }

    return dialog;
};

const close = id => {
    let dialog = null;

    _dialogs.forEach(d => d.id === id ? dialog = d : null);

    try {
        dialog.close();
    } catch (e) {
        console.warn(`dialog.close: No dialog with id "${id}" found.`);

        return false;
    }

    return dialog;
};

export default {
    init,
    open,
    close
};
