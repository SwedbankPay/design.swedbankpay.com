import React from "react";
import { mount } from "enzyme";

import { OldComponentPreview } from "./components/OldComponentPreview";

import { tabs } from "@src/scripts/main";

describe("Utilities: OldComponentPreview", () => {
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
            <li className="listElem">Is</li>
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
        expect(OldComponentPreview).toBeDefined();
    });

    it("does not render codeFigure when prop is false/not provided", () => {
        const wrapper = mount(
            <OldComponentPreview language="html" showCasePanel>
                <TestComponentH1 />
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("<figure>");
    });

    it("does not render showCasePanel when prop is false/not provided", () => {
        const wrapper = mount(<OldComponentPreview language="html" codeFigure>
            <TestComponentH1 />
        </OldComponentPreview>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("showcase-panel");
    });

    it("does not render showCasePanelAdvanced when showCasePanel or showCasePanelAdvanced is false/not provided", () => {
        const wrapper = mount(<OldComponentPreview language="html" codeFigure>
            <TestComponentH1 />
        </OldComponentPreview>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("showcase-panel");
        expect(wrapper.html()).not.toContain("showcase-panel-advanced");
    });

    it("CodeFigure renders multiple html tags", () => {
        const wrapper = mount(
            <OldComponentPreview language="html" codeFigure>
                <TestComponentH1 />
                <TestComponentH2 />
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it("CodeFigure removes outer tag from markup", () => {
        const wrapper = mount(
            <OldComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentH1WithOuterTags />
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("div-class");
        expect(wrapper.html()).toContain("h1-class");
    });

    it("CodeFigure removes outer tag from multiple html tags", () => {
        const wrapper = mount(
            <OldComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentH1WithOuterTags />
                <TestComponentH1WithOuterTags />
                <TestComponentH1WithOuterTags />
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("div-class");
        expect(wrapper.html()).toContain("h1-class");
    });

    it("CodeFigure removes outer tag from markup even if no child element exists", () => {
        const wrapper = mount(
            <OldComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentNoElement />
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("test text with no wrapping element");
    });

    it("CodeFigure removes value property", () => {
        const wrapper = mount(
            <OldComponentPreview language="html" codeFigure hideValue>
                <TestComponentValue />
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).not.toContain("test-value");
    });

    it("CodeFigure returns a message if no child is passed", () => {
        const wrapper = mount(
            <OldComponentPreview language="html" codeFigure removeOuterTag />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("Check ComponentPreview _removeOuterTag!");
    });

    it("Codefigure removes list tags", () => {
        const wrapper = mount(
            <OldComponentPreview language="html" codeFigure removeList>
                <TestComponentList />
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("listElem")).toEqual(false);
        expect(wrapper.contains("unordered-list")).toEqual(false);
    });

    it("Codefigure removes list tags from multiple html tags", () => {
        const wrapper = mount(
            <OldComponentPreview language="html" codeFigure removeList>
                <TestComponentList />
                <TestComponentList />
                <TestComponentList />
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("listElem")).toEqual(false);
        expect(wrapper.contains("unordered-list")).toEqual(false);
    });

    it("CodeFigure warns about unhandled children", () => {
        console.warn = jest.fn();

        const wrapper = mount(
            <OldComponentPreview language="css" codeFigure>
                {() => []}
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.warn).toHaveBeenCalled();
    });

    it("CodeFigure renders css string", () => {
        const wrapper = mount(
            <OldComponentPreview language="css" codeFigure>
                {"color: red;"}
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it("CodeFigure renders multiple javascript strings", () => {
        const wrapper = mount(
            <OldComponentPreview language="javascript" codeFigure>
                {"const a = 12;"}
                {"const b = 1;"}
                {"const c = a + b;"}
            </OldComponentPreview>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
