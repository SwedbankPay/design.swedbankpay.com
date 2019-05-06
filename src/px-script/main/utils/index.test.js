import { extendObj, isWithinBoundingBox, handleScrollbar, hashId } from "./index";

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

    test.todo("Write tests for isWithinBoundingBox");

    describe("- handleScrollbar", () => {
        it("adds class has-vscroll to body if innerwidth is larger than clientwidth", () => {
            handleScrollbar();

            expect(document.body.classList).toContain("has-vscroll");
        });

        it("removes has-vscroll if vertical scrollbar does not exist", () => {
            document.body.classList.add("has-vscroll");
            window.innerWidth = 0;
            handleScrollbar();

            expect(document.body.classList).not.toContain("has-vscroll");
        });
    });

    describe("- hashId", () => {
        it("takes a string and prepends #", () => {
            const returnVal = hashId("test");

            expect(returnVal).toEqual("#test");
        });

        it("returns the same value if an ID with # is passed", () => {
            const testVal = "#test";
            const returnVal = hashId(testVal);

            expect(returnVal).toEqual(testVal);
        });

        it("returns null if no ID is passed", () => {
            const returnVal = hashId();

            expect(returnVal).toBeNull();
        });
    });
});
