import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "@testing-library/react";
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
                <button className="btn btn-primary" type="button" data-dialog-open={btnId}>
                    Open dialog
                </button>
                <div className="dialog" id={id} role="dialog" aria-modal="true">
                    <section>
                        <header className="dialog-header">
                            <h4>Delete item 456?</h4><button type="button" className="dialog-close"><i className="material-icons" aria-hidden="true">close</i></button>
                        </header>
                        <div className="dialog-body">
                            <p>Are you sure you want to permanently delete the item <i>German Swashbuckle (456)?</i></p>
                        </div>
                        <footer className="dialog-footer">
                            <button className="btn btn-secondary" type="button" data-dialog-close>Cancel</button>
                            <button className="btn btn-primary" type="button">Delete</button>
                        </footer>
                    </section>
                </div>
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

            const renderedDialog = container.querySelector(".dialog");

            expect(renderedDialog).toBeTruthy();

            const returnVal = dialog.init("demo-dialog");

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of objects when more than one dialog is initialized", () => {
            const { container } = render(
                <>
                    <Dialog />
                    <Dialog />
                </>);

            const renderedDialog = container.querySelectorAll(".dialog");

            expect(renderedDialog).toBeTruthy();
            expect(renderedDialog.length).toEqual(2);

            const returnVal = dialog.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
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

    it("button with attribute 'data-dialog-open' pointing to the correct id opens corresponding dialog", () => {
        const { container } = render(<Dialog id="demo-dialog" />);

        const openBtn = container.querySelector("[data-dialog-open]");

        dialog.init();
        expect(document.body.classList).not.toContain("dialog-open");

        openBtn.click();
        expect(document.body.classList).toContain("dialog-open");
    });

    it("button with attribute 'data-dialog-close' pointing to the correct id closes corresponding dialog", () => {
        const { container } = render(<Dialog id="demo-dialog" open />);

        const closeBtn = container.querySelector("[data-dialog-close]");

        dialog.init();

        userEvent.click(closeBtn);
        expect(document.body.classList).not.toContain("dialog-open");
    });

    it("closes dialog when clicking the close icon", () => {
        const { container } = render(<Dialog id="demo-dialog" open />);

        const renderedDialog = container.querySelector(".dialog");
        const closeIcon = renderedDialog.querySelector(".dialog-close");

        dialog.init();

        userEvent.click(closeIcon);

        expect(document.body.classList).not.toContain("dialog-open");
    });

    it("sets focus on the last focusable element when dialog is opened", () => {
        const { container } = render(<Dialog id="dia-id"/>);

        const delBtn = container.querySelector(".dialog").querySelector(".btn-primary");

        dialog.init();
        dialog.open("dia-id");

        expect(delBtn).toHaveFocus();
    });

    // It is not possible to trigger a focus change with keyboardevents, this is due to some security issues with JS [AW]
    it.skip("changes focus from the last focusable element to the first focusable element when focus change is induced", () => {
        const { container } = render(<Dialog id="dia-id"/>);

        const dialogElem = container.querySelector(".dialog");

        const diaObj = dialog.init()[0];

        diaObj.open();
        userEvent.tab({ focusTrap: dialogElem });

        expect(diaObj.firstTabStop).toHaveFocus();
    });

    it("changes focus from the first focusable element to the last focusable element when focus change is induced", () => {
        const { container } = render(<Dialog id="dia-id"/>);

        const dialogElem = container.querySelector(".dialog");
        const sEv = new KeyboardEvent("keydown", {
            shiftKey: true,
            key: "Tab"
        });
        const ev = new KeyboardEvent("keydown", { key: "Tab" });
        const diaObj = dialog.init()[0];

        diaObj.open();
        dialogElem.dispatchEvent(ev);
        dialogElem.dispatchEvent(sEv);

        expect(diaObj.lastTabStop).toHaveFocus();
    });

    it("closes the dialog when escape button is pressed", () => {
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

            expect(console.warn).toHaveBeenCalledWith("dialog.open: No dialog with id \"qwerty\" found.");

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

            expect(console.warn).toHaveBeenCalledWith("dialog.close: No dialog with id \"qwerty\" found.");
        });
    });
});
