import { handleScrollbar, openComponent, closeComponent } from "../utils";

const SELECTORS = {
    DIALOG: ".dialog",
    CLOSE: "[data-dialog-close]",
    OPEN: "[data-dialog-open]",
    CLOSEICON: ".dialog-close"
};

const FOCUSELEMENTS = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex=\"0\"], [contenteditable]";

const _dialogs = [];

class Dialog {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.closeIcon = el.querySelector(SELECTORS.CLOSEICON);
        this.header = el.querySelector(".dialog-header");
        this.isOpen = el.classList.contains("d-flex");

        // Find all related buttons
        this.openBtns = this.id ? [...document.querySelectorAll(`[data-dialog-open=${this.id}]`)] : [];
        this.closeBtn = this._el.querySelector("[data-dialog-close]");

        // Find focusable elements
        this.focusedElemBeforeDialog = null;
        this.focusableElements = [...el.querySelectorAll(FOCUSELEMENTS)];
        this.firstTabStop = this.focusableElements[0];
        this.lastTabStop = this.focusableElements[this.focusableElements.length - 1];

        if (this.closeIcon) {
            this.closeIcon.addEventListener("click", e => {
                e.preventDefault();
                this.close();
            });
        }

        if (this.isOpen) {
            document.body.classList.add("dialog-open");
        }

        this._initializeListeners();
    }

    _initializeListeners () {
        this._el.addEventListener("keydown", e => {
            if (e.key === "Tab") {
                // SHIFT + TAB
                if (e.shiftKey) {
                    if (document.activeElement === this.firstTabStop) {
                        e.preventDefault();
                        this.lastTabStop.focus();
                    }

                // TAB
                } else if (document.activeElement === this.lastTabStop) {
                    e.preventDefault();
                    this.firstTabStop.focus();
                }
            }

            if (e.key === "Esc" || e.key === "Escape") {
                this.close();
            }
        });

        // Init open buttons
        if (this.openBtns.length) {
            this.openBtns.forEach(btn => {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    this.open();
                });
            });
        }

        // Init close buttons
        if (this.closeBtn) {
            this.closeBtn.addEventListener("click", e => {
                e.preventDefault();
                this.close();
            });
        }
    }

    open () {
        this.focusedElemBeforeDialog = document.activeElement;
        handleScrollbar();
        this.isOpen = true;
        this._el.classList.add("d-flex");
        document.body.classList.add("dialog-open");
        this.lastTabStop.focus();
    }

    close () {
        handleScrollbar();
        this.isOpen = false;
        this._el.classList.remove("d-flex");
        document.body.classList.remove("dialog-open");
        this.focusedElemBeforeDialog ? this.focusedElemBeforeDialog.focus() : null;
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
            console.warn(`No dialog with id ${id} found`);

            return null;
        }

        return _createDialog(dialog);
    } else {
        const dialogs = document.querySelectorAll(SELECTORS.DIALOG);

        if (!dialogs.length) {
            console.warn("No dialogs found");

            return null;
        }

        return [...dialogs].map(dialog => _createDialog(dialog));
    }
};

const open = id => openComponent(id, "dialog", _dialogs);

const close = id => closeComponent(id, "dialog", _dialogs);

export default {
    init,
    open,
    close
};
