import React from "react";
import { shallow } from "enzyme";

import Sidebar from "./index";

describe("Component: Sidebar", () => {

    it("is defined", () => {
        expect(Sidebar).toBeDefined();
    });

    it("renders", () => {
        const SidebarNavList = [
            {
                title: "Home Page",
                icon: <i className="material-icons-outlined">home</i>
            },
            {
                title: "Get Started",
                icon: <i className="material-icons-outlined rotated">wb_incandescent</i>,
                children: [
                    {
                        icon: <i className="material-icons-outlined rotated">accessibility</i>,
                        title: "Accessibility"
                    },
                    {
                        icon: <i className="material-icons-outlined rotated">palette</i>,
                        title: "Colors",
                        children: [
                            {
                                title: "Primary colors"
                            },
                            {
                                title: "Secondary colors",
                                children: [
                                    {
                                        title: "Children 1"
                                    },
                                    {
                                        title: "Children 2"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

        const wrapper = shallow(<Sidebar id="sidebar-1" sidebarNavList={SidebarNavList} extendedSidebar={true} />);

        expect(wrapper.find(".main-nav-li")).toHaveLength(2);
        expect(wrapper.find(".secondary-nav-li")).toHaveLength(2);
        expect(wrapper.find(".tertiary-nav-li")).toHaveLength(2);
        expect(wrapper.find(".nav-leaf")).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders one level when one level is provided", () => {
        const SidebarNavList = [
            {
                title: "Home Page",
                icon: <i className="material-icons-outlined">home</i>
            },
            {
                title: "Get Started",
                icon: <i className="material-icons-outlined rotated">wb_incandescent</i>
            }
        ];

        const wrapper = shallow(<Sidebar id="test" sidebarNavList={SidebarNavList} />);
        const mainNavUl = wrapper.find(".main-nav-ul");

        expect(mainNavUl.find(".main-nav-ul")).toHaveLength(1);
        expect(mainNavUl.find(".main-nav-li")).toHaveLength(2);
        expect(mainNavUl.find(".sidebar-secondary-nav")).toHaveLength(0);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders two levels when two levels is provided", () => {
        const SidebarNavList = [
            {
                title: "Get Started",
                icon: <i className="material-icons-outlined rotated">wb_incandescent</i>,
                children: [
                    {
                        icon: <i className="material-icons-outlined rotated">accessibility</i>,
                        title: "Accessibility"
                    },
                    {
                        icon: <i className="material-icons-outlined rotated">palette</i>,
                        title: "Colors"
                    }
                ]
            }
        ];

        const wrapper = shallow(<Sidebar id="test" sidebarNavList={SidebarNavList} />);
        const mainNavUl = wrapper.find(".main-nav-ul");

        expect(mainNavUl.find(".sidebar-secondary-nav")).toHaveLength(1);
        expect(mainNavUl.find(".secondary-nav-ul")).toHaveLength(1);
        expect(mainNavUl.find(".secondary-nav-li")).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders three levels when three levels is provided", () => {
        const SidebarNavList = [
            {
                title: "Get Started",
                icon: <i className="material-icons-outlined rotated">wb_incandescent</i>,
                children: [
                    {
                        icon: <i className="material-icons-outlined rotated">accessibility</i>,
                        title: "Accessibility",
                        children: [
                            {
                                title: "Primary colors"
                            },
                            {
                                title: "Secondary colors"
                            }
                        ]
                    }
                ]
            }
        ];

        const wrapper = shallow(<Sidebar id="test" sidebarNavList={SidebarNavList} />);
        const mainNavUl = wrapper.find(".main-nav-ul");

        expect(mainNavUl.find(".secondary-nav-ul")).toHaveLength(1);
        expect(mainNavUl.find(".secondary-nav-li")).toHaveLength(1);
        expect(mainNavUl.find(".tertiary-nav-ul")).toHaveLength(1);
        expect(mainNavUl.find(".nav-leaf")).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders four levels when four levels is provided", () => {
        const SidebarNavList = [
            {
                title: "Get Started",
                icon: <i className="material-icons-outlined rotated">wb_incandescent</i>,
                children: [
                    {
                        icon: <i className="material-icons-outlined rotated">accessibility</i>,
                        title: "Accessibility",
                        children: [
                            {
                                title: "Primary colors",
                                children: [
                                    {
                                        title: "Children 1"
                                    },
                                    {
                                        title: "Children 2"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

        const wrapper = shallow(<Sidebar id="test" sidebarNavList={SidebarNavList} extendedSidebar={true}/>);
        const mainNavUl = wrapper.find(".main-nav-ul");

        expect(mainNavUl.find(".tertiary-nav-ul")).toHaveLength(1);
        expect(mainNavUl.find(".tertiary-nav-li")).toHaveLength(1);
        expect(mainNavUl.find(".quaternary-nav-ul")).toHaveLength(1);
        expect(mainNavUl.find(".nav-leaf")).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class .sidebar-topbar-sticky when sticky is provided", () => {
        const SidebarNavList = [
            {
                title: "Home page",
                icon: <i className="material-icons-outlined">home</i>
            },
            {
                title: "Get Started",
                icon: <i className="material-icons-outlined rotated">wb_incandescent</i>,
                children: [
                    {
                        icon: <i className="material-icons-outlined rotated">accessibility</i>,
                        title: "Accessibility"
                    },
                    {
                        icon: <i className="material-icons-outlined rotated">palette</i>,
                        title: "Colors",
                        children: [
                            {
                                title: "Primary colors"
                            },
                            {
                                title: "Secondary colors",
                                children: [
                                    {
                                        title: "Children 1"
                                    },
                                    {
                                        title: "Children 2"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        const wrapper = shallow(<Sidebar id="sidebar" sidebarNavList={SidebarNavList} sticky/>);

        expect(wrapper.html()).toContain("sidebar-topbar-sticky");
    });
});

