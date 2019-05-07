import { hashId } from "../utils";

const SELECTORS = {
    ALERT: ".alert",
    CLOSE: "[data-alert-close]"
};

const _hideAlert = alertElement => {
    alertElement.classList.add("d-none");

    return true;
};

const _addEventListener = (btn, alert) => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        _hideAlert(alert);
    });
};

const close = id => {
    const alertId = hashId(id);
    const alertSelector = alertId ? document.querySelector(alertId) : console.warn("No ID was passed");

    return alertSelector ? _hideAlert(alertSelector) : console.warn(`No alert with with id ${id} was found, make sure the attribute data-alert-close contains the correct id.`);
};

const init = id => {
    const alertId = hashId(id);
    const alertSelector = alertId ? document.querySelectorAll(alertId) : document.querySelectorAll(SELECTORS.ALERT);
    let alerts = [];

    if (alertSelector.length) {
        alerts = [...alertSelector].map(alert => {
            const externalClose = alert.id ? document.querySelectorAll(`[data-alert-close=${alert.id}]`) : null;
            const internalClose = alert.querySelectorAll(SELECTORS.CLOSE);
            const closeBtns = [];

            if (externalClose && externalClose.length) {
                [...externalClose].forEach(btn => {
                    _addEventListener(btn, alert);

                    closeBtns.push(btn);
                });
            }

            [...internalClose].forEach(btn => {
                _addEventListener(btn, alert);

                closeBtns.push(btn);
            });

            return {
                container: alert,
                closeBtns: closeBtns.length ? (closeBtns.length === 1 ? closeBtns[0] : closeBtns) : null
            };
        });

        return alerts.length === 1 ? alerts[0] : alerts;
    }

    return null;
};

export default {
    init,
    close
};
