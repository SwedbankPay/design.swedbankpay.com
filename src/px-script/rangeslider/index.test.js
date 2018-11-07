import React from "react";
import ReactDOM from "react-dom";

import rangeslider from "./index";

describe("px-script: rangeslider", () => {
    const TestSlider = () => (
        <div className="rangeslider rangeslider-brand label-right">
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

    const TestSliderNoLabel = () => (
        <div className="rangeslider rangeslider-brand label-right">
            <input type="range" step="1" />
        </div>
    );

    const div = document.createElement("div");

    document.body.appendChild(div);

    it("is defined", () => {
        expect(rangeslider).toBeDefined();
    });

    it("has an init method", () => {
        expect(rangeslider.init).toBeDefined();
        expect(rangeslider.init).toBeInstanceOf(Function);
    });

    // TODO: Write tests for chrome
    // it("generates special styling for chrome browsers", () => {
    //     ReactDOM.render(<TestSlider />, div);

    //     const defaultUseragent = window.navigator.userAgent;

    //     Object.defineProperty(window.navigator, "userAgent", {
    //         value: "Chrome",
    //         writable: true
    //     });
    //     rangeslider.init();

    //     Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("sets default max and min values for chrome if none are provided", () => {
    //     ReactDOM.render(<TestSlider />, div);

    //     const defaultUseragent = window.navigator.userAgent;

    //     Object.defineProperty(window.navigator, "userAgent", {
    //         value: "Chrome",
    //         writable: true
    //     });
    //     rangeslider.init();

    //     const rangeSlider = document.querySelector(".rangeslider");
    //     const input = rangeSlider.querySelector("input[type=range]");
    //     const valueSpan = rangeSlider.querySelector("span[data-rs-value]");

    //     expect(rangeSlider).toBeTruthy();
    //     expect(input).toBeTruthy();
    //     expect(valueSpan).toBeTruthy();
    //     expect(valueSpan.attributes.max).toEqual(100);

    //     Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
    //     ReactDOM.unmountComponentAtNode(div);
    // });

    it("updates displayed value span on change in rangeslider", () => {
        ReactDOM.render(<TestSlider />, div);
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

        ReactDOM.unmountComponentAtNode(div);
    });

    it("updates displayed value span on input in rangeslider", () => {
        ReactDOM.render(<TestSlider />, div);
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

        ReactDOM.unmountComponentAtNode(div);
    });

    it("does not do value-label updates if value-label is not defined", () => {
        ReactDOM.render(<TestSliderNoLabel />, div);
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const valueSpan = rangeSlider.querySelector("span[data-rs-value]");

        expect(rangeSlider).toBeTruthy();
        expect(valueSpan).toBeFalsy();

        ReactDOM.unmountComponentAtNode(div);
    });
});
