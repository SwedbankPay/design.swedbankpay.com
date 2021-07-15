import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Tabs from "./index";

const items = ["test", "test 2"];
const div = document.createElement("div");

document.body.appendChild(div);

describe("Component: Tabs -", () => {
    it("is defined", () => {
        expect(Tabs).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Tabs items={items} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class name tabs when prop scroll is not specified", () => {
        const wrapper = shallow(<Tabs items={items} />);
        const hasScroll = wrapper.hasClass("tabs-scroll");

        expect(wrapper.hasClass("tabs")).toBeTruthy();
        expect(hasScroll).toBeFalsy();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class name .tabs.tabs-scroll when prop scroll is specified", () => {
        const wrapper = shallow(<Tabs items={items} scroll/>);
        const hasScroll = wrapper.hasClass("tabs-scroll");

        expect(wrapper.hasClass("tabs")).toBeTruthy();
        expect(hasScroll).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with id when id is provided", () => {
        const wrapper = shallow(<Tabs id="test" items={items} />);

        expect(wrapper.html()).toContain("<div id=\"test\" class=\"tabs\">");
    });

    it("renders with ulId when ulId is provided", () => {
        const wrapper = shallow(<Tabs ulId="test" items={items} />);

        expect(wrapper.html()).toContain("<ul id=\"test\">");
    });

    it("sets a tab to active", () => {
        ReactDOM.render(<Tabs items={items} />, div);

        const renderedTabs = document.querySelector(".tabs");
        const activeTab = renderedTabs.querySelector(".active");

        expect(renderedTabs).toBeTruthy();
        expect(activeTab).toBeTruthy();
        expect(activeTab.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("doesn't remove active when clicking an active tab", () => {
        ReactDOM.render(<Tabs items={items} />, div);

        const renderedTabs = document.querySelector(".tabs");
        const activeTab = renderedTabs.querySelector(".active");

        expect(renderedTabs).toBeTruthy();
        expect(activeTab).toBeTruthy();
        expect(activeTab.classList).toContain("active");

        activeTab.click();

        expect(activeTab.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("changes active tab when unactive tab is clicked", () => {
        ReactDOM.render(<Tabs items={items} />, div);

        const renderedTabs = document.querySelector(".tabs");
        const inactiveTab = renderedTabs.querySelector("li:not(.active)");

        expect(renderedTabs).toBeTruthy();
        expect(inactiveTab).toBeTruthy();
        expect(inactiveTab.classList).not.toContain("active");

        const tabAnchor = inactiveTab.querySelector("a");

        expect(tabAnchor).toBeTruthy();

        tabAnchor.click();

        expect(inactiveTab.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });
});
