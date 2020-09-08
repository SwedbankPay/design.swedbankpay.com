import React from "react";
import ReactDOM from "react-dom";

import sheet from "./index";
import toast from "../toast/index";

describe("scripts: sheet", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);
    jest.useFakeTimers();

    const Sheet = ({ id }) => (
        <>
            <div className="sheet" id={id}>
                <section></section>
            </div>
            <button className="btn btn-primary" type="button" data-sheet-open="demo-sheet">Open sheet</button>
        </>
    );

    const OpenSheet = () => (
        <>
            <div className="sheet sheet-open" id="demo-sheet">
                <section>
                    <a href="#" className="sheet-close">
                        <i className="material-icons" aria-hidden="true">close</i>
                    </a>
                </section>
            </div>
            <button className="btn btn-primary" type="button" data-sheet-close="demo-sheet">Close sheet</button>
        </>
    );

    beforeEach(() => {
        jest.runAllTimers();
        document.body.classList.remove("sheet-open");
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    it("is defined", () => {
        expect(sheet).toBeDefined();
    });

    describe("sheet.init", () => {
        it("has an init method", () => {
            expect(sheet.init).toBeDefined();
            expect(sheet.init).toBeInstanceOf(Function);
        });

        it("returns one object when an ID is passed", () => {
            ReactDOM.render(<Sheet id="demo-sheet-1" />, div);

            const renderedSheet = document.querySelector(".sheet");

            expect(renderedSheet).toBeTruthy();

            const returnVal = sheet.init("demo-sheet-1");

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of objects when more than one sheet is initialized", () => {
            ReactDOM.render(
                <>
                    <Sheet />
                    <Sheet />
                </>
                , div);

            const renderedSheets = document.querySelectorAll(".sheet");

            expect(renderedSheets).toBeTruthy();
            expect(renderedSheets.length).toEqual(2);

            const returnVal = sheet.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
        });

        it("returns null if no sheet is found and prints a warning", () => {
            console.warn = jest.fn();

            expect(sheet.init()).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });

        it("returns null if the passed id is not found and prints a warning", () => {
            console.warn = jest.fn();

            expect(sheet.init("invalid-id")).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });
    });

    it("button with attribute 'data-sheet-open' pointing to the correct id opens corresponding sheet", () => {
        ReactDOM.render(<Sheet id="demo-sheet" />, div);

        const renderedSheet = document.querySelector(".sheet");
        const openBtn = document.querySelector("[data-sheet-open]");

        expect(renderedSheet.classList).not.toContain("d-block");

        sheet.init();
        expect(document.body.classList).not.toContain("sheet-open");

        openBtn.click();
        jest.runAllTimers();
        expect(renderedSheet.classList).toContain("d-block");
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("sheet-open");
    });

    it("button with attribute 'data-sheet-close' pointing to the correct id closes corresponding sheet", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");
        const closeBtn = document.querySelector("[data-sheet-close]");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        closeBtn.click();
        jest.runAllTimers();
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
        expect(renderedSheet.classList).not.toContain("d-block");
    });

    it("closes sheet when clicking the close icon", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");
        const closeIcon = renderedSheet.querySelector(".sheet-close");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        closeIcon.click();
        jest.runAllTimers();
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
        expect(renderedSheet.classList).not.toContain("d-block");
    });

    it("closes sheet when clicking outside the sheet section", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        renderedSheet.click();
        jest.runAllTimers();
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
        expect(renderedSheet.classList).not.toContain("d-block");
    });

    it("does not close sheet when pressing keys other than esc", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        // Simulate keypress
        const e = new Event("keydown");

        e.keyCode = 13; // Enter
        document.dispatchEvent(e);

        jest.runAllTimers();
        expect(renderedSheet.classList).toContain("sheet-open");
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");
    });

    it("closes sheet when pressing esc", () => {
        ReactDOM.render(<OpenSheet />, div);

        const renderedSheet = document.querySelector(".sheet");

        expect(renderedSheet.classList).toContain("sheet-open");

        sheet.init();
        expect(document.body.classList).toContain("sheet-open");
        expect(renderedSheet.classList).toContain("d-block");

        // Simulate keypress
        const e = new Event("keydown");

        e.keyCode = 27; // Esc
        document.dispatchEvent(e);

        jest.runAllTimers();
        expect(renderedSheet.classList).not.toContain("sheet-open");
        expect(document.body.classList).not.toContain("sheet-open");
        expect(renderedSheet.classList).not.toContain("d-block");
    });

    describe("sheet.open", () => {
        it("opens sheet when calling sheet.open", () => {
            ReactDOM.render(<Sheet id="demo-sheet" />, div);

            const renderedSheet = document.querySelector(".sheet");

            expect(renderedSheet.classList).not.toContain("d-block");
            expect(renderedSheet.classList).not.toContain("sheet-open");
            expect(document.body.classList).not.toContain("sheet-open");

            sheet.init();
            expect(document.body.classList).not.toContain("sheet-open");

            sheet.open("demo-sheet");
            jest.runAllTimers();

            expect(renderedSheet.classList).toContain("d-block");
            expect(renderedSheet.classList).toContain("sheet-open");
            expect(document.body.classList).toContain("sheet-open");
        });

        it("does not open sheet when calling sheet.open with wrong id and prints warn to console", () => {
            console.warn = jest.fn();
            ReactDOM.render(<Sheet id="demo-sheet" />, div);

            const renderedSheet = document.querySelector(".sheet");

            expect(renderedSheet.classList).not.toContain("d-block");
            expect(renderedSheet.classList).not.toContain("sheet-open");
            expect(document.body.classList).not.toContain("sheet-open");

            sheet.init();
            expect(renderedSheet.classList).not.toContain("d-block");
            expect(renderedSheet.classList).not.toContain("sheet-open");
            expect(document.body.classList).not.toContain("sheet-open");

            sheet.open("qwerty");

            expect(renderedSheet.classList).not.toContain("d-block");
            expect(renderedSheet.classList).not.toContain("sheet-open");
            expect(document.body.classList).not.toContain("sheet-open");
        });

        it("does not open sheet when the passed sheet is already open and prints a warning to the console", () => {
            console.warn = jest.fn();
            ReactDOM.render(<OpenSheet id="demo-sheet" />, div);

            const renderedSheet = document.querySelector(".sheet");

            sheet.init();
            expect(renderedSheet.classList).toContain("d-block");
            expect(renderedSheet.classList).toContain("sheet-open");
            expect(document.body.classList).toContain("sheet-open");

            sheet.open("demo-sheet");

            expect(renderedSheet.classList).toContain("d-block");
            expect(renderedSheet.classList).toContain("sheet-open");
            expect(document.body.classList).toContain("sheet-open");
        });
    });

    describe("sheet.close", () => {
        it("closes sheet when calling sheet.close", () => {
            ReactDOM.render(<OpenSheet />, div);

            const renderedSheet = document.querySelector(".sheet");

            expect(document.body.classList).not.toContain("sheet-open");

            sheet.init();
            expect(document.body.classList).toContain("sheet-open");

            sheet.close("demo-sheet");
            jest.runAllTimers();

            expect(renderedSheet.classList).not.toContain("d-block");
            expect(renderedSheet.classList).not.toContain("sheet-open");
            expect(document.body.classList).not.toContain("sheet-open");
        });

        it("does not close sheet when calling sheet.close with wrong id and prints warn to console", () => {
            console.warn = jest.fn();
            ReactDOM.render(<OpenSheet />, div);

            const renderedSheet = document.querySelector(".sheet");

            expect(document.body.classList).not.toContain("sheet-open");

            sheet.init();
            expect(document.body.classList).toContain("sheet-open");

            sheet.close("qwerty");
            jest.runAllTimers();

            expect(renderedSheet.classList).toContain("d-block");
            expect(renderedSheet.classList).toContain("sheet-open");
            expect(document.body.classList).toContain("sheet-open");
        });

        it("does not close sheet when the passed sheet is close and prints a warning to the console", () => {
            console.warn = jest.fn();
            ReactDOM.render(<Sheet id="demo-sheet" />, div);

            const renderedSheet = document.querySelector(".sheet");

            sheet.init();
            expect(renderedSheet.classList).not.toContain("d-block");
            expect(renderedSheet.classList).not.toContain("sheet-open");
            expect(document.body.classList).not.toContain("sheet-open");

            sheet.close("demo-sheet");

            expect(renderedSheet.classList).not.toContain("d-block");
            expect(renderedSheet.classList).not.toContain("sheet-open");
            expect(document.body.classList).not.toContain("sheet-open");
        });
    });

    describe("sheet and toast", () => {
        it("adds margin right to toast-container when a toast is active and sheet is opened", () => {
            ReactDOM.render(<Sheet id="demo-sheet" />, div);
            sheet.init();

            const renderedSheet = document.querySelector(".sheet");

            expect(renderedSheet).toBeTruthy();
            expect(renderedSheet.classList).not.toContain("sheet-open");
            toast({ html: "test" });

            const renderedToast = document.querySelector("#toast-container");

            sheet.open("demo-sheet");
            jest.runAllTimers();

            expect(renderedSheet.classList).toContain("sheet-open");
            expect(renderedToast).toBeTruthy();
            expect(Object.keys(renderedToast.style._values)).toContain("margin-right");
        });

        it("removes margin-right from toast-container when a toast is active and sheet is closed", () => {
            ReactDOM.render(<OpenSheet />, div);
            sheet.init();
            jest.runAllTimers();

            const renderedSheet = document.querySelector(".sheet");

            expect(renderedSheet).toBeTruthy();
            expect(renderedSheet.classList).toContain("sheet-open");
            toast({ html: "test" });

            const renderedToast = document.querySelector("#toast-container");

            expect(renderedToast).toBeTruthy();
            expect(Object.keys(renderedToast.style._values)).toContain("margin-right");

            sheet.close("demo-sheet");
            jest.runAllTimers();

            expect(renderedSheet.classList).not.toContain("sheet-open");
            expect(Object.keys(renderedToast.style._values)).not.toContain("margin-right");
        });
    });
});
