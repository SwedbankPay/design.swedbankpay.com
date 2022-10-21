const SELECTORS = {
    DROPDOWNLIST: ".dropdown",
    DROPDOWNMENU: ".dropdown-menu",
    TOGGLE: ".dropdown-toggle"
};

const openMenu = container => container.classList.add("active");

const closeMenu = container => container.classList.remove("active");

const isOpen = container => container.classList.contains("active");

const toggleMenu = container => isOpen(container) ? closeMenu(container) : openMenu(container);

const toggleBtnListener = e => toggleMenu(e.target?.closest(".dropdown"));

const listenToToggleBtn = toggleBtn => {
    try {
        toggleBtn.addEventListener("click", toggleBtnListener);
    } catch (e) {
        console.warn("No toggle element exist, add an element with the class .dropdown-toggle");
    }
};

const closeMenuOnEscape = e => e.key === "Escape" ? [...document.querySelectorAll(".dropdown.active")]?.map(containerToClose => closeMenu(containerToClose)) : null;

const listenToEscToCloseMenu = () => document.addEventListener("keydown", closeMenuOnEscape);

// closes the menu if user clicks outside the dropdown menu && the menu is opened
const listenToClickOutsideDropdown = dropdownContainer => {
    const closeMenuOnClickOutsideMenu = e => e.target?.closest(SELECTORS.DROPDOWNLIST) !== dropdownContainer && isOpen(dropdownContainer) ? closeMenu(dropdownContainer) : null;

    document.addEventListener("click", closeMenuOnClickOutsideMenu);
};

const closeContainerFromEvent = e => closeMenu(e.target?.closest(".dropdown"));

// closes the menu if user clicks a button or link in the dropdown menu
const closesOnLinkOrBtnClick = dropdownMenu => {
    [...dropdownMenu.querySelectorAll("a, button")]?.forEach(link => link.addEventListener("click", closeContainerFromEvent));
};

const init = () => {
    const dropdownContainers = document.querySelectorAll(SELECTORS.DROPDOWNLIST);
    const dropdownToggles = document.querySelectorAll(`${SELECTORS.DROPDOWNLIST} ${SELECTORS.TOGGLE}`);
    const dropdownMenu = document.querySelectorAll(`${SELECTORS.DROPDOWNLIST} ${SELECTORS.DROPDOWNMENU}`);

    if (!dropdownContainers.length) {
        console.warn("No dropdown container found");

        return null;
    }

    if (!dropdownToggles.length) {
        console.warn("No dropdown toggle button found");

        return null;
    }

    if (!dropdownMenu.length) {
        console.warn("No dropdown menu found");

        return null;
    }

    [...dropdownContainers].map(dropdownContainer => {
        listenToToggleBtn(dropdownContainer.querySelector(".dropdown-toggle"));
        listenToClickOutsideDropdown(dropdownContainer);
        closesOnLinkOrBtnClick(dropdownContainer.querySelector(".dropdown-menu"));
    });

    listenToEscToCloseMenu();

};

export default { init };
