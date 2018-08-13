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
        const toastElement = this._createToast();
        toastElement.pxToast = this;
        this.el = toastElement;
        this._animateIn();
        this._setTimer();
    }

    static _createContainer () {
        const container = document.createElement("div");
        container.setAttribute("id", "toast-container");

<<<<<<< HEAD
        // TODO: Add event handlers
=======
        // TODO: Create event handlers
>>>>>>> a82754fa1c2e31668c512b15559ac105f8b1cce1

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
        toast.classList.add("toast");

        if (this.options.classes.length && typeof this.options.classes === "object") {
            this.options.classes.forEach(c => toast.classList.add(c));
        }

        // Set content
        if (typeof HTMLElement === "object"
            ? this.message instanceof HTMLElement
            : this.message &&
                typeof this.message === "object" &&
                this.message !== null &&
                this.message.nodeType === 1 &&
                typeof this.message.nodeName === "string") {
            toast.appendChild(this.message);

            // Insert as html
        } else {
            toast.innerHTML = this.message;
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

    _animateIn () {
        // TODO: Add animation
    }

    _setTimer () {
        if (this.timeRemaining !== Infinity) {
            this.counterInterval = setInterval(() => {
                // If toast is not being dragged, decrease its time remaining
                if (!this.panning) {
                    this.timeRemaining -= 20;
                }

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
        const activationDistance = this.el.offsetWidth * this.options.activationPercent;

        if (this.wasSwiped) {
            this.el.style.transition = "transform 0.05s, opacity 0.05s";
            this.el.style.transform = `translateX(${activationDistance}px)`;
            this.el.style.opacity = 0;
        }

        // TODO: Wrap this in animation callback function:
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
Toast._draggedToast = null;

export default options => new Toast(options);
