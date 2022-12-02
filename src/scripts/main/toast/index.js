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
        this.evtTarget = this.options.event ? this.options.event.target : null;
        this.timeRemaining = this.options.displayLength; // Time remaining until the toast is removed.
        this.sheetComponent = document.querySelector(SELECTORS.SHEET.COMPONENT);
        this.sheetOpen = document.querySelector(SELECTORS.SHEET.OPEN);

        if (Toast._toasts.length === 0) {
            Toast._createContainer(this.evtTarget);
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
            displayLength: 5000,
            inDuration: 300,
            outDuration: 375,
            classes: [],
            completeCallback: null,
            activationPercent: 0.8
        };
    }

    static _createContainer (evtTarget) {
        const container = document.createElement("div");

        container.setAttribute("id", "toast-container");

        evtTarget ? evtTarget.after(container) : document.body.appendChild(container);
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
            const button = document.createElement("button");
            const icon = document.createElement("i");

            if (iconType === "close") {
                button.setAttribute("class", "toast-close");
                button.setAttribute("id", "toast-close-button");
                button.setAttribute("aria-label", "Close button");
                button.appendChild(icon);
            } else {
                icon.setAttribute("aria-hidden", "true");
            }

            icon.classList.add("material-icons");
            icon.innerHTML = iconType;

            if (dismiss) {
                button.addEventListener("click", () => {
                    this.dismiss();
                });
            }

            return iconType === "close" ? button : icon;
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

        if (this.options.dismissable) {
            toast.appendChild(_createIcon("close", true));
        }

        // Set content
        toastContent.classList.add("toast-content");
        toastContent.innerHTML = this.message;
        toastContent.setAttribute("role", "alert");

        toast.appendChild(toastContent);

        if (this.options.icon && !this.options.type) {
            toast.appendChild(_createIcon(this.options.icon));
        }

        toast.addEventListener("mouseenter", () => {
            this._clearTimer();
        });

        toast.addEventListener("mouseleave", () => {
            this._setTimer();
        });

        // Append toast
        Toast._container.appendChild(toast);

        if (this.options.dismissable) { this._focusMethod(); }

        return toast;
    }

    _focusMethod () {
        document.getElementById("toast-close-button").focus();
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
        this.el.classList.add("fade");
        window.clearInterval(this.counterInterval);

        setTimeout(() => {
            if (typeof this.options.completeCallback === "function") {
                this.options.completeCallback();
            }

            this.el.parentNode.removeChild(this.el);
            Toast._toasts.splice(Toast._toasts.indexOf(this), 1);

            if (Toast._toasts.length === 0) {
                Toast._removeContainer();
            }
        }, 300);
    }
}

Toast._toasts = [];
Toast._container = null;

export default options => new Toast(options);
