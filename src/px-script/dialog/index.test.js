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

    it("is defined", () => {
        expect(dialog).toBeDefined();
    });

    it("has an init method", () => {
        expect(dialog.init).toBeDefined();
        expect(dialog.init).toBeInstanceOf(Function);
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

        ReactDOM.unmountComponentAtNode(div);
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

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes dialog when clicking outside dialog component", () => {
        ReactDOM.render(<OpenDialog />, div);

        const renderedDialog = document.querySelector(".dialog");

        expect(renderedDialog.classList).toContain("d-flex");

        dialog.init();
        expect(document.body.classList).toContain("dialog-open");

        renderedDialog.click();

        expect(renderedDialog.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");

        ReactDOM.unmountComponentAtNode(div);
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

        ReactDOM.unmountComponentAtNode(div);
    });

    it("does not close dialog when pressing keys other than esc", () => {
        ReactDOM.render(<OpenDialog />, div);

        const renderedDialog = document.querySelector(".dialog");

        expect(renderedDialog.classList).toContain("d-flex");

        dialog.init();
        expect(document.body.classList).toContain("dialog-open");

        // Simulate keypress
        const e = new Event("keydown");

        e.keyCode = 13; // Enter
        document.dispatchEvent(e);

        expect(renderedDialog.classList).toContain("d-flex");
        expect(document.body.classList).toContain("dialog-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes dialog when pressing esc", () => {
        ReactDOM.render(<OpenDialog />, div);

        const renderedDialog = document.querySelector(".dialog");

        expect(renderedDialog.classList).toContain("d-flex");

        dialog.init();
        expect(document.body.classList).toContain("dialog-open");

        // Simulate keypress
        const e = new Event("keydown");

        e.keyCode = 27; // Esc
        document.dispatchEvent(e);

        expect(renderedDialog.classList).not.toContain("d-flex");
        expect(document.body.classList).not.toContain("dialog-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("warns user when there is no dialog with an id matching the value of the attribute 'data-dialog-open'", () => {
        const Dialog = () => (
            <>
                <div className="dialog" id="test-dialog"></div>
                <button className="btn btn-primary" type="button" data-dialog-open="tester-dialog">Open dialog</button>
            </>
        );

        ReactDOM.render(<Dialog />, div);
        console.warn = jest.fn();

        dialog.init();
        expect(console.warn).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("tester-dialog"));

        ReactDOM.unmountComponentAtNode(div);
    });

    it("warns user when there is no dialog with an id matching the value of the attribute 'data-dialog-close'", () => {
        const Dialog = () => (
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

        ReactDOM.render(<Dialog />, div);
        console.warn = jest.fn();

        dialog.init();
        expect(console.warn).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("tester-dialog"));

        ReactDOM.unmountComponentAtNode(div);
    });
});
