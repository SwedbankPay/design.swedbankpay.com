const _openModal = modal => {
    modal.classList.add("in");
    document.body.classList.add("modal-open");
};

const _closeModal = modal => {
    modal.classList.remove("in");
    document.body.classList.remove("modal-open");
};

const init = () => {
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll("[data-px-modal-close]");
    const openButtons = document.querySelectorAll("[data-px-modal-open]");

    modals.forEach(modal => {
        const closeBtn = modal.querySelector(".modal-close");

        closeBtn.addEventListener("click", () => {
            _closeModal(modal);
        });

        // close the modal when clicking outside
        modal.addEventListener("click", e => {
            if (e.target.classList.contains("in")) {
                _closeModal(modal);
            }
        });
    });

    closeButtons.forEach(btn => {
        const modalId = btn.dataset.pxModalClose;
        const parentModal = document.getElementById(modalId);

        if (parentModal) {
            btn.addEventListener("click", () => {
                _closeModal(parentModal);
            });
        } else {
            console.warn(`No modal with with id ${modalId} was found, make sure the attribute data-px-modal-close contains the correct id.`);
        }
    });

    openButtons.forEach(btn => {
        const modalId = btn.dataset.pxModalOpen;
        const modal = document.getElementById(modalId);

        if (modal) {
            btn.addEventListener("click", () => {
                _openModal(modal, true);
            });
        } else {
            console.warn(`No modal with with id ${modalId} was found, make sure the attribute data-px-modal-open contains the correct id.`);
        }
    });

    // Close modals on esc
    document.addEventListener("keydown", e => {
        if (e.keyCode === 27) {
            const modal = document.querySelector(".modal.in");
            _closeModal(modal);
        }
    });
};

const modal = { init };

export default modal;
