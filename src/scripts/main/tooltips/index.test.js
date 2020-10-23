import React from "react";
import ReactDOM from "react-dom";

import tooltips from "./index";

describe("scripts: tooltips", () => {
    const div = document.createElement("div");

    const tooltipComponent = id => (<button
        id={id}
        className="btn btn-primary"
        type="button"
        data-tooltip=""
        data-tooltip-position="bottom"
    >
        Tooltip on bottom{"\n"}
        <span className="tooltip">Payment capture is the process by which payments are secured once the payment has been authorized by the customer.</span>{"\n"}
    </button>);

    document.body.appendChild(div);

    afterEach(() => ReactDOM.unmountComponentAtNode(div));

    it("is defined", () => {
        expect(tooltips).toBeDefined();
    });

    describe("tooltips.init", () => {
        it("is defined", () => {
            expect(tooltips.init).toBeDefined();
            expect(tooltips.init).toBeInstanceOf(Function);
        });

        it("returns a single object when one element is initialized", () => {
            ReactDOM.render(tooltipComponent("test-tooltip"), div);

            const renderedTooltip = document.querySelector(".tooltip");

            expect(renderedTooltip).toBeTruthy();

            const returnVal = tooltips.init("test-tooltip");

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of objects when more than one element is initialized", () => {
            ReactDOM.render(
                <>
                    {tooltipComponent("test-tooltip")}
                    {tooltipComponent("test-tooltip-2")}
                </>
                , div);

            const renderedAlert = document.querySelectorAll(".tooltip");

            expect(renderedAlert).toBeTruthy();
            expect(renderedAlert.length).toEqual(2);

            const returnVal = tooltips.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
        });

        it("returns null if no tooltip is found and prints a warning message", () => {
            console.warn = jest.fn();

            expect(tooltips.init()).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });

        it("returns null if an invalid ID is passed and prints a warning message", () => {
            console.warn = jest.fn();

            expect(tooltips.init("test")).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });
    });
});
