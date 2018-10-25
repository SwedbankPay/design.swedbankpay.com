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
        this.hasVScroll = () => (window.innerWidth - document.documentElement.clientWidth) > 0;

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

        // Close sheet on esc
        document.addEventListener("keydown", e => {
            e.keyCode === 27 ? this.close() : null;
        });

        // Close the sheet when clicking outside
        this._el.addEventListener("click", e => {
            e.target.classList.contains("sheet-open") ? this.close() : null;
        });
    }

    handleScrollbar () {
        if (this.hasVScroll()) {
            document.body.classList.add("body-has-vscroll");
        } else {
            document.body.classList.remove("body-has-vscroll");
        }
    }

    open () {
        this.handleScrollbar();
        this.isOpen = true;
        this._el.classList.add("d-block");
        document.body.classList.add("sheet-open");
        setTimeout(() => {
            this._el.classList.add("sheet-open");
        }, 10); // If set lower than 10, the initial open will be instant.
    }

    close () {
        this.handleScrollbar();
        this.isOpen = false;
        this._el.classList.remove("sheet-open");
        document.body.classList.remove("sheet-open");
        setTimeout(() => {
            this._el.classList.remove("d-block");
        }, 300);
    }
}

const sheet = (() => {
    const init = () => {
        const sheetEls = [...document.querySelectorAll(SELECTORS.SHEET)];

        window.px._sheets = window.px._sheets || [];

        if (sheetEls.length) {
            sheetEls.forEach(sheet => window.px._sheets.push(new Sheet(sheet)));

            // Init open buttons
            document.querySelectorAll(SELECTORS.OPEN).forEach(btn => {
                const id = btn.dataset.sheetOpen;
                let sheet;

                window.px._sheets.forEach(s => s.id === id ? sheet = s : null);

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

                window.px._sheets.forEach(s => s.id === id ? sheet = s : null);

                if (sheet) {
                    btn.addEventListener("click", e => {
                        e.preventDefault();
                        sheet.close();
                    });
                } else {
                    console.warn(`CLOSE: No sheet with with id ${id} was found, make sure the attribute data-sheet-close contains the correct id.`);
                }
            });
        }
    };

    const close = id => {
        let sheet = null;

        window.px._sheets.forEach(d => d.id === id ? sheet = d : null);

        try {
            sheet.close();
        } catch (e) {
            console.error(`sheet.close: No sheet with id "${id}" found.`);

            return false;
        }

        return sheet;
    };

    const open = id => {
        let sheet = null;

        window.px._sheets.forEach(d => d.id === id ? sheet = d : null);

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

export default sheet;
