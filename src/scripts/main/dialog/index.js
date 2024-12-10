import { openComponent, closeComponent } from "../utils";

const SELECTORS = {
	DIALOG: ".dialog",
	CLOSE: "[data-dialog-close]",
	OPEN: "[data-dialog-open]",
	CLOSEICON: ".dialog-close",
};

const FOCUSELEMENTS =
	'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

const _dialogs = [];

class Dialog {
	constructor(el) {
		this._el = el;
		this.id = el.id;
		this.closeIcon = el.querySelector(SELECTORS.CLOSEICON);
		this.header = el.querySelector(".dialog-header");
		this.isOpen = el.style.display === "flex";

		// Find all related buttons
		this.openBtns = this.id
			? [...document.querySelectorAll(`[data-dialog-open=${this.id}]`)]
			: [];
		this.closeBtn = this._el.querySelector("[data-dialog-close]");

		// Find focusable elements
		this.focusedElemBeforeDialog = null;
		this.focusableElements = [...el.querySelectorAll(FOCUSELEMENTS)];
		this.firstTabStop = this.focusableElements[0];
		this.lastTabStop =
			this.focusableElements[this.focusableElements.length - 1];

		if (this.closeIcon) {
			this.closeIcon.addEventListener("click", (e) => {
				e.preventDefault();
				this.close();
			});
		}

		if (this.isOpen) {
			document.body.classList.add("dialog-open");
		}

		this._initializeListeners();
	}

	_initializeListeners() {
		this._el.addEventListener("keydown", (e) => {
			if (e.key === "Tab") {
				// SHIFT + TAB
				if (e.shiftKey) {
					if (document.activeElement === this.firstTabStop) {
						e.preventDefault();
						this.lastTabStop.focus();
					}

					// TAB
				} else if (document.activeElement === this.lastTabStop) {
					e.preventDefault();
					this.firstTabStop.focus();
				}
			}

			if (e.key === "Esc" || e.key === "Escape") {
				this.close();
			}
		});

		// Init open buttons
		if (this.openBtns.length) {
			this.openBtns.forEach((btn) => {
				btn.addEventListener("click", (e) => {
					e.preventDefault();
					this.open();
				});
			});
		}

		// Init close buttons
		if (this.closeBtn) {
			this.closeBtn.addEventListener("click", (e) => {
				e.preventDefault();
				this.close();
			});
		}

		window.addEventListener("popstate", () => {
			if (document.body.className.includes("dialog-open")) {
				document.body.classList.remove("dialog-open");
			}
		});
	}

	open() {
		this.focusedElemBeforeDialog = document.activeElement;

		this.isOpen = true;
		document.body.classList.add("dialog-open");
		this.lastTabStop.focus();

		return this._el;
	}

	close() {
		this.isOpen = false;
		document.body.classList.remove("dialog-open");
		this.focusedElemBeforeDialog ? this.focusedElemBeforeDialog.focus() : null;

		return this._el;
	}
}

const _createDialog = (dialogQuery) => {
	const dialogObject = new Dialog(dialogQuery);

	_dialogs.push(dialogObject);

	return dialogObject;
};

// MARK: script for <dialog> element

const _activateDialogElement = (dialog) => {
	const dialogInvokers = document.querySelectorAll(
		`button[data-dialog-open="${dialog.id}"]`,
	);
	const closeDialogButtons = dialog.querySelectorAll(
		"button[data-dialog-close]",
	);

	if (!dialogInvokers.length) {
		console.warn(
			"There was no open button implemented for the dialog. Please make sure you add at least 1 button with the correct attributes to your HTML for the script to work (or do not call this script and use the JS methods on your side)",
		);

		return;
	}

	if (!closeDialogButtons.length) {
		console.warn(
			"There was no close button implemented for the dialog. Please make sure you add at least 1 button with the correct attributes to your HTML for the script to work (or do not call this script and use the JS methods on your side)",
		);

		return;
	}

	// add event listener on dialogInvokers, it should call dialog.showModal()
	[...dialogInvokers]?.map((invokerBtn) =>
		invokerBtn?.addEventListener("click", () => {
			dialog.showModal();
		}),
	);

	// add event listener on dialogs close button, it should call dialog.close()
	[...closeDialogButtons]?.map((closeBtn) =>
		closeBtn?.addEventListener("click", () => {
			dialog.close();
		}),
	);

	return dialog;
};

const init = (id) => {
	if (id) {
		const dialog = document.getElementById(id);

		if (!dialog) {
			console.warn(`No dialog with id ${id} found`);

			return null;
		}

		if (dialog?.tagName.toLowerCase() === "dialog") {
			return _activateDialogElement(dialog);
		} else {
			return _createDialog(dialog);
		}
	} else {
		const dialogsLegacy = document.querySelectorAll(SELECTORS.DIALOG);
		const modernDialogs = document.querySelectorAll("dialog");

		if (![...dialogsLegacy, ...modernDialogs].length) {
			console.warn("No dialogs found");

			return null;
		}

		return [
			...[...dialogsLegacy].map((dialog) => _createDialog(dialog)),
			...[...modernDialogs].map((dialog) => _activateDialogElement(dialog)),
		];
	}
};

const open = (id) =>
	document.getElementById(id)?.tagName.toLowerCase() === "dialog"
		? document.getElementById(id).showModal()
		: openComponent(id, "dialog", _dialogs);

const close = (id) =>
	document.getElementById(id)?.tagName.toLowerCase() === "dialog"
		? document.getElementById(id).close()
		: closeComponent(id, "dialog", _dialogs);

export default {
	init,
	open,
	close,
};
