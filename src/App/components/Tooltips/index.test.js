import React from "react";
import { shallow } from "enzyme";

import Tooltip from "./index";

const text = "test text";
const icon = "edit";
const title = "test title";
const top = "top";
const bottom = "bottom";
const left = "left";
const right = "right";

describe("Component: Tooltip -", () => {
    it("is defined", () => {
        expect(Tooltip).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Tooltip text={text} icon={icon} title={title}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("prop type is marked as defined", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Tooltip />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders with icon if icon is provided", () => {
        const wrapper = shallow(<Tooltip icon={icon} text={text}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<i class=\"material-icons-outlined\">edit</i>");
    });

    it("renders with title text if provided", () => {
        const wrapper = shallow(<Tooltip title={title} text={text}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<div role=\"tooltip\">test text</div></button>");
    });

    it("renders div with class tooltip", () => {
        const wrapper = shallow(<Tooltip text={text}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.hasClass("tooltip")).toBeTruthy();
    });

    it("renders with tooltip position right", () => {
        const wrapper = shallow(<Tooltip text={text} position={right} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<button class=\"tooltip tooltip-right\">");
    });

    it("renders with tooltip position left", () => {
        const wrapper = shallow(<Tooltip text={text} position={left} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<button class=\"tooltip tooltip-left\">");
    });

    it("renders with tooltip position top", () => {
        const wrapper = shallow(<Tooltip text={text} position={top} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<button class=\"tooltip tooltip-top\">");
    });

    it("renders with tooltip position bottom", () => {
        const wrapper = shallow(<Tooltip text={text} position={bottom} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<button class=\"tooltip tooltip-bottom\">");
    });
});
