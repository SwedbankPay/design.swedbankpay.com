import React from "react";
import { mount } from "enzyme";
import "prismjs";

import ComponentPreview from "./index";

const { tabs } = window.dg;

// const htmlEncodeString = str => String(str)
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;");

describe("Utilities: ComponentPreview", () => {
    const TestComponentH1 = () => <h1 className="h1-class">test1</h1>;
    const TestComponentH2 = () => <h2 className="h2-class">test2</h2>;
    const TestComponentH1WithOuterTags = () => (
        <div className="div-class">
            <h1 className="h1-class">test1</h1>
        </div>
    );
    const TestComponentNoElement = () => "test text with no wrapping element";
    const TestComponentList = () => (
        <ul className="unordered-list">
            <li className="listElem">This</li>
            <li className="listElem">Iis</li>
            <li className="listElem">A</li>
            <li className="listElem">Test</li>
        </ul>
    );
    const TestComponentValue = () => (
        <div value="test-value">
            <a href="#">This is a test-link</a>
        </div>
    );

    tabs.init = jest.fn();

    it("is defined", () => {
        expect(ComponentPreview).toBeDefined();
    });

    // it("renders", () => {
    //     const wrapper = mount(
    //         <ComponentPreview language="html" showCasePanel codeFigure>
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
            <ComponentPreview language="html" showCasePanel>
                <TestComponentH1 />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("<figure>");
    });

    it("does not render showCasePanel when prop is false/not provided", () => {
        const wrapper = mount(<ComponentPreview language="html" codeFigure>
            <TestComponentH1 />
        </ComponentPreview>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("showcase-panel");
    });

    it("does not render showCasePanelAdvanced when showCasePanel or showCasePanelAdvanced is false/not provided", () => {
        const wrapper = mount(<ComponentPreview language="html" codeFigure>
            <TestComponentH1 />
        </ComponentPreview>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("showcase-panel");
        expect(wrapper.html()).not.toContain("showcase-panel-advanced");
    });

    it("CodeFigure renders multiple html tags", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure>
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

    it("CodeFigure removes outer tag from markup", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentH1WithOuterTags />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("div-class")).toEqual(false);
        expect(wrapper.contains("h1-class")).toEqual(true);
    });

    it("CodeFigure removes outer tag from multiple html tags", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentH1WithOuterTags />
                <TestComponentH1WithOuterTags />
                <TestComponentH1WithOuterTags />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("div-class")).toEqual(false);
        expect(wrapper.contains("h1-class")).toEqual(true);
    });

    it("CodeFigure removes outer tag from markup even if no child element exists", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentNoElement />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("test text with no wrapping element");
        // TODO: Update expects [AW]
    });

    // it("CodeFigure renders markup without renderToStaticMarkup", () => {
    //     const wrapper = mount(
    //         <ComponentPreview language="html" codeFigure dangerousHTML>
    //             <TestComponentH1WithOuterTags />
    //         </ComponentPreview>
    //     );

    //     expect(wrapper).toMatchSnapshot();
    // });

    it("CodeFigure removes value property", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure hideValue>
                <TestComponentValue />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("test-value");
    });

    it("CodeFigure returns a message if no child is passed", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure removeOuterTag />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("Check ComponentPreview _removeOuterTag!");
    });

    it("Codefigure removes list tags", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure removeList>
                <TestComponentList />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("listElem")).toEqual(false);
        expect(wrapper.contains("unordered-list")).toEqual(false);
    });

    it("Codefigure removes list tags from multiple html tags", () => {
        const wrapper = mount(
            <ComponentPreview language="html" codeFigure removeList>
                <TestComponentList />
                <TestComponentList />
                <TestComponentList />
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("listElem")).toEqual(false);
        expect(wrapper.contains("unordered-list")).toEqual(false);
    });

    it("CodeFigure warns about unhandled children", () => {
        console.warn = jest.fn();

        const wrapper = mount(
            <ComponentPreview language="css" codeFigure>
                {() => []}
            </ComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.warn).toHaveBeenCalled();
    });

    it("CodeFigure renders css string", () => {
        const wrapper = mount(
            <ComponentPreview language="css" codeFigure>
                {"color: red;"}
            </ComponentPreview>
        );

        // TODO: Update expects [EH]
        expect(wrapper).toMatchSnapshot();
    });

    it("CodeFigure renders multiple javascript strings", () => {
        const wrapper = mount(
            <ComponentPreview language="javascript" codeFigure>
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
    //         <ComponentPreview language="test" codeFigure>
    //             {"test"}
    //         </ComponentPreview>
    //     );

    //     // TODO: Update expects [EH]
    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.html()).toContain("update switchcase!");
    // });
});
