import { extendObj } from "../utils";

const _defaults = {
    html: "",
    displayLength: 4000,
    inDuration: 300,
    outDuration: 375,
    classes: [],
    completeCallback: null,
    activationPercent: 0.8
};

class Toast {
    constructor (options) {
        this.options = extendObj(true, _defaults, options);
        this.message = this.options.html;
        this.timeRemaining = this.options.displayLength; // Time remaining until the toast is removed.

        if (Toast._toasts.length === 0) {
            Toast._createContainer();
        }

        // Create new toast
        Toast._toasts.push(this);
    }

    static _createContainer () {
        const container = document.createElement("div");
        container.setAttribute("id", "toast-container");

        document.body.appendChild(container);
        this._container = container;

        console.log(container);
    }

    static _removeContainer () {}

    static _createToast () {
        const toast = document.createElement("div");
        toast.classList.add("toast");

        if (this.options.classes.length && typeof this.options.classes === "object") {
            this.options.classes.foreach(c => toast.classList.add(c));
        }
    }
}

Toast._toasts = [];
Toast._container = null;
Toast._draggedToast = null;

export default options => new Toast(options);
