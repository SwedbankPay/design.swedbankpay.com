import React from "react";
import renderer from "react-test-renderer";
import ComponentPreview from "./index";
import { container, screen, render, prettyDOM, within } from "@testing-library/react";
import { tabs } from "@src/scripts/main";
import "@testing-library/jest-dom";

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
        expect(ComponentPreview).toBeDefined();
    });

    it("does not render showCasePanelAdvanced when showCasePanel or showCasePanelAdvanced is false/not provided", () => {
        const wrapper = renderer.create(<ComponentPreview language="html" codeFigure>
            <TestComponentH1 />
        </ComponentPreview>);

        const { container } = render(<ComponentPreview language="html" codeFigure>
            <TestComponentH1 />
        </ComponentPreview>);

        expect(wrapper.toJSON()).toMatchSnapshot();

        const showcasePanel = container.querySelectorAll("showcase-panel");
        const showcasePanelAdvanced = container.querySelectorAll("showcase-panel-advanced");

        expect(showcasePanel.length).toBe(0);
        expect(showcasePanelAdvanced.length).toBe(0);

    });

    it("CodeFigure removes outer tag from markup", () => {
        const wrapper = renderer.create(
            <ComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentH1WithOuterTags />
            </ComponentPreview>
        );

        render(
            <ComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentH1WithOuterTags />
            </ComponentPreview>
        );

        const td = screen.getAllByRole("cell");

        // console.log(prettyDOM(container));

        // console.log("🤓", td.length, td[1].children);
        // td.map(el => console.log("🤓🤓", el.tagName, el.classList));

        expect(td[1].firstElementChild).toHaveTextContent("h1-class");
        expect(td[1].firstElementChild).not.toHaveTextContent("div-class");

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it("CodeFigure removes outer tag from multiple html tags", () => {
        const wrapper = renderer.create(
            <ComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentH1WithOuterTags />
                <TestComponentH1WithOuterTags />
                <TestComponentH1WithOuterTags />
            </ComponentPreview>
        );

        render(
            <ComponentPreview language="html" codeFigure removeOuterTag>
                <TestComponentH1WithOuterTags />
                <TestComponentH1WithOuterTags />
                <TestComponentH1WithOuterTags />
            </ComponentPreview>
        );

        const td = screen.getAllByRole("cell");

        expect(td[1].firstElementChild).not.toHaveTextContent("div-class");
        expect(td[1].firstElementChild).toHaveTextContent("h1-class");

        expect(wrapper.toJSON()).toMatchSnapshot(); // CONTINUE HERE ESKIL, YOU FAT BASTARD
    });

    // it("CodeFigure removes outer tag from markup even if no child element exists", () => {
    //     const wrapper = renderer.create(
    //         <ComponentPreview language="html" codeFigure removeOuterTag>
    //             <TestComponentNoElement />
    //         </ComponentPreview>
    //     );

    //     expect(wrapper.toJSON()).toMatchSnapshot();
    //     expect(wrapper.html()).toContain("test text with no wrapping element");
    // });

    // it("CodeFigure removes value property", () => {
    //     const wrapper = renderer.create(
    //         <ComponentPreview language="html" codeFigure hideValue>
    //             <TestComponentValue />
    //         </ComponentPreview>
    //     );

    //     expect(wrapper.toJSON()).toMatchSnapshot();
    //     expect(wrapper.html()).not.toContain("test-value");
    // });

    // it("CodeFigure returns a message if no child is passed", () => {
    //     const wrapper = renderer.create(
    //         <ComponentPreview language="html" codeFigure removeOuterTag />
    //     );

    //     expect(wrapper.toJSON()).toMatchSnapshot();
    //     expect(wrapper.html()).toContain("Check ComponentPreview _removeOuterTag!");
    // });

    // it("Codefigure removes list tags", () => {
    //     const wrapper = renderer.create(
    //         <ComponentPreview language="html" codeFigure removeList>
    //             <TestComponentList />
    //         </ComponentPreview>
    //     );

    //     expect(wrapper.toJSON()).toMatchSnapshot();
    //     expect(wrapper.contains("listElem")).toEqual(false);
    //     expect(wrapper.contains("unordered-list")).toEqual(false);
    // });

    // it("Codefigure removes list tags from multiple html tags", () => {
    //     const wrapper = renderer.create(
    //         <ComponentPreview language="html" codeFigure removeList>
    //             <TestComponentList />
    //             <TestComponentList />
    //             <TestComponentList />
    //         </ComponentPreview>
    //     );

    //     expect(wrapper.toJSON()).toMatchSnapshot();
    //     expect(wrapper.contains("listElem")).toEqual(false);
    //     expect(wrapper.contains("unordered-list")).toEqual(false);
    // });

    // it("CodeFigure warns about unhandled children", () => {
    //     console.warn = jest.fn();

    //     const wrapper = renderer.create(
    //         <ComponentPreview language="css" codeFigure>
    //             {() => []}
    //         </ComponentPreview>
    //     );

    //     expect(wrapper.toJSON()).toMatchSnapshot();
    //     expect(console.warn).toHaveBeenCalled();
    // });

    // it("CodeFigure renders css string", () => {
    //     const wrapper = renderer.create(
    //         <ComponentPreview language="css" codeFigure>
    //             {"color: red;"}
    //         </ComponentPreview>
    //     );

    //     expect(wrapper.toJSON()).toMatchSnapshot();
    // });

    // it("CodeFigure renders multiple javascript strings", () => {
    //     const wrapper = renderer.create(
    //         <ComponentPreview language="javascript" codeFigure>
    //             {"const a = 12;"}
    //             {"const b = 1;"}
    //             {"const c = a + b;"}
    //         </ComponentPreview>
    //     );

    //     expect(wrapper.toJSON()).toMatchSnapshot();
    // });
});
