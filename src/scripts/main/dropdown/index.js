const SELECTORS = {
	DROPDOWNLIST: ".dropdown",
	DROPDOWNMENU: ".dropdown-menu",
	TOGGLE: ".dropdown-toggle",
	FOCUSELEMENTSFIRSTLEVELARROW:
		':scope > a[href], :scope > button:not([disabled]), :scope > [tabindex="0"]',
	FOCUSELEMENTSFIRSTMOVE:
		'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
};

const openMenu = (container) => container.classList.add("active");

const closeMenu = (container) => container.classList.remove("active");

const isOpen = (container) => container.classList.contains("active");

const toggleMenu = (container) =>
	isOpen(container) ? closeMenu(container) : openMenu(container);

const toggleBtnListener = (e) => toggleMenu(e.target?.closest(".dropdown"));

const listenToToggleBtn = (toggleBtn) => {
	try {
		toggleBtn.addEventListener("click", toggleBtnListener);
	} catch (e) {
		console.warn(
			"No toggle element exist, add an element with the class .dropdown-toggle",
		);
	}
};

const listenToClickOutsideDropdown = (dropdownContainer) => {
	const closeMenuOnClickOutsideMenu = (e) =>
		e.target?.closest(SELECTORS.DROPDOWNLIST) !== dropdownContainer &&
		isOpen(dropdownContainer)
			? closeMenu(dropdownContainer)
			: null;

	document.addEventListener("click", closeMenuOnClickOutsideMenu);
};

const closeContainerFromEvent = (e) =>
	closeMenu(e.target?.closest(".dropdown"));

const closesOnLinkOrBtnClick = (dropdownMenu) => {
	dropdownMenu
		.querySelectorAll("a, button")
		?.forEach((link) =>
			link.addEventListener("click", closeContainerFromEvent),
		);
};

const init = (id) => {
	let dropdownContainers;
	let dropdownToggles;
	let dropdownMenu;

	if (id) {
		dropdownContainers = document?.getElementById(id);

		if (!dropdownContainers) {
			console.error(
				`No dropdown found corresponding with the id provided in dropdown.init() passing this id value: "${id}"`,
			);

			return null;
		}
		dropdownToggles = dropdownContainers.querySelector(SELECTORS.TOGGLE);
		dropdownMenu = dropdownContainers.querySelector(SELECTORS.DROPDOWNMENU);
	} else {
		dropdownContainers = document.querySelectorAll(SELECTORS.DROPDOWNLIST);
		dropdownToggles = document.querySelectorAll(
			`${SELECTORS.DROPDOWNLIST} ${SELECTORS.TOGGLE}`,
		);
		dropdownMenu = document.querySelectorAll(
			`${SELECTORS.DROPDOWNLIST} ${SELECTORS.DROPDOWNMENU}
    `,
		);
	}

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

	dropdownContainers.forEach((dropdownContainer) => {
		listenToToggleBtn(dropdownContainer.querySelector(SELECTORS.TOGGLE));
		listenToClickOutsideDropdown(dropdownContainer);
		closesOnLinkOrBtnClick(
			dropdownContainer.querySelector(SELECTORS.DROPDOWNMENU),
		);
		checkAndAddMenuKeyboardNavigation(
			dropdownContainer,
			dropdownContainer.querySelector(SELECTORS.DROPDOWNMENU),
		);
	});
};

const isDisablingDefaultKeyboardNav = (dropdownContainer) =>
	dropdownContainer?.dataset?.disableDefaultKayboardNav === "true";

const checkAndAddMenuKeyboardNavigation = (dropdownContainer, dropdownMenu) => {
	const initialFocusableElements =
		getFocusableElementsForFirstMoveOnly(dropdownMenu);

	if (isDisablingDefaultKeyboardNav() || !initialFocusableElements?.length) {
		// don't modify the keyboard navigation
		return null;
	} else {
		dropdownContainer.addEventListener("keydown", keyboardListener);
	}
};

const keyboardNavOnlyToFirstItem = (dropdownMenu) => {
	const initialFocusableElements = getFocusableElements(dropdownMenu);

	return initialFocusableElements.length !== dropdownMenu.childElementCount;
};

// Find focusable elements
const getFocusableElements = (dropdownMenu) => [
	...dropdownMenu.querySelectorAll(SELECTORS.FOCUSELEMENTSFIRSTLEVELARROW),
];
const getFocusableElementsForFirstMoveOnly = (dropdownMenu) => [
	...dropdownMenu.querySelectorAll(SELECTORS.FOCUSELEMENTSFIRSTMOVE),
];

const keyboardListener = (e) => {
	const dropdownContainer = e.target.closest(".dropdown");

	const dropdownMenu = dropdownContainer.querySelector(SELECTORS.DROPDOWNMENU);
	const dropdownToggle = dropdownContainer.querySelector(SELECTORS.TOGGLE);

	const listItems = getFocusableElements(dropdownMenu);
	const listItemsForFirstMoveOnly =
		getFocusableElementsForFirstMoveOnly(dropdownMenu);

	const activeElement = document.activeElement;

	if (!dropdownContainer.classList.contains("active")) {
		return null;
	}

	if (e.code === "ArrowDown") {
		if (activeElement === dropdownToggle) {
			listItemsForFirstMoveOnly[0].focus();
			e.preventDefault();
		} else if (
			listItems.find((el) => activeElement === el) &&
			!keyboardNavOnlyToFirstItem(dropdownMenu)
		) {
			const activeItemIndex = listItems.findIndex((el) => activeElement === el);

			listItems[
				activeItemIndex === listItems.length - 1 ? 0 : activeItemIndex + 1
			]?.focus();
			e.preventDefault();
		}
	}

	if (e.code === "ArrowUp") {
		if (activeElement === dropdownToggle) {
			listItemsForFirstMoveOnly[listItemsForFirstMoveOnly.length - 1].focus();
			e.preventDefault();
		} else if (
			listItems.find((el) => activeElement === el) &&
			!keyboardNavOnlyToFirstItem(dropdownMenu)
		) {
			const activeItemIndex = listItems.findIndex((el) => activeElement === el);

			listItems[
				activeItemIndex === 0 ? listItems.length - 1 : activeItemIndex - 1
			]?.focus();
			e.preventDefault();
		}
	}

	if (e.key === "Esc" || e.key === "Escape") {
		dropdownToggle.focus();
		closeMenu(dropdownContainer);
	}
};

export default { init };
