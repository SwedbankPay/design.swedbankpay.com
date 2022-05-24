import { handleScrollbar, openComponent, closeComponent } from "../utils";

const SELECTORS = {
    SHEET: ".sheet",
    CLOSE: "[data-sheet-close]",
    OPEN: "[data-sheet-open]",
    CLOSEICON: ".sheet-close"
};

const FOCUSELEMENTS = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex=\"0\"], [contenteditable]";

const _sheets = [];

class Sheet {
    constructor (el) {
        this.el = el;
        this._closeHandler = this._closeHandler.bind(this);
        this._openHandler = this._openHandler.bind(this);
        this._closeOutsideClickHandler = this._closeOutsideClickHandler.bind(this);
        this.constructSheet(el);

        // find focusable elements
        this.focusedElemBeforeSheet = null;
        this.focusableElements = [...el.querySelectorAll(FOCUSELEMENTS)];
        this.firstTabStop = this.focusableElements[0];
        this.lastTabStop = this.focusableElements[this.focusableElements.length - 1];
    }

    constructSheet (el) {
        this._el = el;
        this.requireAction = el.dataset.requireAction;
        this.id = el.id;
        this.closeIcon = el.querySelector(SELECTORS.CLOSEICON);
        this.isOpen = el.style.display === "block";
        this.openBtns = this.id ? document.querySelectorAll(`[data-sheet-open=${this.id}]`) : null;
        this.closeBtns = this.id ? document.querySelectorAll(`[data-sheet-close=${this.id}]`) : null;

        if (this.closeIcon) {
            this.closeIcon.addEventListener("click", this._closeHandler, false);
        }

        if (this.isOpen) {
            document.body.classList.add("sheet-open");
        }

        // Close the sheet when clicking outside
        if (!this.requireAction) {
            this._el.addEventListener("click", this._closeOutsideClickHandler);
        }

        // Remove classes that prevent scrolling if user navigates away from page without closing a sheet
        window.addEventListener("popstate", () => {
            if (document.body.className.includes("sheet-open")) { document.body.classList.remove("sheet-open"); }

            if (document.body.className.includes("has-vscroll")) { document.body.classList.remove("has-vscroll"); }
        });

        this._initializeButtons();
        this._initializeKeyListeners();
    }

    _initializeKeyListeners () {
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
    }

    _closeHandler (e) {
        e.preventDefault();
        this.close();
    }

    _openHandler (e) {
        e.preventDefault();
        this.open();
    }

    _closeOutsideClickHandler (e) {
        if (e.target.classList.contains("sheet-open")) {
            this.close();
        }
    }

    _initializeButtons () {
        // Init open buttons
        if (this.openBtns) {
            this.openBtns.forEach(btn => {
                btn.addEventListener("click", this._openHandler);
            });
        }

        // Init close buttons
        if (this.closeBtns) {
            this.closeBtns.forEach(btn => {
                btn.addEventListener("click", this._closeHandler);
            });
        }
    }

    open () {
        this.focusedElemBeforeSheet = document.activeElement;
        handleScrollbar();
        this.isOpen = true;
        this._el.style.display = "block";
        document.body.classList.add("sheet-open");
        this._el.classList.add("sheet-open");

        const toastContainer = document.querySelector("#toast-container");

        toastContainer ? toastContainer.setAttribute("style", `margin-right: ${this._el.querySelector("section").offsetWidth}px; transition: margin 0.3s ease-in-out;`) : null;
        this.firstTabStop.focus();
    }

    close () {
        handleScrollbar();
        this.isOpen = false;
        this._el.classList.remove("sheet-open");
        document.body.classList.remove("sheet-open");
        this._el.classList.add("sheet-closing");
        setTimeout(() => {
            this._el.classList.remove("sheet-closing");
            this._el.style.display = "none";
        }, 300);

        const toastContainer = document.querySelector("#toast-container");

        toastContainer ? toastContainer.setAttribute("style", "transition: margin 0.3s ease-in-out;") : null;
        this.focusedElemBeforeSheet ? this.focusedElemBeforeSheet.focus() : null;
    }
}

const _createSheet = sheetQuery => {

    if (_sheets.filter(sheet => sheet.id === sheetQuery.id).length > 0) {
        const updatedSheetObject = _sheets.filter(sheet => sheet.id === sheetQuery.id)[0];

        updatedSheetObject.constructSheet(sheetQuery);

        return updatedSheetObject;
    }

    const sheetObject = new Sheet(sheetQuery);

    _sheets.push(sheetObject);

    return sheetObject;
};

const init = id => {
    if (id) {
        const sheet = document.getElementById(id);

        if (!sheet) {
            console.warn(`No sheet with id ${id} found`);

            return null;
        }

        const sheetObj = _createSheet(sheet);

        _addEscListener();

        return sheetObj;
    } else {
        const sheets = document.querySelectorAll(SELECTORS.SHEET);

        if (!sheets.length) {
            console.warn("No sheets found");

            return null;
        }

        const sheetObjects = [...sheets].map(sheet => _createSheet(sheet));

        _addEscListener();

        return sheetObjects;
    }
};

const _closeSheetEscHandler = e => {
    if (e.keyCode === 27 && document.body.classList.contains("sheet-open")) {
        _sheets.forEach(sheet => sheet.isOpen ? sheet.close() : null);
    }
};

const _addEscListener = () => {
    // Close sheet on esc

    document.addEventListener("keydown", _closeSheetEscHandler);
};

const close = id => closeComponent(id, "sheet", _sheets);

const open = id => openComponent(id, "sheet", _sheets);

export default {
    init,
    open,
    close
};
