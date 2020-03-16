import { handleScrollbar, openComponent, closeComponent } from "../utils";

const SELECTORS = {
    SHEET: ".sheet",
    CLOSE: "[data-sheet-close]",
    OPEN: "[data-sheet-open]",
    CLOSEICON: ".sheet-close"
};

const _sheets = _sheets || [];

class Sheet {
    constructor (el) {
        this._el = el;
        this.requireAction = el.dataset.requireAction;
        this.id = el.id;
        this.closeIcon = el.querySelector(SELECTORS.CLOSEICON);
        this.isOpen = el.classList.contains("sheet-open");
        this.openBtns = this.id ? document.querySelectorAll(`[data-sheet-open=${this.id}]`) : null;
        this.closeBtns = this.id ? document.querySelectorAll(`[data-sheet-close=${this.id}]`) : null;

        if (this.closeIcon) {
            this.closeIcon.addEventListener("click", e => {
                e.preventDefault();
                this.close();
            });
        }

        if (this.isOpen) {
            this._el.classList.add("d-block");
            document.body.classList.add("sheet-open");
        }

        // Close the sheet when clicking outside
        if (!this.requireAction) {
            this._el.addEventListener("click", e => {
                if (e.target.classList.contains("sheet-open")) {
                    this.close();
                }
            });
        }

        // Remove classes that prevent scrolling if user navigates away from page without closing a sheet
        window.addEventListener("popstate", () => {
            if (document.body.classList.value && document.body.classList.value.includes("sheet-open")) { document.body.classList.remove("sheet-open"); }

            if (document.body.classList.value && document.body.classList.value.includes("has-vscroll")) { document.body.classList.remove("has-vscroll"); }
        });

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
        this._el.classList.add("d-block");
        document.body.classList.add("sheet-open");
        this._el.classList.add("sheet-open");

        const toastContainer = document.querySelector("#toast-container");

        toastContainer ? toastContainer.setAttribute("style", `margin-right: ${this._el.querySelector("section").offsetWidth}px; transition: margin 0.3s ease-in-out;`) : null;
    }

    close () {
        handleScrollbar();
        this.isOpen = false;
        this._el.classList.remove("sheet-open");
        document.body.classList.remove("sheet-open");
        this._el.classList.add("sheet-closing");
        setTimeout(() => {
            this._el.classList.remove("sheet-closing");
            this._el.classList.remove("d-block");
        }, 300);

        const toastContainer = document.querySelector("#toast-container");

        toastContainer ? toastContainer.setAttribute("style", "transition: margin 0.3s ease-in-out;") : null;

    }
}

const _createSheet = sheetQuery => {
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

        const sheetObjects = [...sheets].map(actionList => _createSheet(actionList));

        _addEscListener();

        return sheetObjects;
    }
};

const _addEscListener = () => {
    // Close sheet on esc
    document.addEventListener("keydown", e => {
        if (e.keyCode === 27 && document.body.classList.contains("sheet-open")) {
            _sheets.forEach(sheet => sheet.isOpen ? sheet.close() : null);
        }
    });
};

const close = id => closeComponent(id, "sheet", _sheets);

const open = id => openComponent(id, "sheet", _sheets);

export default {
    init,
    open,
    close
};
