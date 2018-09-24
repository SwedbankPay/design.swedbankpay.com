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

        // Close dialog on esc
        document.addEventListener("keydown", e => {
            e.keyCode === 27 ? this.close() : null;
        });

        // close the dialog when clicking outside
        this._el.addEventListener("click", e => {
            e.target.classList.contains("d-flex") ? this.close() : null;
        });
    }

    open () {
        if (!this.isOpen) {
            this.isOpen = true;
            this._el.classList.add("d-flex");
            document.body.classList.add("dialog-open");
        }
    }

    close () {
        if (this.isOpen) {
            this.isOpen = false;
            this._el.classList.remove("d-flex");
            document.body.classList.remove("dialog-open")
        }
    }

}

const dialog = (() => {
    const init = () => {
        const dialogs = [...document.querySelectorAll(SELECTORS.DIALOG)].map(dialog => new Dialog(dialog));

        // init open buttons
        document.querySelectorAll(SELECTORS.OPEN).forEach(btn => {
            const id = btn.dataset.dialogOpen;
            let dialog;

            dialogs.forEach(d => d.id === id ? dialog = d : null);

            if (dialog) {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    dialog.open();
                });
            } else {
                console.warn(`OPEN: No dialog with with id ${id} was found, make sure the attribute data-dialog-open contains the correct id.`);
            }
        });

        // init close buttons
        document.querySelectorAll(SELECTORS.CLOSE).forEach(btn => {
            const id = btn.dataset.dialogClose;
            let dialog;

            dialogs.forEach(d => d.id === id ? dialog = d : null);

            if (dialog) {
                btn.addEventListener("click", e => {
                    e.preventDefault();
                    dialog.close();
                });
            } else {
                console.warn(`CLOSE: No dialog with with id ${id} was found, make sure the attribute data-dialog-close contains the correct id.`);
            }
        });
    };

    return { init };
})();

export default dialog;
