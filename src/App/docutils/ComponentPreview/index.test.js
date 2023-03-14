import React from "react";
import renderer from "react-test-renderer";
import ComponentPreview from "./index";
import { screen, render } from "@testing-library/react";
import { tabs } from "@src/scripts/main";
import "@testing-library/jest-dom";

describe("Utilities: ComponentPreview", () => {
    const TestComponentH1 = () => <h1 className="h1-class">test1</h1>;
    const TestComponentH1WithOuterTags = () => (
        <div className="div-class">
            <h1 className="h1-class">test1</h1>
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

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it("CodeFigure returns a message if no child is passed", () => {
        const wrapper = renderer.create(
            <ComponentPreview language="html" codeFigure removeOuterTag />
        );

        render(<ComponentPreview language="html" codeFigure removeOuterTag />);

        const td = screen.getAllByRole("cell");

        expect(wrapper.toJSON()).toMatchSnapshot();
        expect(td[1].firstElementChild).toHaveTextContent("Check ComponentPreview _removeOuterTag!");
    });

    it("CodeFigure renders css string", () => {
        const wrapper = renderer.create(
            <ComponentPreview language="css" codeFigure>
                {"color: red;"}
            </ComponentPreview>
        );

        render(<ComponentPreview language="css" codeFigure>
            {"color: red;"}
        </ComponentPreview>);

        const td = screen.getAllByRole("cell");

        expect(td[1].firstElementChild).toHaveTextContent("color: red");

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it("CodeFigure renders multiple javascript strings", () => {
        const wrapper = renderer.create(
            <ComponentPreview language="javascript" codeFigure>
                {"const a = 12;"}
                {"const b = 1;"}
                {"const c = a + b;"}
            </ComponentPreview>
        );

        render(<ComponentPreview language="javascript" codeFigure>
            {"const a = 12;"}
            {"const b = 1;"}
            {"const c = a + b;"}
        </ComponentPreview>);

        const td = screen.getAllByRole("cell");

        expect(td[1].firstElementChild).toHaveTextContent("const a = 12;");
        expect(td[1].firstElementChild).toHaveTextContent("const b = 1;");
        expect(td[1].firstElementChild).toHaveTextContent("const c = a + b;");

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
