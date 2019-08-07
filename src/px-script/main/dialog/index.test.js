import React from "react";
import ReactDOM from "react-dom";

import dialog from "./index";

describe("px-script: dialog", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const Dialog = ({ id, open, btnId }) => {
        btnId = btnId ? btnId : id;

        return (
            <>
                <div className={`dialog ${open ? " d-flex" : null}`} id={id}>
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
                            <button className="btn btn-secondary" type="button" data-dialog-close={id}>Cancel</button>
                            <button className="btn btn-danger" type="button">Delete</button>
                        </footer>
                    </section>
                </div>
                <button className="btn btn-primary" type="button" data-dialog-open={btnId}>Open dialog</button>
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

    // describe("dialog.init", () => {
    //     it("has an init method", () => {
    //         expect(dialog.init).toBeDefined();
    //         expect(dialog.init).toBeInstanceOf(Function);
    //     });

    //     it("returns a single object when one ID is passed", () => {
    //         ReactDOM.render(<Dialog id="demo-dialog" />, div);

    //         const renderedDialog = document.querySelector(".dialog");

    //         expect(renderedDialog).toBeTruthy();

    //         const returnVal = dialog.init("demo-dialog");

    //         expect(Array.isArray(returnVal)).toBeFalsy();
    //         expect(typeof returnVal).toEqual("object");
    //     });

    //     it("returns an array of objects when more than one dialog is initialized", () => {
    //         ReactDOM.render(
    //             <>
    //                 <Dialog />
    //                 <Dialog />
    //             </>
    //             , div);

    //         const renderedDialog = document.querySelectorAll(".dialog");

    //         expect(renderedDialog).toBeTruthy();
    //         expect(renderedDialog.length).toEqual(2);

    //         const returnVal = dialog.init();

    //         expect(Array.isArray(returnVal)).toBeTruthy();
    //         expect(returnVal.length).toEqual(2);
    //     });

    //     it("init returns null if no dialog is found and prints a warning message", () => {
    //         console.warn = jest.fn();

    //         expect(dialog.init()).toBeNull();
    //         expect(console.warn).toHaveBeenCalled();
    //     });

    //     it("returns null if an invalid ID is passed and prints a warning message", () => {
    //         console.warn = jest.fn();

    //         expect(dialog.init("test")).toBeNull();
    //         expect(console.warn).toHaveBeenCalled();
    //     });
    // });

    // it("button with attribute 'data-dialog-open' pointing to the correct id opens corresponding dialog", () => {
    //     ReactDOM.render(<Dialog id="demo-dialog" />, div);

    //     const renderedDialog = document.querySelector(".dialog");
    //     const openBtn = document.querySelector("[data-dialog-open]");

    //     expect(renderedDialog.classList).not.toContain("d-flex");

    //     dialog.init();
    //     expect(document.body.classList).not.toContain("dialog-open");

    //     openBtn.click();
    //     expect(renderedDialog.classList).toContain("d-flex");
    //     expect(document.body.classList).toContain("dialog-open");
    // });

    // it("button with attribute 'data-dialog-close' pointing to the correct id closes corresponding dialog", () => {
    //     ReactDOM.render(<Dialog id="demo-dialog" open />, div);

    //     const renderedDialog = document.querySelector(".dialog");
    //     const closeBtn = document.querySelector("[data-dialog-close]");

    //     expect(renderedDialog.classList).toContain("d-flex");

    //     dialog.init();
    //     expect(document.body.classList).toContain("dialog-open");

    //     closeBtn.click();
    //     expect(renderedDialog.classList).not.toContain("d-flex");
    //     expect(document.body.classList).not.toContain("dialog-open");
    // });

    // it("closes dialog when clicking the close icon", () => {
    //     ReactDOM.render(<Dialog id="demo-dialog" open />, div);

    //     const renderedDialog = document.querySelector(".dialog");
    //     const closeIcon = renderedDialog.querySelector(".dialog-close");

    //     expect(renderedDialog.classList).toContain("d-flex");

    //     dialog.init();
    //     expect(document.body.classList).toContain("dialog-open");

    //     closeIcon.click();

    //     expect(renderedDialog.classList).not.toContain("d-flex");
    //     expect(document.body.classList).not.toContain("dialog-open");
    // });

    // describe("dialog.open", () => {
    //     it("opens dialog when calling dialog.open", () => {
    //         ReactDOM.render(<Dialog id="demo-dialog" />, div);

    //         const renderedDialog = document.querySelector(".dialog");

    //         expect(renderedDialog.classList).not.toContain("d-flex");
    //         expect(document.body.classList).not.toContain("dialog-open");

    //         dialog.init();
    //         expect(document.body.classList).not.toContain("dialog-open");

    //         dialog.open("demo-dialog");

    //         expect(renderedDialog.classList).toContain("d-flex");
    //         expect(document.body.classList).toContain("dialog-open");
    //     });

    //     it("does not open dialog when calling dialog.open with wrong id and prints warn to console", () => {
    //         console.warn = jest.fn();
    //         ReactDOM.render(<Dialog id="demo-dialog" />, div);

    //         const renderedDialog = document.querySelector(".dialog");

    //         expect(renderedDialog.classList).not.toContain("d-flex");

    //         dialog.init();
    //         expect(document.body.classList).not.toContain("dialog-open");

    //         dialog.open("qwerty");

    //         expect(console.warn).toHaveBeenCalledWith("dialog.open: No dialog with id \"qwerty\" found.");

    //         expect(renderedDialog.classList).not.toContain("d-flex");
    //         expect(document.body.classList).not.toContain("dialog-open");
    //     });
    // });

    // describe("dialog.close", () => {
    //     it("closes dialog when calling dialog.close", () => {
    //         ReactDOM.render(<Dialog id="demo-dialog" open />, div);

    //         const renderedDialog = document.querySelector(".dialog");

    //         expect(renderedDialog.classList).toContain("d-flex");

    //         dialog.init();
    //         expect(document.body.classList).toContain("dialog-open");

    //         dialog.close("demo-dialog");

    //         expect(renderedDialog.classList).not.toContain("d-flex");
    //         expect(document.body.classList).not.toContain("dialog-open");
    //     });

    //     it("does not close dialog when calling dialog.close with wrong id and prints warn to console", () => {
    //         console.warn = jest.fn();
    //         ReactDOM.render(<Dialog id="demo-dialog" open />, div);

    //         const renderedDialog = document.querySelector(".dialog");

    //         expect(renderedDialog.classList).toContain("d-flex");

    //         dialog.init();
    //         expect(document.body.classList).toContain("dialog-open");

    //         dialog.close("qwerty");

    //         expect(console.warn).toHaveBeenCalledWith("dialog.close: No dialog with id \"qwerty\" found.");

    //         expect(renderedDialog.classList).toContain("d-flex");
    //         expect(document.body.classList).toContain("dialog-open");
    //     });
    // });
});
