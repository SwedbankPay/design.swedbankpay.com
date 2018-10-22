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

        // Close dialog on esc
        document.addEventListener("keydown", e => {
            e.keyCode === 27 ? this.close() : null;
        });

        // Close the dialog when clicking outside
        this._el.addEventListener("click", e => {
            e.target.classList.contains("d-flex") ? this.close() : null;
        });
    }

    open () {
        this.isOpen = true;
        this._el.classList.add("d-flex");
        document.body.classList.add("dialog-open");
    }

    close () {
        this.isOpen = false;
        this._el.classList.remove("d-flex");
        document.body.classList.remove("dialog-open");
    }

}

const dialog = (() => {
    const init = () => {
        const dialogEls = [...document.querySelectorAll(SELECTORS.DIALOG)];

        window.px._dialogs = window.px._dialogs || [];

        if (dialogEls.length) {
            dialogEls.forEach(dialog => window.px._dialogs.push(new Dialog(dialog)));

            // Init open buttons
            document.querySelectorAll(SELECTORS.OPEN).forEach(btn => {
                const id = btn.dataset.dialogOpen;
                let dialog;

                window.px._dialogs.forEach(d => d.id === id ? dialog = d : null);

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

                window.px._dialogs.forEach(d => d.id === id ? dialog = d : null);

                if (dialog) {
                    btn.addEventListener("click", e => {
                        e.preventDefault();
                        dialog.close();
                    });
                } else {
                    console.warn(`CLOSE: No dialog with with id "${id}" was found, make sure the attribute data-dialog-close contains the correct id.`);
                }
            });
        }
    };

    const close = id => {
        let dialog = null;

        window.px._dialogs.forEach(d => d.id === id ? dialog = d : null);

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

        window.px._dialogs.forEach(d => d.id === id ? dialog = d : null);

        try {
            dialog.open();
        } catch (e) {
            console.error(`dialog.open: No dialog with id "${id}" found.`);

            return false;
        }

        return dialog;
    };

    return {
        init,
        close,
        open
    };
})();

export default dialog;
