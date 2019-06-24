import React from "react";
import ReactDOM from "react-dom";

import expandable from "./index";

describe("px-script: expandable", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    afterEach(() => ReactDOM.unmountComponentAtNode(div));

    const AccordionComponent = ({ id, open }) => (
        <div className="accordion" id={id} >
            <ExpandableComponent open={open} />
        </div>
    );

    const ExpandableComponent = ({ id, open }) => (
        <div className={`expandable${open ? " expandable-open" : ""}`} id={id} >
            <div className="expandable-header">
                <h5>Foo</h5>
            </div>
            <div className="expandable-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );

    it("is defined", () => {
        expect(expandable).toBeDefined();
    });

    describe("expandable.init", () => {
        // it("is defined", () => {
        //     expect(expandable.init).toBeDefined();
        // });

        // it("returns a single object when an expandable ID is passed", () => {
        //     ReactDOM.render(<ExpandableComponent id="expandable-test"/>, div);

        //     const returnVal = expandable.init("expandable-test");

        //     expect(returnVal).not.toBeNull();
        //     expect(Array.isArray(returnVal)).toBeFalsy();
        //     expect(typeof returnVal).toEqual("object");
        // });

        // it("returns a single object when a accordion ID is passed", () => {
        //     ReactDOM.render(<AccordionComponent id="accordion-test" />, div);

        //     const returnVal = expandable.init("accordion-test");

        //     expect(returnVal).not.toBeNull();
        //     expect(Array.isArray(returnVal)).toBeFalsy();
        //     expect(typeof returnVal).toEqual("object");
        // });

        it("returns an array of expandable objects when more than one expandable is initialized", () => {
            ReactDOM.render(
                <>
                    <ExpandableComponent />
                    <ExpandableComponent />
                </>
                , div);

            console.log(document.querySelector(".accordion"));

            const returnVal = expandable.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
        });
    });
});
