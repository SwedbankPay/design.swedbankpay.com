const SELECTORS = {
    ALERT: ".alert",
    CLOSE: "[data-alert-close]"
};

const _hideAlert = alertElement => {
    alertElement.classList.remove("in");
};


export default {
    init: () => {
        const closeButtons = document.querySelectorAll(SELECTORS.CLOSE);

        closeButtons.forEach(btn => {
            const dataVal = btn.dataset.alertClose;

            if (dataVal) {
                const alert = document.getElementById(dataVal);

                btn.addEventListener("click", () => {
                    _hideAlert(alert);
                });

            } else {
                const alert = btn.closest(SELECTORS.ALERT);

                btn.addEventListener("click", () => {
                    _hideAlert(alert);
                });
            }
        });
    }
};
