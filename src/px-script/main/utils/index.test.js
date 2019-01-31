import { extendObj, handleScrollbar, isWithinBoundingBox } from "./index";

describe("px-script: utils", () => {
    describe("- extendObj", () => {
        it("extends current object with new object", () => {
            const oldObj = { test: "test" };
            const newObj = { test2: "test2" };
            const expectedObj = {
                test: "test",
                test2: "test2"
            };

            const extObj = extendObj(false, oldObj, newObj);

            expect(expectedObj).toEqual(extObj);
        });

        it("does not overwrite property when overWrite is set to false", () => {
            const oldObj = { test: "test" };
            const newObj = {
                test: "test1",
                test2: "test2"
            };
            const expectedObj = {
                test: "test",
                test2: "test2"
            };

            const extObj = extendObj(false, oldObj, newObj);

            expect(expectedObj).toEqual(extObj);
        });

        it("overwrites property when overWrite is set to true", () => {
            const oldObj = { test: "test" };
            const newObj = {
                test: "test1",
                test2: "test2"
            };
            const expectedObj = {
                test: "test1",
                test2: "test2"
            };

            const extObj = extendObj(true, oldObj, newObj);

            expect(expectedObj).toEqual(extObj);
        });
    });

    describe("- handleScrollbar", () => {
        it("adds class body-has-vscroll to body if innerwidth is larger than clientwidth", () => {
            const bodyElem = document.querySelector("body");

            bodyElem.classList.add("dialog-open");
            handleScrollbar();

            expect(document.body.classList).toContain("body-has-vscroll");
        });

        it("removes body-has-vscroll when sheet is opened if vertical scrollbar does not exist", () => {
            const bodyElem = document.querySelector("body");

            window.innerWidth = 0;
            bodyElem.classList.add("dialog-open");
            handleScrollbar();

            expect(document.body.classList).not.toContain("body-has-vscroll");
        });
    });

    // TODO: Write tests for isWithinBoundingBox [EH]
});
