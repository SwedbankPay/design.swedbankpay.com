import { handleScrollbar, getElementsByIds } from "../utils";

const SELECTORS = {
    DIALOG: ".dialog",
    CLOSE: "[data-dialog-close]",
    OPEN: "[data-dialog-open]",
    CLOSEICON: ".dialog-close"
};

class Dialog {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.closeIcon = el.querySelector(SELECTORS.CLOSEICON);
        this.isOpen = el.classList.contains("d-flex");

        if (this.closeIcon) {
            this.closeIcon.addEventListener("click", e => {
                e.preventDefault();
                this.close();
            });
        }

        if (this.isOpen) {
            document.body.classList.add("dialog-open");
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

const init = ids => {
    const dialogSelector = ids || ids === "" ? getElementsByIds(ids, "dialog") : document.querySelectorAll(SELECTORS.DIALOG);
    let dialogEls = [];

    if (dialogSelector.length) {
        dialogEls = [...dialogSelector].map(dialog => {
            const dialogInstance = new Dialog(dialog);

            if (_dialogs.length) {
                _dialogs.forEach((arrayDialog, index) => {
                    arrayDialog.id === dialogInstance.id ? _dialogs[index] = dialogInstance : _dialogs.push(dialogInstance);
                });
            } else {
                _dialogs.push(dialogInstance);
            }

            return dialogInstance;
        });

        // Init open buttons
        document.querySelectorAll(SELECTORS.OPEN).forEach(btn => {
            const id = btn.dataset.dialogOpen;
            let dialog;

            _dialogs.forEach(d => d.id === id ? dialog = d : null);

            if (dialog) {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    dialog.open();
                });
            } else {
                console.warn(`OPEN: No dialog with with id "${id}" was found, make sure the attribute data-dialog-open contains the correct id.`);
            }
        });

        // Init close buttons
        document.querySelectorAll(SELECTORS.CLOSE).forEach(btn => {
            const id = btn.dataset.dialogClose;
            let dialog;

            _dialogs.forEach(d => d.id === id ? dialog = d : null);

            if (dialog) {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    dialog.close();
                });
            } else {
                console.warn(`CLOSE: No dialog with with id "${id}" was found, make sure the attribute data-dialog-close contains the correct id.`);
            }
        });

        return dialogEls;
    }
};

const close = id => {
    let dialog = null;

    _dialogs.forEach(d => d.id === id ? dialog = d : null);

    try {
        dialog.close();
    } catch (e) {
        console.error(`dialog.close: No dialog with id "${id}" found.`);

        return false;
    }

    return dialog;
};

const open = id => {
    let dialog = null;

    _dialogs.forEach(d => d.id === id ? dialog = d : null);

    try {
        dialog.open();
    } catch (e) {
        console.error(`dialog.open: No dialog with id "${id}" found.`);

        return false;
    }

    return dialog;
};

const _dialogs = _dialogs || [];

export default {
    init,
    close,
    open
};
