import React from "react";
import ReactDOM from "react-dom";

import rangeslider from "./index";
import { stringify } from "querystring";

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

    const TwoTestSliders = () => (
        <>
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
        </>
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

    // Start of Chrome specific tests [AW]
    it("generates special styling to fill slider background for chrome", () => {
        ReactDOM.render(<TestSlider />, div);

        const defaultUseragent = window.navigator.userAgent;

        Object.defineProperty(window.navigator, "userAgent", {
            value: "Chrome",
            writable: true
        });
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const chromeStyle = document.querySelector("style");

        expect(rangeSlider).toBeTruthy();
        expect(chromeStyle).toBeTruthy();

        Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
        document.body.removeChild(chromeStyle);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("creates a unique styling for each rangeslider in one style tag for chrome", () => {
        ReactDOM.render(<TwoTestSliders />, div);

        const defaultUseragent = window.navigator.userAgent;

        Object.defineProperty(window.navigator, "userAgent", {
            value: "Chrome",
            writable: true
        });
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const chromeStyle = document.querySelector("style");

        expect(rangeSlider).toBeTruthy();
        expect(chromeStyle).toBeTruthy();
        expect(document.querySelectorAll("style")).toHaveLength(1);
        expect(chromeStyle.innerHTML.includes("#px-rs-0")).toEqual(true);
        expect(chromeStyle.innerHTML.includes("#px-rs-1")).toEqual(true);

        Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
        document.body.removeChild(chromeStyle);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("does not create duplicate styling when onchange occurs", () => {
        ReactDOM.render(<TestSlider />, div);

        const defaultUseragent = window.navigator.userAgent;

        Object.defineProperty(window.navigator, "userAgent", {
            value: "Chrome",
            writable: true
        });
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const input = rangeSlider.querySelector("input[type=range]");
        const chromeStyle = document.querySelector("style");

        expect(rangeSlider).toBeTruthy();
        expect(input).toBeTruthy();
        expect(chromeStyle).toBeTruthy();
        expect(chromeStyle.innerHTML.match(/#px-rs-0/gm)).toHaveLength(1);

        input.value = 50;
        input.dispatchEvent(new Event("change"));

        expect(document.querySelectorAll("style")).toHaveLength(1);
        expect(chromeStyle.innerHTML.match(/#px-rs-0/g)).toHaveLength(1);

        Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
        document.body.removeChild(chromeStyle);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("sets max and min values to 0 and 100 for rangesliders if none are provided", () => {
        ReactDOM.render(<TestSliderNoLabel />, div);

        const defaultUseragent = window.navigator.userAgent;

        Object.defineProperty(window.navigator, "userAgent", {
            value: "Chrome",
            writable: true
        });
        rangeslider.init();

        const rangeSlider = document.querySelector(".rangeslider");
        const chromeStyle = document.querySelector("style");
        const expectedStyleValue = "#px-rs-0::-webkit-slider-runnable-track{background-size: 0% 100%}";

        expect(rangeSlider).toBeTruthy();
        expect(chromeStyle).toBeTruthy();
        expect(expectedStyleValue).toEqual(chromeStyle.innerHTML);

        Object.defineProperty(window.navigator, "userAgent", { value: defaultUseragent });
        ReactDOM.unmountComponentAtNode(div);
    });
    // End of Chrome specific tests [AW]

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
