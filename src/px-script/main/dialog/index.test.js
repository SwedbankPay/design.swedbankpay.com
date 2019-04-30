import React from "react";
import ReactDOM from "react-dom";

import dialog from "./index";

describe("px-script: dialog", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const Dialog = () => (
        <>
            <div className="dialog" id="test-dialog">
                <section>
                    <header>
                        <h5>Delete item 456?</h5>
                    </header>
                    <div className="dialog-body">
                        <p>Are you sure you want to permanently delete the item <i>German Swashbuckle (456)?</i></p>
                    </div>
                    <footer>
                        <button className="btn btn-secondary" type="button" data-dialog-close="test-dialog">Cancel</button>
                        <button className="btn btn-danger" type="button">Delete</button>
                    </footer>
                </section>
            </div>
            <button className="btn btn-primary" type="button" data-dialog-open="test-dialog">Open dialog</button>
        </>
    );

    const OpenDialog = () => (
        <>
            <div className="dialog d-flex" id="test-dialog">
                <section>
                    <header>
                        <h5>Delete item 456?</h5>
                        <a href="#" className="dialog-close">
                            <i className="material-icons">close</i>
                        </a>
                    </header>
                    <div className="dialog-body">
                        <p>Are you sure you want to permanently delete the item <i>German Swashbuckle (456)?</i></p>
                    </div>
                    <footer>
                        <button className="btn btn-secondary" type="button" data-dialog-close="test-dialog">Cancel</button>
                        <button className="btn btn-danger" type="button">Delete</button>
                    </footer>
                </section>
            </div>
            <button className="btn btn-primary" type="button" data-dialog-open="test-dialog">Open dialog</button>
        </>
    );

    beforeEach(() => {
        document.body.classList.remove("dialog-open");
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    it("is defined", () => {
        expect(dialog).toBeDefined();
    });

    it("has an init method", () => {
        expect(dialog.init).toBeDefined();
        expect(dialog.init).toBeInstanceOf(Function);
    });

    it("can init and return multiple dialogs", () => {
        ReactDOM.render(
            <>
                <Dialog />
                <Dialog />
            </>
            , div);

        const renderedDialogs = document.querySelector(".dialog");
        const dialogObject = dialog.init();

        expect(renderedDialogs).toBeTruthy();
        expect(Array.isArray(dialogObject)).toBeTruthy(); // To check if it returns an Array.
        expect(dialogObject.length).toEqual(2);
    });

    it("can init and return the initialized dialog object", () => {
        ReactDOM.render(<Dialog />, div);

        const renderedDialog = document.querySelector(".dialog");
        const dialogObject = dialog.init("test-dialog");

        expect(renderedDialog).toBeTruthy();
        expect(Array.isArray(dialogObject)).toBeFalsy(); // To check if it returns an object and not an Array.
        expect(dialogObject.id).toEqual("test-dialog");
    });

    it("the init function accepts ids with and without #", () => {
        ReactDOM.render(<Dialog />, div);

        const renderedDialog = document.querySelector(".dialog");
        const initWithHash = dialog.init("#test-dialog");
        const initWithoutHash = dialog.init("test-dialog");

        expect(renderedDialog).toBeTruthy();
        expect(initWithHash).toBeTruthy();
        expect(initWithoutHash).toBeTruthy();
    });

    it("init returns null if no dialog is found", () => {
        ReactDOM.render(<div />, div);

        const renderedDialog = document.querySelector(".dialog");
        const returnVal = dialog.init();

        expect(renderedDialog).toBeFalsy();
        expect(returnVal).toBeNull();
    });

    it("button with attribute 'data-dialog-open' pointing to the correct id opens corresponding dialog", () => {
        ReactDOM.render(<Dialog />, div);

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
        ReactDOM.render(<OpenDialog />, div);

        const renderedDialog = document.querySelector(".dialog");
        const closeBtn = document.querySelector("[data-dialog-close]");

        expect(renderedDialog.classList).toContain("d-flex");

        dialog.init();
        expect(document.body.classList).toContain("dialog-open");

        closeBtn.click();
        expect(renderedDialog.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");
    });

    it("warns user when there is no dialog with an id matching the value of the attribute 'data-dialog-open'", () => {
        const TestDialog = () => (
            <>
                <div className="dialog" id="test-dialog"></div>
                <button className="btn btn-primary" type="button" data-dialog-open="tester-dialog">Open dialog</button>
            </>
        );

        ReactDOM.render(<TestDialog />, div);
        console.warn = jest.fn();

        dialog.init();
        expect(console.warn).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("tester-dialog"));
    });

    it("warns user when there is no dialog with an id matching the value of the attribute 'data-dialog-close'", () => {
        const TestDialog = () => (
            <>
                <div className="dialog" id="test-dialog">
                    <section>
                        <footer>
                            <button className="btn btn-primary" type="button" data-dialog-close="tester-dialog">Close dialog</button>
                        </footer>
                    </section>
                </div>
            </>
        );

        ReactDOM.render(<TestDialog />, div);
        console.warn = jest.fn();

        dialog.init();
        expect(console.warn).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("tester-dialog"));
    });

    it("closes dialog when clicking the close icon", () => {
        ReactDOM.render(<OpenDialog />, div);

        const renderedDialog = document.querySelector(".dialog");
        const closeIcon = renderedDialog.querySelector(".dialog-close");

        expect(renderedDialog.classList).toContain("d-flex");

        dialog.init();
        expect(document.body.classList).toContain("dialog-open");

        closeIcon.click();

        expect(renderedDialog.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");
    });

    it("opens dialog when calling dialog.open", () => {
        ReactDOM.render(<Dialog />, div);

        const renderedDialog = document.querySelector(".dialog");

        expect(renderedDialog.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");

        dialog.init();
        expect(document.body.classList).not.toContain("dialog-open");

        dialog.open("test-dialog");

        expect(renderedDialog.classList).toContain("d-flex");
        expect(document.body.classList).toContain("dialog-open");
    });

    it("does not open dialog when calling dialog.open with wrong id and prints error to console", () => {
        console.error = jest.fn();
        ReactDOM.render(<Dialog />, div);

        const renderedDialog = document.querySelector(".dialog");

        expect(renderedDialog.classList).not.toContain("d-flex");

        dialog.init();
        expect(document.body.classList).not.toContain("dialog-open");

        dialog.open("qwerty");

        expect(console.error).toHaveBeenCalledWith("dialog.open: No dialog with id \"qwerty\" found.");

        expect(renderedDialog.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");
    });

    it("closes dialog when calling dialog.close", () => {
        ReactDOM.render(<OpenDialog />, div);

        const renderedDialog = document.querySelector(".dialog");

        expect(renderedDialog.classList).toContain("d-flex");

        dialog.init();
        expect(document.body.classList).toContain("dialog-open");

        dialog.close("test-dialog");

        expect(renderedDialog.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");
    });

    it("does not close dialog when calling dialog.close with wrong id and prints error to console", () => {
        console.error = jest.fn();
        ReactDOM.render(<OpenDialog />, div);

        const renderedDialog = document.querySelector(".dialog");

        expect(renderedDialog.classList).toContain("d-flex");

        dialog.init();
        expect(document.body.classList).toContain("dialog-open");

        dialog.close("qwerty");

        expect(console.error).toHaveBeenCalledWith("dialog.close: No dialog with id \"qwerty\" found.");

        expect(renderedDialog.classList).toContain("d-flex");
        expect(document.body.classList).toContain("dialog-open");
    });
});
