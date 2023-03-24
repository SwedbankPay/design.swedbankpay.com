import React from "react";
import { render } from "@testing-library/react";

import rangeslider from "./index";

describe("scripts: rangeslider", () => {
    const TestSlider = ({ id }) => (
        <div className="rangeslider rangeslider-brand label-right" id={id}>
            <input type="range" min="0" max="200" step="1" />
            <output className="value-label">
                <p>
                    <span>$</span>
                    <span data-rs-value="true">100</span>
                    <span>%</span>
                </p>
            </output>
        </div>
    );

    it("is defined", () => {
        expect(rangeslider).toBeDefined();
    });

    describe("rangeslider.init", () => {
        it("is defined", () => {
            expect(rangeslider.init).toBeDefined();
            expect(rangeslider.init).toBeInstanceOf(Function);
        });

        it("returns a single object when one element is initialized", () => {
            render(<TestSlider id="demo-slider" />);

            const renderedRangeSlider = document.querySelector(".rangeslider");

            expect(renderedRangeSlider).toBeTruthy();

            const returnVal = rangeslider.init("demo-slider");

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of objects when more than one element is initialized", () => {
            render(
                <>
                    <TestSlider />
                    <TestSlider />
                </>);

            const renderedRangeSliders = document.querySelectorAll(".rangeslider");

            expect(renderedRangeSliders).toBeTruthy();
            expect(renderedRangeSliders.length).toEqual(2);

            const returnVal = rangeslider.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
        });

        it("returns null if no rangeslider is found and prints a warning message", () => {
            console.warn = jest.fn();

            expect(rangeslider.init()).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });

        it("returns null if an invalid ID is passed and prints a warning message", () => {
            console.warn = jest.fn();

            expect(rangeslider.init("test")).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });
    });

    it("updates displayed value span on change in rangeslider", () => {
        render(<TestSlider />);
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const input = rangeSlider.querySelector("input[type=range]");
        const valueSpan = rangeSlider.querySelector("span[data-rs-value]");

        expect(rangeSlider).toBeTruthy();
        expect(input).toBeTruthy();
        expect(valueSpan).toBeTruthy();

        input.value = 10;
        input.dispatchEvent(new Event("change"));

        expect(valueSpan.innerHTML).toEqual(input.value);

    });

    it("updates displayed value span on input in rangeslider", () => {
        render(<TestSlider />);
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const input = rangeSlider.querySelector("input[type=range]");
        const valueSpan = rangeSlider.querySelector("span[data-rs-value]");

        expect(rangeSlider).toBeTruthy();
        expect(input).toBeTruthy();
        expect(valueSpan).toBeTruthy();

        input.value = 10;
        input.dispatchEvent(new Event("input"));

        expect(valueSpan.innerHTML).toEqual(input.value);

    });
});
