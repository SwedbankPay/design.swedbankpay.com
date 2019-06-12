import React from "react";
import { shallow, mount } from "enzyme";

import Topbar from "./index";

describe("Component: Topbar - ", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const menu = {
        btn: {
            name: "Menu",
            icon: "menu"
        },
        items: [
            {
                name: "Home",
                icon: "home"
            },
            {
                name: "Purchase history",
                icon: "shopping_cart"
            },
            {
                name: "Settings",
                icon: "settings"
            }
        ]
    };

    it("is defined", () => {
        expect(Topbar).toBeDefined();
    });

    it("renders a topbar with only a clickable logo", () => {
        const wrapper = shallow(<Topbar />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("topbar-logo");
        expect(wrapper.html()).not.toContain("topbar-nav");
    });

    it("renders logout link and adds topbar-link-right to the logout", () => {
        const wrapper = shallow(<Topbar logout/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("Log out");
        expect(wrapper.html()).not.toContain("topbar-nav");
        expect(wrapper.find(".topbar-link-right").html()).toContain("Log out");
    });

    it("renders topbar-link-container and populates it with given information without a logout link", () => {
        const wrapper = mount(<Topbar topbarContent={menu} />);

        const renderedTopbar = wrapper.find(".topbar");
        const renderedNav = renderedTopbar.find(".topbar-nav");

        expect(wrapper).toMatchSnapshot();
        expect(renderedTopbar).toBeTruthy();
        expect(renderedNav).toBeTruthy();

        menu.items.forEach(item => expect(renderedNav.html()).toContain(item.name));

        expect(renderedNav.html()).not.toContain("Log out");
    });

    it("renders topbar-link-container and a logout link", () => {
        const wrapper = mount(<Topbar topbarContent={menu} logout />);
        const renderedTopbar = wrapper.find(".topbar");
        const renderedNav = renderedTopbar.find(".topbar-nav");

        expect(wrapper).toMatchSnapshot();
        expect(renderedTopbar).toBeTruthy();
        expect(renderedNav).toBeTruthy();
        expect(renderedNav.find(".topbar-link-right .material-icons").text()).toEqual("exit_to_app");
    });

    it("renders a topbar-menu-button when content is provided", () => {
        const wrapper = mount(<Topbar topbarContent={menu} />);

        const renderedTopbar = wrapper.find(".topbar");
        const topbarMenuBtn = renderedTopbar.find(".topbar-menu-button");

        expect(wrapper).toMatchSnapshot();
        expect(renderedTopbar).toBeTruthy();
        expect(topbarMenuBtn).toBeTruthy();
    });

    it("logo prevents default when clicked", () => {
        const wrapper = shallow(<Topbar />);
        const eventHandler = { preventDefault: jest.fn() };
        const logo = wrapper.find(".topbar-logo");

        expect(wrapper).toMatchSnapshot();

        logo.simulate("click", eventHandler);

        expect(eventHandler.preventDefault).toHaveBeenCalled();
    });

    it("menu links prevents default when clicked", () => {
        const wrapper = mount(<Topbar topbarContent={menu} />);
        const eventHandler = { preventDefault: jest.fn() };
        const menuLinks = wrapper.find(".topbar-nav a");

        menuLinks.forEach(anchor => {
            anchor.simulate("click", eventHandler);
        });

        expect(wrapper).toMatchSnapshot();
        expect(eventHandler.preventDefault).toHaveBeenCalled();
    });
});
