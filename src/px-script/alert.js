const _alerts = [];
const SELECTORS = {
    ALERT: ".alert",
    ALERTCLOSE: ".alert>.alert-close",
    EXTERNALCLOSE: "[data-px-alert-close]"
};

class Alert {
    constructor (element) {
        this._element = element;
        this._id = element.id || null;
        this._closeButton = element.querySelector(SELECTORS.ALERTCLOSE) || null;
        this._events = [];
        this._hideEvents = [];
        this._showEvents = [];

        if (this._closeButton) {
            this._closeButton.addEventListener("click", this.hide.bind(this));
        }
    }

    addEvent (event, cb) {
        this._element.addEventListener(event, cb);
        return this;
    }

    addCloseBtnEvent (event, cb) {
        this._closeButton.addEventListener(event, cb);
        return this;
    }

    onShow (cb) {
        this._showEvents.push(cb);
        return this;
    }

    onHide (cb) {
        this._hideEvents.push(cb);
        return this;
    }

    hide () {
        this._element.classList.remove("in");
        this._hideEvents.forEach(fn => {fn();});
        return this;
    }

    show () {
        this._element.classList.add("in");
        this._showEvents.forEach(fn => {fn();});
        return this;
    }
}

const init = () => {
    document.querySelectorAll(".alert").forEach(alertElement => _alerts.push(new Alert(alertElement)));
    return _alerts;
};

export default id => {
    if (id) {
        let selectedAlert = null;

        _alerts.forEach(alert => {
            if (alert._id === id) {
                selectedAlert = alert;
            }
        });

        return selectedAlert;

    } else {
        return {
            _alerts,
            init
        };
    }
};
