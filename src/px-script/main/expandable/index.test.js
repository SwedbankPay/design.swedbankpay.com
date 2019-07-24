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
            <ExpandableComponent />
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

    // describe("init()", () => {
    //     it("is defined", () => {
    //         expect(expandable.init).toBeDefined();
    //     });

    //     it("returns a single object when an expandable ID is passed", () => {
    //         ReactDOM.render(<ExpandableComponent id="expandable-test"/>, div);

    //         const returnVal = expandable.init("expandable-test");

    //         expect(returnVal).not.toBeNull();
    //         expect(Array.isArray(returnVal)).toBeFalsy();
    //         expect(typeof returnVal).toEqual("object");
    //     });

    //     it("returns a single object when a accordion ID is passed", () => {
    //         ReactDOM.render(<AccordionComponent id="accordion-test" />, div);

    //         const returnVal = expandable.init("accordion-test");

    //         expect(returnVal).not.toBeNull();
    //         expect(Array.isArray(returnVal)).toBeFalsy();
    //         expect(typeof returnVal).toEqual("object");
    //     });

    //     it("returns an array of expandable objects when more than one expandable is initialized", () => {
    //         ReactDOM.render(
    //             <>
    //                 <ExpandableComponent />
    //                 <ExpandableComponent />
    //             </>
    //             , div);

    //         const returnVal = expandable.init();

    //         expect(Array.isArray(returnVal)).toBeTruthy();
    //         expect(returnVal.length).toEqual(2);
    //         expect(returnVal.every(instance => instance.elem.classList.contains("expandable"))).toBeTruthy();
    //     });

    //     it("returns an array of accordion objects when more than one accordion is initialized", () => {
    //         ReactDOM.render(
    //             <>
    //                 <AccordionComponent />
    //                 <AccordionComponent />
    //             </>
    //             , div);

    //         const returnVal = expandable.init();

    //         expect(Array.isArray(returnVal)).toBeTruthy();
    //         expect(returnVal.length).toEqual(2);
    //         expect(returnVal.every(instance => instance.elem.classList.contains("accordion"))).toBeTruthy();
    //     });

    //     it("returns an array of both accordion objects and expandable objects when more than one element is initialized", () => {
    //         ReactDOM.render(
    //             <>
    //                 <AccordionComponent />
    //                 <ExpandableComponent />
    //             </>
    //             , div);

    //         const returnVal = expandable.init();

    //         expect(Array.isArray(returnVal)).toBeTruthy();
    //         expect(returnVal.length).toEqual(2);
    //         expect(returnVal[0].elem.classList.contains("accordion")).toBeTruthy();
    //         expect(returnVal[1].elem.classList.contains("expandable")).toBeTruthy();
    //     });

    //     describe("warning messages", () => {
    //         beforeEach(() => console.warn = jest.fn());

    //         it("prints a warning message if no accordion or expandable exist", () => {
    //             console.warn = jest.fn();

    //             expandable.init();

    //             expect(console.warn).toHaveBeenCalled();
    //         });

    //         it("prints a warning message if no  matching the passed ID exist", () => {
    //             console.warn = jest.fn();

    //             expandable.init("invalid-id");

    //             expect(console.warn).toHaveBeenCalled();
    //         });

    //         it("prints a warning if an accordion without expandables is initialized", () => {
    //             console.warn = jest.fn();
    //             ReactDOM.render(<div id="empty-accordion" className="accordion"/>, div);

    //             expandable.init("empty-accordion");

    //             expect(console.warn).toHaveBeenCalledWith("accordion: No expandable found");
    //         });

    //         it("prints a warning when an expandable without .expandable-header is initialized", () => {
    //             console.warn = jest.fn();
    //             ReactDOM.render(<div id="exp-no-header" className="expandable" />, div);

    //             expandable.init("exp-no-header");

    //             expect(console.warn).toHaveBeenCalledWith("expandable: No expandable-header found");
    //         });

    //         it("prints a warning if an accordion containing expandables without and expandable-header", () => {
    //             ReactDOM.render(
    //                 <div id="acc-exp-no-header" className="accordion">
    //                     <div className="expandable" />
    //                 </div>
    //                 , div);

    //             expandable.init("acc-exp-no-header");

    //             expect(console.warn).toHaveBeenCalledWith("accordion: No expandable-header found");
    //         });
    //     });
    // });

    // describe("class Expandable", () => {
    //     it("click opens the expandable", () => {
    //         ReactDOM.render(<ExpandableComponent />, div);

    //         const expElem = document.querySelector(".expandable");
    //         const expHeaderElem = expElem.querySelector(".expandable-header");

    //         expandable.init();

    //         expect(expElem.classList.contains("expandable-open")).toBeFalsy();

    //         expHeaderElem.dispatchEvent(new Event("click"));

    //         expect(expElem.classList.contains("expandable-open")).toBeTruthy();
    //     });

    //     it("click closes the expandable", () => {
    //         ReactDOM.render(<ExpandableComponent open />, div);

    //         const expElem = document.querySelector(".expandable");
    //         const expHeaderElem = expElem.querySelector(".expandable-header");

    //         expandable.init();

    //         expect(expElem.classList.contains("expandable-open")).toBeTruthy();

    //         expHeaderElem.dispatchEvent(new Event("click"));

    //         expect(expElem.classList.contains("expandable-open")).toBeFalsy();
    //     });
    // });

    // describe("class Accordion", () => {
    //     it("click opens the accordion element", () => {
    //         ReactDOM.render(<AccordionComponent />, div);

    //         const expElems = document.querySelectorAll(".expandable");
    //         const expElemsHeaders = [...expElems].map(expElem => expElem.querySelector(".expandable-header"));

    //         expandable.init();

    //         expect(expElems[0].classList.contains("expandable-open")).toBeFalsy();

    //         expElemsHeaders[0].dispatchEvent(new Event("click"));

    //         expect(expElems[0].classList.contains("expandable-open")).toBeTruthy();
    //     });

    //     it("clicking an open accordion element closes it", () => {
    //         ReactDOM.render(<AccordionComponent open />, div);

    //         const expElems = document.querySelectorAll(".expandable");
    //         const expElemsHeaders = [...expElems].map(expElem => expElem.querySelector(".expandable-header"));

    //         expandable.init();

    //         expect(expElems[0].classList.contains("expandable-open")).toBeTruthy();

    //         expElemsHeaders[0].dispatchEvent(new Event("click"));

    //         expect(expElems[0].classList.contains("expandable-open")).toBeFalsy();
    //     });

    //     it("only one expandable can be open at the same time", () => {
    //         ReactDOM.render(<AccordionComponent open />, div);

    //         const expElems = document.querySelectorAll(".expandable");
    //         const expElemsHeaders = [...expElems].map(expElem => expElem.querySelector(".expandable-header"));

    //         expandable.init();

    //         expect(expElems[0].classList.contains("expandable-open")).toBeTruthy();
    //         expect(expElems[1].classList.contains("expandable-open")).toBeFalsy();

    //         expElemsHeaders[1].dispatchEvent(new Event("click"));

    //         expect(expElems[0].classList.contains("expandable-open")).toBeFalsy();
    //         expect(expElems[1].classList.contains("expandable-open")).toBeTruthy();
    //     });
    // });
});
