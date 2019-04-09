import { handleScrollbar } from "../utils";

const SELECTORS = {
    SHEET: ".sheet",
    CLOSE: "[data-sheet-close]",
    OPEN: "[data-sheet-open]",
    CLOSEICON: ".sheet-close"
};

class Sheet {
    constructor (el) {
        this._el = el;
        this.id = el.id;
        this.closeIcon = el.querySelector(SELECTORS.CLOSEICON);
        this.isOpen = el.classList.contains("sheet-open");
        this.openBtns = document.querySelectorAll(SELECTORS.OPEN);
        this.closeBtns = document.querySelectorAll(SELECTORS.CLOSE);

        if (this.closeIcon) {
            this.closeIcon.addEventListener("click", e => {
                handleScrollbar();
                e.preventDefault();
                this.close();
            });
        }

        if (this.isOpen) {
            handleScrollbar();
            this._el.classList.add("d-block");
            document.body.classList.add("sheet-open");
        }

        // Close the sheet when clicking outside
        this._el.addEventListener("click", e => {
            if (e.target.classList.contains("sheet-open")) {
                handleScrollbar();
                this.close();
            }
        });
    }

    open () {
        handleScrollbar();
        this.isOpen = true;
        this._el.classList.add("d-block");
        document.body.classList.add("sheet-open");
        setTimeout(() => {
            this._el.classList.add("sheet-open");
        }, 10); // If set lower than 10, the initial open will be instant.

        const toastContainer = document.querySelector("#toast-container");

        toastContainer ? toastContainer.setAttribute("style", `margin-right: ${this._el.querySelector("section").offsetWidth}px; transition: margin 0.3s ease-in-out;`) : null;
    }

    close () {
        this.isOpen = false;
        this._el.classList.remove("sheet-open");
        document.body.classList.remove("sheet-open");
        setTimeout(() => {
            this._el.classList.remove("d-block");
        }, 300);

        const toastContainer = document.querySelector("#toast-container");

        toastContainer ? toastContainer.setAttribute("style", "transition: margin 0.3s ease-in-out;") : null;
    }
}

const sheet = (() => {
    const init = () => {
        const sheetEls = [...document.querySelectorAll(SELECTORS.SHEET)];

        if (sheetEls.length) {
            sheetEls.forEach(sheet => {
                _sheets.push(new Sheet(sheet));
            });
        }

        // Close sheet on esc
        document.addEventListener("keydown", e => {
            if (e.keyCode === 27 && document.body.classList.contains("sheet-open")) {
                handleScrollbar();
                _sheets.forEach(sheet => sheet.isOpen ? sheet.close() : null);
            }
        });

        // Init open buttons
        document.querySelectorAll(SELECTORS.OPEN).forEach(btn => {
            const id = btn.dataset.sheetOpen;
            let sheet;

            _sheets.forEach(s => s.id === id ? sheet = s : null);

            if (sheet) {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    sheet.open();
                });
            } else {
                console.warn(`OPEN: No sheet with with id ${id} was found, make sure the attribute data-sheet-open contains the correct id.`);
            }
        });

        // Init close buttons
        document.querySelectorAll(SELECTORS.CLOSE).forEach(btn => {
            const id = btn.dataset.sheetClose;
            let sheet;

            _sheets.forEach(s => s.id === id ? sheet = s : null);

            if (sheet) {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    sheet.close();
                });
            } else {
                console.warn(`CLOSE: No sheet with with id ${id} was found, make sure the attribute data-sheet-close contains the correct id.`);
            }
        });
    };

    const close = id => {
        let sheet = null;

        _sheets.forEach(d => d.id === id ? sheet = d : null);

        try {
            sheet.close();
        } catch (e) {
            console.error(`sheet.close: No sheet with id "${id}" found.`);

            return false;
        }

        handleScrollbar();

        return sheet;
    };

    const open = id => {
        let sheet = null;

        _sheets.forEach(d => d.id === id ? sheet = d : null);

        try {
            sheet.open();
        } catch (e) {
            console.error(`sheet.open: No sheet with id "${id}" found.`);

            return false;
        }

        return sheet;
    };

    return {
        init,
        close,
        open
    };
})();

const _sheets = _sheets || [];
// console.log(_sheets);

export default sheet;
