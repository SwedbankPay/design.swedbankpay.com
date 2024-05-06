import React from "react";
import { createRoot } from "react-dom/client";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import dialog from "./index";

describe("scripts: dialog", () => {
	const div = document.createElement("div");

	document.body.appendChild(div);

	const root = createRoot(div);

	const Dialog = ({ id, btnId }) => {
		btnId = btnId ? btnId : id;

		return (
			<>
				<button
					className="btn btn-primary"
					type="button"
					data-dialog-open={btnId}
				>
					Open dialog
				</button>
				<dialog
					id={id}
					aria-modal="true"
					aria-labelledby="aria-label-dia"
					aria-describedby="aria-describe-dia"
				>
					<header>
						<h4>Delete</h4>
						<button
							type="button"
							className="dialog-close"
							aria-label="Close dialog"
							data-dialog-close="true"
						></button>
					</header>
					<div className="dialog-body">
						<p>
							You’re about to permanently delete{" "}
							<i>German Swashbuckle (456)?</i>
						</p>
					</div>
					<footer>
						<button
							className="btn btn-secondary"
							type="button"
							data-dialog-close="true"
						>
							Cancel
						</button>
						<button className="btn btn-primary" type="button">
							Delete
						</button>
					</footer>
				</dialog>
			</>
		);
	};

	beforeEach(() => {
		document.body.classList.remove("dialog-open");
	});

	it("is defined", () => {
		expect(dialog).toBeDefined();
	});

	describe("dialog.init", () => {
		it("has an init method", () => {
			expect(dialog.init).toBeDefined();
			expect(dialog.init).toBeInstanceOf(Function);
		});
		it("returns a single object when one ID is passed", () => {
			const { container } = render(<Dialog id="demo-dialog" />);

			const renderedDialog = screen.queryByRole("dialog");

			expect(renderedDialog).not.toBeInTheDocument();

			const returnVal = dialog.init("demo-dialog");

			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
		});

		it("returns an array of objects when more than one dialog is initialized", () => {
			const { container } = render(
				<>
					<Dialog id="dialog-1" />
					<Dialog id="dialog-2" />
				</>,
			);
			const returnVal = dialog.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);

			const renderedDialog = screen.queryAllByRole("dialog");

			expect(renderedDialog.length).toBe(0);
		});

		it("init returns null if no dialog is found and prints a warning message", () => {
			console.warn = jest.fn();

			expect(dialog.init()).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});

		it("returns null if an invalid ID is passed and prints a warning message", () => {
			console.warn = jest.fn();

			expect(dialog.init("test")).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});
	});

	it.skip("button with attribute 'data-dialog-open' pointing to the correct id opens corresponding dialog", async () => {
		const { container } = render(<Dialog id="demo-dialog" />);

		const openBtn = screen.getByRole("button", { name: "Open dialog" });

		expect(openBtn).toBeInTheDocument();

		dialog.init();

		let dialogEl = screen.queryByRole("dialog");

		expect(dialogEl).not.toBeInTheDocument();

		const user = userEvent.setup();

		user.click(openBtn);

		await waitFor(() => new Promise((res) => setTimeout(res, 500)));
		dialogEl = screen.getByRole("dialog");

		expect(dialogEl).toHaveAttribute("open");
	});

	it.skip("button with attribute 'data-dialog-close' pointing to the correct id closes corresponding dialog", async () => {
		const { container } = render(<Dialog id="demo-dialog" />);

		const openBtn = screen.getByRole("button", { name: "Open dialog" });
		const dialogEl = screen.getByRole("dialog");

		expect(closeBtn).toBeInTheDocument();

		dialog.init();

		const user = userEvent.setup();

		user.click(openBtn);

		expect(dialogEl).toHaveAttribute("open");
		const closeBtn = screen.getByRole("button", { name: "Cancel" });
		user.click(closeBtn);
		await waitFor(() => new Promise((res) => setTimeout(res, 500)));

		expect(dialogEl).not.toHaveAttribute("open");
	});

	it.skip("closes dialog when clicking the close icon", async () => {
		const { container } = render(<Dialog id="demo-dialog" open />);

		const renderedDialog = container.querySelector(".dialog");
		const closeIcon = renderedDialog.querySelector(".dialog-close");

		dialog.init();

		userEvent.click(closeIcon);

		expect(document.body.classList).not.toContain("dialog-open");
	});

	it.skip("sets focus on the last focusable element when dialog is opened", () => {
		const { container } = render(<Dialog id="dia-id" />);

		const delBtn = container
			.querySelector(".dialog")
			.querySelector(".btn-primary");

		dialog.init();
		dialog.open("dia-id");

		expect(delBtn).toHaveFocus();
	});

	// It is not possible to trigger a focus change with keyboardevents, this is due to some security issues with JS [AW]
	it.skip("changes focus from the last focusable element to the first focusable element when focus change is induced", () => {
		const { container } = render(<Dialog id="dia-id" />);

		const dialogElem = container.querySelector(".dialog");

		const diaObj = dialog.init()[0];

		diaObj.open();
		userEvent.tab({ focusTrap: dialogElem });

		expect(diaObj.firstTabStop).toHaveFocus();
	});

	it.skip("changes focus from the first focusable element to the last focusable element when focus change is induced", () => {
		const { container } = render(<Dialog id="dia-id" />);

		const dialogElem = container.querySelector(".dialog");
		const sEv = new KeyboardEvent("keydown", {
			shiftKey: true,
			key: "Tab",
		});
		const ev = new KeyboardEvent("keydown", { key: "Tab" });
		const diaObj = dialog.init()[0];

		diaObj.open();
		dialogElem.dispatchEvent(ev);
		dialogElem.dispatchEvent(sEv);

		expect(diaObj.lastTabStop).toHaveFocus();
	});

	it.skip("closes the dialog when escape button is pressed", () => {
		const { container } = render(<Dialog id="dialog-id" />);

		const dialogElement = container.querySelector(".dialog");
		const escapeEvent = new KeyboardEvent("keydown", { key: "Escape" });
		const dialogObject = dialog.init()[0];

		dialogObject.open();
		dialogElement.dispatchEvent(escapeEvent);

		expect(document.body.classList).not.toContain("dialog-open");
	});

	describe("dialog.open", () => {
		it("opens dialog when calling dialog.open", () => {
			root.render(<Dialog id="demo-dialog" />);

			expect(document.body.classList).not.toContain("dialog-open");

			dialog.init();
			expect(document.body.classList).not.toContain("dialog-open");

			dialog.open("demo-dialog");

			expect(document.body.classList).toContain("dialog-open");
		});

		it("does not open dialog when calling dialog.open with wrong id and prints warn to console", () => {
			console.warn = jest.fn();
			root.render(<Dialog id="demo-dialog" />);

			dialog.init();
			expect(document.body.classList).not.toContain("dialog-open");

			dialog.open("qwerty");

			expect(console.warn).toHaveBeenCalledWith(
				'dialog.open: No dialog with id "qwerty" found.',
			);

			expect(document.body.classList).not.toContain("dialog-open");
		});
	});

	describe("dialog.close", () => {
		it("closes dialog when calling dialog.close", () => {
			root.render(<Dialog id="demo-dialog" open />);

			dialog.init();

			dialog.close("demo-dialog");

			expect(document.body.classList).not.toContain("dialog-open");
		});

		it("does not close dialog when calling dialog.close with wrong id and prints warn to console", () => {
			console.warn = jest.fn();
			root.render(<Dialog id="demo-dialog" open />);

			dialog.init();

			dialog.close("qwerty");

			expect(console.warn).toHaveBeenCalledWith(
				'dialog.close: No dialog with id "qwerty" found.',
			);
		});
	});
});
