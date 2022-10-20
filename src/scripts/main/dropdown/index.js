const SELECTORS = {
    DROPDOWNLIST: ".dropdown",
    DROPDOWNMENU: ".dropdown-menu",
    TOGGLE: ".dropdown-toggle"
};

const openMenu = container => {
    container.classList.add("active");
};

const closeMenu = container => {
    container.classList.remove("active");
};

const isOpen = container => container.classList.contains("active");

const toggleMenu = container => isOpen(container) ? closeMenu(container) : openMenu(container);

const listenToToggleBtn = toggleBtn => {
    try {
        toggleBtn.addEventListener("click", () => {
            toggleMenu(toggleBtn.closest(".dropdown"));
        });
    } catch (e) {
        console.warn("No toggle element exist, add an element with the class .dropdown-toggle");
    }
};

const listenToEscToCloseMenu = () => {
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            [...document.querySelectorAll(".dropdown.active")].map(containerToClose => closeMenu(containerToClose));
        }
    });
};

// closes the menu if user clicks outside the dropdown menu && the menu is opened
const closeMenuOnClickOutsideDropdown = dropdownContainer => {
    document.addEventListener("click", e => {
        if (e.target.closest(SELECTORS.DROPDOWNLIST) !== dropdownContainer && isOpen(dropdownContainer)) {
            closeMenu(dropdownContainer);
        }
    });
};

// closes the menu if user clicks a button or link in the dropdown menu
const closesOnLinkOrBtnClick = container => {
    [...container.querySelectorAll("a, button")].forEach(link => link.addEventListener("click", () => close(container)));
};

const init = () => {
    const dropdownContainers = document.querySelectorAll(SELECTORS.DROPDOWNLIST);

    if (!dropdownContainers.length) {
        console.warn("No dropdown lists found");

        return null;
    }

    [...dropdownContainers].map(dropdownContainer => {
        listenToToggleBtn(dropdownContainer);
        closeMenuOnClickOutsideDropdown(dropdownContainer);
        closesOnLinkOrBtnClick(dropdownContainer);
    });

    listenToEscToCloseMenu();

};

export default { init };
