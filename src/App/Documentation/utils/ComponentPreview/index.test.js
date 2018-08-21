import React from "react";
import { mount, shallow } from "enzyme";
import "prismjs";

import ComponentPreview from "./index";

// const htmlEncodeString = str => String(str)
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;");

describe("Utilities: ComponentPreview", () => {
    const TestComponentH1 = () => (<h1>test1</h1>);
    const TestComponentH2 = () => (<h2>test2</h2>);
    const TestComponentH1WithOuterTags = () => (
        <div>
            <h1>test1</h1>
        </div>
    );

    it("is defined", () => {
        expect(ComponentPreview).toBeDefined();
    });

    // it("renders", () => {
    //     const wrapper = mount(
    //         <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
    //             <TestComponentH1 />
    //         </ComponentPreview>
    //     );

    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.contains(<h1>test1</h1>)).toEqual(true);
    //     expect(wrapper.html()).toContain("<figure>");
    //     expect(wrapper.html()).toContain("showcase-panel");
    // });

    it("does not render codeFigure when prop is false/not provided", () => {
        const wrapper = mount(
            <ComponentPreview language="html" showCasePanel={true}>
                <TestComponentH1 />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("<figure>");
    });

    it("does not render showCasePanel when prop is false/not provided", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure={true}>
                <TestComponentH1 />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("showcase-panel");
    });

    it("CodeFigure renders multiple html tags", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure={true}>
                <TestComponentH1 />
                <TestComponentH2 />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        // TODO: Update expects [EH]

        // expect(wrapper.html()).toContain(htmlEncodeString("<h1>test1</h1>"));
        // expect(wrapper.html()).toContain(htmlEncodeString("<h2>test2</h2>"));
        // expect(wrapper.html("<h2>test2</h2>")).toEqual(true);
    });

    it("CodeFigure removes outer tags from component", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure={true} removeOuterTag={true}>
                <TestComponentH1WithOuterTags />
                <TestComponentH1WithOuterTags />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        // TODO: Update expects [EH]

        // expect(wrapper.contains(<div><h1>test1</h1></div>)).toEqual(true);
    });

    it("CodeFigure warns about unhandled children", () => {
        console.warn = jest.fn();

        const wrapper = mount(
            <ComponentPreview language="css" codeFigure={true}>
                {() => []}
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.warn).toHaveBeenCalled();
    });

    it("CodeFigure renders css string", () => {
        const wrapper = mount(
            <ComponentPreview language="css" codeFigure={true}>
                {"color: red;"}
            </ComponentPreview>
        );

        // TODO: Update expects [EH]
        expect(wrapper).toMatchSnapshot();
    });

    it("CodeFigure renders multiple javascript strings", () => {
        const wrapper = mount(
            <ComponentPreview language="javascript" codeFigure={true}>
                {"const a = 12;"}
                {"const b = 1;"}
                {"const c = a + b;"}
            </ComponentPreview>
        );

        // TODO: Update expects [EH]
        expect(wrapper).toMatchSnapshot();
    });

    // it("prop language other than javascript, css or html returns warning message", () => {
    //     const wrapper = mount(
    //         <ComponentPreview language="test" codeFigure={true}>
    //             {"test"}
    //         </ComponentPreview>
    //     );

    //     // TODO: Update expects [EH]
    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.html()).toContain("update switchcase!");
    // });
});

