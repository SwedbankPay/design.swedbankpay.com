import { hashId } from "../utils";

const SELECTORS = {
    ALERT: ".alert",
    CLOSE: "[data-alert-close]"
};

const _hideAlert = alertElement => {
    alertElement.classList.add("d-none");

    return true;
};

const close = id => {
    const alertId = hashId(id);
    const alertSelector = alertId ? document.querySelector(alertId) : console.warn("No ID was passed");

    return alertSelector ? _hideAlert(alertSelector) : console.warn(`No alert with with id ${id} was found, make sure the attribute data-alert-close contains the correct id.`);
};

const init = () => {
    const closeButtons = document.querySelectorAll(SELECTORS.CLOSE);

    if (closeButtons.length) {
        closeButtons.forEach(btn => {
            const dataVal = btn.dataset.alertClose;

            if (dataVal) {
                const alert = document.getElementById(dataVal);

                if (alert) {
                    btn.addEventListener("click", e => {
                        e.preventDefault();
                        _hideAlert(alert);
                    });
                } else {
                    console.warn(`No alert with with id ${dataVal} was found, make sure the attribute data-alert-close contains the correct id.`);
                }

            } else {
                const alert = btn.closest(SELECTORS.ALERT);

                btn.addEventListener("click", e => {
                    e.preventDefault();
                    _hideAlert(alert);
                });
            }
        });

        return {};
    }

    return null;
};

export default {
    init,
    close
};
