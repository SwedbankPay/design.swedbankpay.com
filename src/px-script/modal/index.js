const SELECTORS = {
    MODAL: ".modal",
    CLOSE: "[data-modal-close]",
    OPEN: "[data-modal-open]",
    CLOSEICON: ".modal-close"
};

const _openModal = modal => {
    modal.classList.add("d-block");
    document.body.classList.add("modal-open");
};

const _closeModal = modal => {
    modal.classList.remove("d-block");
    document.body.classList.remove("modal-open");
};

const modal = (() => {
    const init = () => {
        const modals = document.querySelectorAll(SELECTORS.MODAL);
        const closeButtons = document.querySelectorAll(SELECTORS.CLOSE);
        const openButtons = document.querySelectorAll(SELECTORS.OPEN);

        modals.forEach(modal => {
            const closeBtn = modal.querySelector(SELECTORS.CLOSE);
            const closeIcon = modal.querySelector(SELECTORS.CLOSEICON);

            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    _closeModal(modal);
                });
            }

            if (closeIcon) {
                closeIcon.addEventListener("click", e => {
                    e.preventDefault();
                    _closeModal(modal);
                });
            }

            // close the modal when clicking outside
            modal.addEventListener("click", e => {
                if (e.target.classList.contains("d-block")) {
                    _closeModal(modal);
                }
            });
        });

        closeButtons.forEach(btn => {
            const modalId = btn.dataset.modalClose;
            const targetModal = document.getElementById(modalId);

            if (targetModal) {
                btn.addEventListener("click", () => {
                    _closeModal(targetModal);
                });
            } else {
                console.warn(`CLOSE: No modal with with id ${modalId} was found, make sure the attribute data-modal-close contains the correct id.`);
            }
        });

        openButtons.forEach(btn => {
            const modalId = btn.dataset.modalOpen;
            const modal = document.getElementById(modalId);

            if (modal) {
                btn.addEventListener("click", () => {
                    _openModal(modal, true);
                });
            } else {
                console.warn(`OPEN: No modal with with id ${modalId} was found, make sure the attribute data-modal-open contains the correct id.`);
            }
        });

        // Close modals on esc
        document.addEventListener("keydown", e => {
            if (e.keyCode === 27) {
                const modal = document.querySelector(".modal.d-block");
                if (modal) {
                    _closeModal(modal);
                }
            }
        });
    };

    return { init };
})();

export default modal;
