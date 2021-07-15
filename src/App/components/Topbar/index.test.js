import React from "react";
import { shallow, mount } from "enzyme";

import Topbar from "./index";

describe("Component: Topbar -", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const menu = {
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

    const menuNoIcons = {
        items: [
            {
                name: "Home"
            },
            {
                name: "Purchase history"
            },
            {
                name: "Settings"
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

    describe("props", () => {
        describe("wide", () => {
            it("renders a topbar with the given breakpoint", () => {
                const wrapper = mount(<Topbar wide="lg" />);

                expect(wrapper).toMatchSnapshot();
                expect(wrapper.find(".topbar-lg-wide").length).toEqual(1);
            });
        });

        describe("topbarContent", () => {
            it("renders a topbar menu without menu icons", () => {
                const wrapper = mount(<Topbar topbarContent={menuNoIcons} />);
                const menuContainer = wrapper.find(".topbar-link-container");
                const menuIcons = menuContainer.find("i.material-icons");

                expect(wrapper).toMatchSnapshot();
                expect(menuIcons.length).toEqual(0);
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

            it("menu links prevents default when clicked", () => {
                const eventHandler = { preventDefault: jest.fn() };

                const wrapper = mount(<Topbar topbarContent={menu} />);
                const menuLinks = wrapper.find(".topbar-nav a");

                menuLinks.forEach(anchor => {
                    anchor.simulate("click", eventHandler);
                });

                expect(wrapper).toMatchSnapshot();
                expect(eventHandler.preventDefault).toHaveBeenCalled();
            });

            it("renders a sidebar in topbar-link-container when sidebar prop is true", () => {
                const wrapper = mount(<Topbar topbarContent={menu} sidebar />);

                const renderedSidebar = wrapper.find(".topbar")
                    .find(".topbar-nav")
                    .find(".sidebar");

                expect(wrapper).toMatchSnapshot();
                expect(renderedSidebar).toBeTruthy();
            });
        });

        describe("logout", () => {
            it("renders logout link and adds topbar-link-right to the logout", () => {
                const wrapper = mount(<Topbar logout/>);

                expect(wrapper).toMatchSnapshot();
                expect(wrapper.html()).toContain("Log out");
                expect(wrapper.html()).not.toContain("topbar-nav");
                expect(wrapper.find(".topbar-link-right").html()).toContain("Log out");
            });

            it("prevents default when clicked", () => {
                const eventHandler = { preventDefault: jest.fn() };

                const wrapper = mount(<Topbar logout />);
                const logout = wrapper.find(".topbar-link-right");

                expect(wrapper).toMatchSnapshot();

                logout.simulate("click", eventHandler);

                expect(eventHandler.preventDefault).toHaveBeenCalled();
            });
        });

        describe("png", () => {
            it("renders a topbar with anchor with class .topbar-logo-png", () => {
                const wrapper = shallow(<Topbar png />);

                expect(wrapper.html()).toContain("<a class=\"topbar-logo topbar-logo-png\" href=\"/\">");
            });
        });

        describe("sticky", () => {
            it("renders a topbar with class .topbar-sticky", () => {
                const wrapper = shallow(<Topbar sticky />);

                expect(wrapper.html()).toContain("topbar-sticky");
            });
        });
    });

    it("logo prevents default when clicked", () => {
        const eventHandler = { preventDefault: jest.fn() };

        const wrapper = mount(<Topbar />);
        const logo = wrapper.find(".topbar-logo");

        expect(wrapper).toMatchSnapshot();

        logo.simulate("click", eventHandler);

        expect(eventHandler.preventDefault).toHaveBeenCalled();
    });
});
