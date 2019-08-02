import React from "react";
import ReactDOM from "react-dom";

import expandable from "./index";

jest.useFakeTimers();

describe("px-script: expandable", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    afterEach(() => ReactDOM.unmountComponentAtNode(div));

    const ExpGrpComponent = ({ id, open, expId }) => (
        <div className="expandable-group" id={id} >
            <ExpandableComponent id={expId} />
            <ExpandableComponent open={open} />
        </div>
    );

    const ExpandableComponent = ({ id, open }) => (
        <div className={`expandable${open ? " expandable-open" : ""}`} id={id} >
            <div className="expandable-header">
                <h5>Foo</h5>
            </div>
            <div className="expandable-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );

    it("is defined", () => {
        expect(expandable).toBeDefined();
    });

    describe("init()", () => {
        it("is defined", () => {
            expect(expandable.init).toBeDefined();
        });

        it("returns a single object when an expandable ID is passed", () => {
            ReactDOM.render(<ExpandableComponent id="expandable-test"/>, div);

            const returnVal = expandable.init("expandable-test");

            expect(returnVal).not.toBeNull();
            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns a single object when a expandable-group ID is passed", () => {
            ReactDOM.render(<ExpGrpComponent id="expandable-group-test" />, div);

            const returnVal = expandable.init("expandable-group-test");

            expect(returnVal).not.toBeNull();
            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of expandable objects when more than one expandable is initialized", () => {
            ReactDOM.render(
                <>
                    <ExpandableComponent />
                    <ExpandableComponent />
                </>
                , div);

            const returnVal = expandable.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
            expect(returnVal.every(instance => instance.elem.classList.contains("expandable"))).toBeTruthy();
        });

        it("returns an array of expandable-group objects when more than one expandable-group is initialized", () => {
            ReactDOM.render(
                <>
                    <ExpGrpComponent />
                    <ExpGrpComponent />
                </>
                , div);

            const returnVal = expandable.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
            expect(returnVal.every(instance => instance.elem.classList.contains("expandable-group"))).toBeTruthy();
        });

        it("returns an array of both expandable-group objects and expandable objects when more than one element is initialized", () => {
            ReactDOM.render(
                <>
                    <ExpGrpComponent />
                    <ExpandableComponent />
                </>
                , div);

            const returnVal = expandable.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
            expect(returnVal[0].elem.classList.contains("expandable-group")).toBeTruthy();
            expect(returnVal[1].elem.classList.contains("expandable")).toBeTruthy();
        });

        describe("warning messages", () => {
            beforeEach(() => console.warn = jest.fn());

            it("prints a warning message if no expandable-group or expandable exist", () => {
                console.warn = jest.fn();

                expandable.init();

                expect(console.warn).toHaveBeenCalled();
            });

            it("prints a warning message if no  matching the passed ID exist", () => {
                console.warn = jest.fn();

                expandable.init("invalid-id");

                expect(console.warn).toHaveBeenCalled();
            });

            it("prints a warning if an expandable-group without expandables is initialized", () => {
                console.warn = jest.fn();
                ReactDOM.render(<div id="empty-expandable-group" className="expandable-group"/>, div);

                expandable.init("empty-expandable-group");

                expect(console.warn).toHaveBeenCalledWith("expandable-group: No expandable children found");
            });

            it("prints a warning when an expandable without .expandable-header is initialized", () => {
                console.warn = jest.fn();
                ReactDOM.render(<div id="exp-no-header" className="expandable" />, div);

                expandable.init("exp-no-header");

                expect(console.warn).toHaveBeenCalledWith("expandable: No expandable-header found");
            });

            it("prints a warning if an expandable-group contains expandables without expandable-header", () => {
                ReactDOM.render(
                    <div id="expGrpNoHead" className="expandable-group">
                        <div className="expandable" />
                    </div>
                    , div);

                expandable.init("expGrpNoHead");

                expect(console.warn).toHaveBeenCalledWith("expandable-group: An expandable is missing a header");
            });
        });
    });

    describe("class Expandable", () => {
        it("click opens the expandable", () => {
            ReactDOM.render(<ExpandableComponent />, div);

            const expElem = document.querySelector(".expandable");
            const expHeaderElem = expElem.querySelector(".expandable-header");

            expandable.init();

            expect(expElem.classList.contains("expandable-open")).toBeFalsy();

            expHeaderElem.dispatchEvent(new Event("click"));

            expect(expElem.classList.contains("expandable-open")).toBeTruthy();
        });

        it("click closes the expandable", () => {
            ReactDOM.render(<ExpandableComponent open />, div);

            const expElem = document.querySelector(".expandable");
            const expHeaderElem = expElem.querySelector(".expandable-header");

            expandable.init();

            expect(expElem.classList.contains("expandable-open")).toBeTruthy();

            expHeaderElem.dispatchEvent(new Event("click"));

            jest.runAllTimers();

            expect(expElem.classList.contains("expandable-open")).toBeFalsy();
        });

        it("clicking in quick succession to open an expandable will print a warning", () => {
            console.warn = jest.fn();

            ReactDOM.render(<ExpandableComponent />, div);

            const expObj = expandable.init()[0];

            expObj.header.dispatchEvent(new Event("click"));
            expObj.header.dispatchEvent(new Event("click"));

            expect(console.warn).toHaveBeenCalledWith("expandable: The given expandable is expanding");
        });

        it("clicking in quick succession to close an expandable will print a warning", () => {
            console.warn = jest.fn();

            ReactDOM.render(<ExpandableComponent open />, div);

            const expObj = expandable.init()[0];

            expObj.header.dispatchEvent(new Event("click"));
            expObj.header.dispatchEvent(new Event("click"));

            expect(console.warn).toHaveBeenCalledWith("expandable: The given expandable is collapsing");
        });
    });

    describe("class Expandable-Group", () => {
        it("click opens an expandable", () => {
            ReactDOM.render(<ExpGrpComponent />, div);

            const expGrpObj = expandable.init()[0];

            expect(expGrpObj.openExp).toBeFalsy();

            expGrpObj.expandables[0].header.dispatchEvent(new Event("click"));

            jest.runAllTimers();

            expect(expGrpObj.openExp).toBeTruthy();
        });

        it("clicking an open expandable closes it", () => {
            ReactDOM.render(<ExpGrpComponent open />, div);

            const expGrpObj = expandable.init()[0];
            const openExp = expGrpObj.openExp;

            expect(openExp.elem.classList.contains("expandable-open")).toBeTruthy();

            openExp.header.dispatchEvent(new Event("click"));

            jest.runAllTimers();

            expect(openExp.elem.classList.contains("expandable-open")).toBeFalsy();
        });

        it("only one expandable can be open at the same time", () => {
            ReactDOM.render(<ExpGrpComponent open />, div);

            const expGrpObj = expandable.init()[0];
            const openExp = expGrpObj.openExp.elem;
            const closedExp = document.querySelector(".expandable:not(.expandable-open)");

            expect(openExp.classList.contains("expandable-open")).toBeTruthy();
            expect(closedExp.classList.contains("expandable-open")).toBeFalsy();

            closedExp.querySelector(".expandable-header").dispatchEvent(new Event("click"));

            jest.runAllTimers();

            expect(openExp.classList.contains("expandable-open")).toBeFalsy();
            expect(closedExp.classList.contains("expandable-open")).toBeTruthy();
        });

        it("clicking in quick succession to open an expandable wrapped by expandable-group will print a warning", () => {
            console.warn = jest.fn();

            ReactDOM.render(<ExpGrpComponent />, div);

            const expGrp = expandable.init()[0];

            expGrp.expandables[0].header.dispatchEvent(new Event("click"));
            expGrp.expandables[0].header.dispatchEvent(new Event("click"));

            expect(console.warn).toHaveBeenCalledWith("expandable-group: The expandable-group contains an expanding element");
        });
    });

    describe("open", () => {
        it("opens the expandable matching the passed ID and returns the expandable object", () => {
            ReactDOM.render(<ExpandableComponent id="test-open" />, div);

            const expObj = expandable.init()[0];

            expect(expObj.elem.classList).not.toContain("expandable-open");

            const returnVal = expandable.open("test-open");

            expect(expObj.elem.classList).toContain("expandable-open");
            expect(returnVal).toEqual(expObj);
        });

        it("opens the expandable matching the given ID in a expandable-group", () => {
            ReactDOM.render(<ExpGrpComponent expId="exp-test" />, div);

            const expGrpObj = expandable.init()[0];
            const exp = document.getElementById("exp-test");

            expect(expGrpObj.openExp).toBeFalsy();
            expect(exp.classList).not.toContain("expandable-open");

            const returnVal = expandable.open("exp-test");

            jest.runAllTimers();

            expect(expGrpObj.openExp).toBeTruthy();
            expect(exp.classList).toContain("expandable-open");
            expect(returnVal).toEqual(expGrpObj.openExp);
        });

        it("closes the open expandable in a expandable-group if open is called on another expandable", () => {
            ReactDOM.render(<ExpGrpComponent open expId="exp-id" />, div);

            const expGrpObj = expandable.init()[0];
            const closedExp = document.getElementById("exp-id");

            expect(expGrpObj.openExp).toBeTruthy();

            expandable.open("exp-id");

            jest.runAllTimers();

            expect(expGrpObj.openExp.elem).toEqual(closedExp);
            expect(document.querySelectorAll(".expandable-open").length).toEqual(1);
        });

        describe("warning messages", () => {
            beforeEach(() => console.warn = jest.fn());

            it("returns false and prints a warning if no expandable matching the ID was found", () => {
                expandable.init();

                const returnVal = expandable.open("test");

                expect(console.warn).toHaveBeenCalledWith("expandable.open: expandable with id test was not found");
                expect(returnVal).toBeFalsy();
            });

            it("returns false and prints a warning if the expandable is open", () => {
                ReactDOM.render(<ExpandableComponent open id="is-open" />, div);
                expandable.init();

                const returnVal = expandable.open("is-open");

                expect(console.warn).toHaveBeenCalledWith("expandable.open: expandable with id is-open is open");
                expect(returnVal).toBeFalsy();
            });
        });
    });

    describe("close", () => {
        it("closes the open expandable matching the passed ID and returns the expandable object", () => {
            ReactDOM.render(<ExpandableComponent id="exp-close" open />, div);

            const expObj = expandable.init()[0];

            expect(expObj.isOpen).toBeTruthy();

            const returnVal = expandable.close("exp-close");

            expect(expObj.isOpen).toBeFalsy();
            expect(returnVal).toBeTruthy();
            expect(returnVal).toEqual(expObj);
        });

        it("closes the open expandable matching the passed ID in an expandable-group and returns the expandable object", () => {
            ReactDOM.render(
                <div className="expandable-group">
                    <ExpandableComponent id="test-close" open/>
                    <ExpandableComponent />
                </div>
                , div);

            const expGrpObj = expandable.init()[0];

            expect(expGrpObj.openExp).toBeTruthy();

            const returnVal = expandable.close("test-close");

            expect(expGrpObj.openExp).toBeFalsy();
            expect(returnVal.elem).toEqual(document.getElementById("test-close"));
        });

        describe("warninge messages", () => {
            beforeEach(() => console.warn = jest.fn());

            it("prints a warning message and returns false if the passed ID doesn't match an existing expandable", () => {
                const returnVal = expandable.close("testing");

                expect(console.warn).toHaveBeenCalledWith("expandable.close: expandable with id testing was not found");
                expect(returnVal).toBeFalsy();
            });

            it("prints a warning message and returns false if the expandable is closed", () => {
                ReactDOM.render(<ExpGrpComponent expId="closed-exp" />, div);
                expandable.init();

                const returnVal = expandable.close("closed-exp");

                expect(console.warn).toHaveBeenCalledWith("expandable.close: expandable with id closed-exp is closed");
                expect(returnVal).toBeFalsy();
            });
        });
    });
});
