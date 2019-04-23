import React from "react";
import ReactDOM from "react-dom";
import { extendObj, isWithinBoundingBox, handleScrollbar, getElementsByIds } from "./index";

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

    describe("getElementsByIds", () => {
        const div = document.createElement("div");

        document.body.appendChild(div);

        beforeEach(() => ReactDOM.unmountComponentAtNode(div));

        const TestElement = ({ id }) => (
            <div id={id}>
            </div>
        );

        it("is defined", () => {
            expect(getElementsByIds).toBeDefined();
        });

        it("returns the element matching the given ID", () => {
            ReactDOM.render(<TestElement id="demo-elem"/>, div);

            const renderedElement = document.getElementById("demo-elem");
            const returnValue = getElementsByIds("demo-elem");

            expect(returnValue.length).toEqual(1);
            expect(Array.isArray(returnValue)).toBeTruthy();
            expect(returnValue.some(val => val === renderedElement)).toBeTruthy();
        });

        it("returns an array of elements matching the sent ids", () => {
            ReactDOM.render(
                <>
                    <TestElement id="demo-elem-0" />
                    <TestElement id="demo-elem-1" />
                </>
                , div);

            const returnValue = getElementsByIds(["demo-elem-0", "demo-elem-1"]);

            expect(returnValue.length).toEqual(2);
        });

        it("prints a warning message if you send a value other than string or array", () => {
            console.warn = jest.fn();

            getElementsByIds(1);

            expect(console.warn).toHaveBeenCalled();
        });

        it("prints a warning message if it can't find an element with the given ID", () => {
            console.warn = jest.fn();

            getElementsByIds("invalid-id", "invalid-component");

            expect(console.warn).toHaveBeenCalled();
        });

        it("prints warning messages if your array contains other values than strings", () => {
            ReactDOM.render(<TestElement id="demo-elem"/>, div);
            console.warn = jest.fn();

            getElementsByIds(["demo-elem", 1, null]);

            expect(console.warn).toHaveBeenCalledTimes(2);
        });

        it("prints a warning message with the given component name", () => {
            console.warn = jest.fn();

            getElementsByIds("test", "testComponent");

            expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("testComponent"));
        });

        it("prints a warning message with default name 'component' if no name is given", () => {
            console.warn = jest.fn();

            getElementsByIds("test");

            expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("component"));
        });
    });
});
