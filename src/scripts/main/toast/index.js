import { extendObj } from "../utils";

const SELECTORS = {
    SHEET: {
        COMPONENT: ".sheet",
        OPEN: ".sheet-open"
    }
};

class Toast {
    constructor (options) {
        this.options = extendObj(true, this._defaults(), options);
        this.message = this.options.html;
        this.timeRemaining = this.options.displayLength; // Time remaining until the toast is removed.
        this.sheetComponent = document.querySelector(SELECTORS.SHEET.COMPONENT);
        this.sheetOpen = document.querySelector(SELECTORS.SHEET.OPEN);

        if (Toast._toasts.length === 0) {
            Toast._createContainer();
        }

        // Create new toast
        Toast._toasts.push(this);

        const toastElement = this._createToast();

        toastElement.dgToast = this;
        this.el = toastElement;
        this._setTimer();
    }

    _defaults () {
        return {
            html: "",
            type: "",
            icon: "",
            dismissable: true,
            displayLength: 4000,
            inDuration: 300,
            outDuration: 375,
            classes: [],
            completeCallback: null,
            activationPercent: 0.8
        };
    }

    static _createContainer () {
        const container = document.createElement("div");

        container.setAttribute("id", "toast-container");

        // TODO: Add event handlers

        document.body.appendChild(container);
        this._container = container;
    }

    static _removeContainer () {
        // TODO: Remove event handlers

        Toast._container.parentNode.removeChild(Toast._container);
        Toast._container = null;
    }

    _createToast () {
        const toast = document.createElement("div");
        const toastContent = document.createElement("div");

        toast.classList.add("toast");

        this.sheetOpen ? Toast._container.setAttribute("style", `margin-right: ${this.sheetComponent.querySelector("section").offsetWidth}px`) : null;

        if (this.options.classes.length) {
            toast.classList.add(...this.options.classes);
        }

        const _createIcon = (iconType, dismiss) => {
            const icon = document.createElement("i");

            icon.classList.add("material-icons");
            icon.innerHTML = iconType;
            icon.setAttribute("aria-label", "Close");

            if (dismiss) {
                icon.addEventListener("click", () => {
                    this.dismiss();
                });
            }

            return icon;
        };

        // Set toast type
        switch (this.options.type) {
            case "success":
                toast.classList.add("toast-success");
                toast.appendChild(_createIcon("check_circle"));

                break;
            case "neutral":
                toast.classList.add("toast-neutral");
                toast.appendChild(_createIcon("info"));

                break;
            case "warning":
                toast.classList.add("toast-warning");
                toast.appendChild(_createIcon("warning"));

                break;
            case "danger":
                toast.classList.add("toast-danger");
                toast.appendChild(_createIcon("error"));

                break;
            default:
                break;
        }

        // Set content
        toastContent.classList.add("toast-content");
        toastContent.innerHTML = this.message;
        toast.appendChild(toastContent);

        if (this.options.icon && !this.options.type) {
            toast.appendChild(_createIcon(this.options.icon));
        }

        if (this.options.dismissable) {
            toast.appendChild(_createIcon("close", true));
        }

        toast.addEventListener("mouseenter", () => {
            this._clearTimer();
        });

        toast.addEventListener("mouseleave", () => {
            this._setTimer();
        });

        // Append toast
        Toast._container.appendChild(toast);

        return toast;
    }

    _setTimer () {
        if (this.timeRemaining !== Infinity) {
            this.counterInterval = setInterval(() => {
                // If toast is not being dragged, decrease its time remaining
                this.timeRemaining -= 20;

                // Animate toast out
                if (this.timeRemaining <= 0) {
                    this.dismiss();
                }
            }, 20);
        }
    }

    _clearTimer () {
        if (this.counterInterval) {
            clearInterval(this.counterInterval);
            this.counterInterval = null;
        }
    }

    dismiss () {
        window.clearInterval(this.counterInterval);

        if (typeof this.options.completeCallback === "function") {
            this.options.completeCallback();
        }

        this.el.parentNode.removeChild(this.el);
        Toast._toasts.splice(Toast._toasts.indexOf(this), 1);

        if (Toast._toasts.length === 0) {
            Toast._removeContainer();
        }
    }
}

Toast._toasts = [];
Toast._container = null;

export default options => new Toast(options);
