const alert = () => {
    const SELECTORS = {
        ALERT: ".alert",
        ALERTCLOSE: ".alert>.alert-close",
        EXTERNALCLOSE: "[data-px-alert-close]"
    };

    class Alert {
        constructor (element) {
            this._element = element;
            this._closeButton = element.querySelector(SELECTORS.ALERTCLOSE) || null;
            this._events = [];

            if (this._closeButton) {
                this._closeButton.addEventListener("click", this.hide.bind(this));
            }
        }

        hide () {
            this._element.classList.remove("in");
            return this;
        }

        show () {
            this._element.classList.add("in");
            return this;
        }
    }

    const _alerts = [...document.querySelectorAll(SELECTORS.ALERT)].map(alertElement => new Alert(alertElement));

    return { _alerts };
};

export default alert;
