import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";

import Topbar from "./index";

describe("Component: Topbar - ", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    it("is defined", () => {
        expect(Topbar).toBeDefined();
    });

    it("renders a topbar with only a clickable logo", () => {
        const wrapper = shallow(<Topbar />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("topbar-logo");
        expect(wrapper.html()).not.toContain("topbar-nav");
    });

    it("renders with a logout button and a logo", () => {
        const wrapper = shallow(<Topbar logout/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("topbar-link-right");
        expect(wrapper.html()).toContain("Log out");
        expect(wrapper.html()).not.toContain("topbar-nav");
    });

    // it("renders with a topbar-btn aswell as a logout topbar-btn", () => {
    //     const topbarContent = {
    //         id: "topbar-nav",
    //         ...menu
    //     };

    //     ReactDOM.render(<Topbar topbarContent={topbarContent} logout />, div);

    //     const renderedTopbar = document.querySelector(".topbar");

    //     expect(renderedTopbar).toBeTruthy();
    //     expect(renderedTopbar.querySelectorAll(".topbar-btn")).toHaveLength(2);

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("renders a topbar-btn with no icon", () => {
    //     const topbarContent = {
    //         id: "topbar-nav",
    //         ...menuNoBtnIcon
    //     };

    //     ReactDOM.render(<Topbar topbarContent={topbarContent} />, div);

    //     const renderedTopbar = document.querySelector(".topbar");

    //     expect(renderedTopbar).toBeTruthy();
    //     expect(renderedTopbar.querySelector("i")).toBeFalsy();

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("renders a topbar-btn with no text", () => {
    //     const topbarContent = {
    //         id: "topbar-nav",
    //         ...menuNoBtnText
    //     };

    //     ReactDOM.render(<Topbar topbarContent={topbarContent} />, div);

    //     const renderedTopbar = document.querySelector(".topbar");

    //     expect(renderedTopbar).toBeTruthy();
    //     expect(renderedTopbar.querySelectorAll("i")).toBeTruthy();
    //     expect(renderedTopbar.querySelector(".topbar-btn-text")).toBeFalsy();

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("does not render a button if an empty btn object is passed", () => {
    //     const topbarContent = {
    //         id: "topbar-nav",
    //         ...menuEmptyBtn
    //     };

    //     ReactDOM.render(<Topbar topbarContent={topbarContent} />, div);

    //     const renderedTopbar = document.querySelector(".topbar");

    //     expect(renderedTopbar).toBeTruthy();
    //     expect(renderedTopbar.querySelector(".topbar-btn")).toBeFalsy();

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("logo prevents default when clicked", () => {
    //     const wrapper = shallow(<Topbar />);
    //     const eventHandler = { preventDefault: jest.fn() };
    //     const logo = wrapper.find(".topbar-logo");

    //     expect(wrapper).toMatchSnapshot();

    //     logo.simulate("click", eventHandler);

    //     expect(eventHandler.preventDefault).toHaveBeenCalled();
    // });

    // it("menu links prevents default when clicked", () => {
    //     const topbarContent = {
    //         id: "topbar-nav",
    //         ...menu
    //     };

    //     const wrapper = mount(<Topbar topbarContent={topbarContent} />);
    //     const eventHandler = { preventDefault: jest.fn() };
    //     const menuLinks = wrapper.find(".topbar-nav a");

    //     menuLinks.forEach(anchor => {
    //         anchor.simulate("click", eventHandler);
    //     });

    //     expect(wrapper).toMatchSnapshot();
    //     expect(eventHandler.preventDefault).toHaveBeenCalled();
    // });
});
