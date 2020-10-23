import React from "react";
import ReactDOM from "react-dom";

import dialog from "./index";

describe("scripts: dialog", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const Dialog = ({ id, open, btnId }) => {
        btnId = btnId ? btnId : id;

        return (
            <>
                <button className="btn btn-primary" type="button" data-dialog-open={btnId}>
                    Open dialog
                </button>
                <div className={`dialog ${open ? " d-flex" : null}`} id={id} role="dialog" aria-modal="true">
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

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div);
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
            ReactDOM.render(<Dialog id="demo-dialog" />, div);

            const renderedDialog = document.querySelector(".dialog");

            expect(renderedDialog).toBeTruthy();

            const returnVal = dialog.init("demo-dialog");

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of objects when more than one dialog is initialized", () => {
            ReactDOM.render(
                <>
                    <Dialog />
                    <Dialog />
                </>
                , div);

            const renderedDialog = document.querySelectorAll(".dialog");

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
        ReactDOM.render(<Dialog id="demo-dialog" />, div);

        const renderedDialog = document.querySelector(".dialog");
        const openBtn = document.querySelector("[data-dialog-open]");

        expect(renderedDialog.classList).not.toContain("d-flex");

        dialog.init();
        expect(document.body.classList).not.toContain("dialog-open");

        openBtn.click();
        expect(renderedDialog.classList).toContain("d-flex");
        expect(document.body.classList).toContain("dialog-open");
    });

    it("button with attribute 'data-dialog-close' pointing to the correct id closes corresponding dialog", () => {
        ReactDOM.render(<Dialog id="demo-dialog" open />, div);

        const renderedDialog = document.querySelector(".dialog");
        const closeBtn = document.querySelector("[data-dialog-close]");

        expect(renderedDialog.classList).toContain("d-flex");

        dialog.init();
        expect(document.body.classList).toContain("dialog-open");

        closeBtn.click();
        expect(renderedDialog.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");
    });

    it("closes dialog when clicking the close icon", () => {
        ReactDOM.render(<Dialog id="demo-dialog" open />, div);

        const renderedDialog = document.querySelector(".dialog");
        const closeIcon = renderedDialog.querySelector(".dialog-close");

        expect(renderedDialog.classList).toContain("d-flex");

        dialog.init();
        expect(document.body.classList).toContain("dialog-open");

        closeIcon.click();

        expect(renderedDialog.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");
    });

    it("sets focus on the last focusable element when dialog is opened", () => {
        ReactDOM.render(<Dialog id="dia-id"/>, div);

        const delBtn = document.querySelector(".dialog").querySelector(".btn-primary");

        dialog.init();
        dialog.open("dia-id");

        expect(document.activeElement).toEqual(delBtn);
    });

    // It is not possible to trigger a focus change with keyboardevents, this is due to some security issues with JS [AW].
    it("changes focus from the last focusable element to the first focusable element when focus change is induced", () => {
        ReactDOM.render(<Dialog id="dia-id"/>, div);

        const dialogElem = document.querySelector(".dialog");
        const ev = new KeyboardEvent("keydown", { key: "Tab" });

        const diaObj = dialog.init()[0];

        diaObj.open();
        dialogElem.dispatchEvent(ev);

        expect(document.activeElement).toEqual(diaObj.firstTabStop);
    });

    it("changes focus from the first focusable element to the last focusable element when focus change is induced", () => {
        ReactDOM.render(<Dialog id="dia-id"/>, div);

        const dialogElem = document.querySelector(".dialog");
        const sEv = new KeyboardEvent("keydown", {
            shiftKey: true,
            key: "Tab"
        });
        const ev = new KeyboardEvent("keydown", { key: "Tab" });
        const diaObj = dialog.init()[0];

        diaObj.open();
        dialogElem.dispatchEvent(ev);
        dialogElem.dispatchEvent(sEv);

        expect(document.activeElement).toEqual(diaObj.lastTabStop);
    });

    it("closes the dialog when escape button is pressed", () => {
        ReactDOM.render(<Dialog id="dialog-id" />, div);

        const dialogElement = document.querySelector(".dialog");
        const escapeEvent = new KeyboardEvent("keydown", { key: "Escape" });
        const dialogObject = dialog.init()[0];

        dialogObject.open();
        dialogElement.dispatchEvent(escapeEvent);

        expect(dialogElement.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");
    });

    describe("dialog.open", () => {
        it("opens dialog when calling dialog.open", () => {
            ReactDOM.render(<Dialog id="demo-dialog" />, div);

            const renderedDialog = document.querySelector(".dialog");

            expect(renderedDialog.classList).not.toContain("d-flex");
            expect(document.body.classList).not.toContain("dialog-open");

            dialog.init();
            expect(document.body.classList).not.toContain("dialog-open");

            dialog.open("demo-dialog");

            expect(renderedDialog.classList).toContain("d-flex");
            expect(document.body.classList).toContain("dialog-open");
        });

        it("does not open dialog when calling dialog.open with wrong id and prints warn to console", () => {
            console.warn = jest.fn();
            ReactDOM.render(<Dialog id="demo-dialog" />, div);

            const renderedDialog = document.querySelector(".dialog");

            expect(renderedDialog.classList).not.toContain("d-flex");

            dialog.init();
            expect(document.body.classList).not.toContain("dialog-open");

            dialog.open("qwerty");

            expect(console.warn).toHaveBeenCalledWith("dialog.open: No dialog with id \"qwerty\" found.");

            expect(renderedDialog.classList).not.toContain("d-flex");
            expect(document.body.classList).not.toContain("dialog-open");
        });
    });

    describe("dialog.close", () => {
        it("closes dialog when calling dialog.close", () => {
            ReactDOM.render(<Dialog id="demo-dialog" open />, div);

            const renderedDialog = document.querySelector(".dialog");

            expect(renderedDialog.classList).toContain("d-flex");

            dialog.init();
            expect(document.body.classList).toContain("dialog-open");

            dialog.close("demo-dialog");

            expect(renderedDialog.classList).not.toContain("d-flex");
            expect(document.body.classList).not.toContain("dialog-open");
        });

        it("does not close dialog when calling dialog.close with wrong id and prints warn to console", () => {
            console.warn = jest.fn();
            ReactDOM.render(<Dialog id="demo-dialog" open />, div);

            const renderedDialog = document.querySelector(".dialog");

            expect(renderedDialog.classList).toContain("d-flex");

            dialog.init();
            expect(document.body.classList).toContain("dialog-open");

            dialog.close("qwerty");

            expect(console.warn).toHaveBeenCalledWith("dialog.close: No dialog with id \"qwerty\" found.");

            expect(renderedDialog.classList).toContain("d-flex");
            expect(document.body.classList).toContain("dialog-open");
        });
    });
});
