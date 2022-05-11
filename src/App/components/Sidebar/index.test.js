import React from "react";
import { shallow, mount } from "enzyme";

import Sidebar from "./index";

describe("Component: Sidebar", () => {

    it("is defined", () => {
        expect(Sidebar).toBeDefined();
    });

    it("renders", () => {
        const navList = [
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
                                group: true,
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

        const wrapper = shallow(<Sidebar id="sidebar-1" navList={navList} extendedSidebar={true} />);

        expect(wrapper.find(".main-nav-li")).toHaveLength(2);
        expect(wrapper.find(".secondary-nav-li")).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders one level when one level is provided", () => {
        const navList = [
            {
                title: "Home Page",
                icon: <i className="material-icons-outlined">home</i>
            },
            {
                title: "Get Started",
                icon: <i className="material-icons-outlined rotated">wb_incandescent</i>
            }
        ];

        const wrapper = shallow(<Sidebar id="test" navList={navList} />);
        const mainNavUl = wrapper.find(".main-nav-ul");

        expect(mainNavUl.find(".main-nav-ul")).toHaveLength(1);
        expect(mainNavUl.find(".main-nav-li")).toHaveLength(2);
        expect(mainNavUl.find(".sidebar-secondary-nav")).toHaveLength(0);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders two levels when two levels is provided", () => {
        const navList = [
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

        const wrapper = shallow(<Sidebar id="test" navList={navList} />);
        const mainNavUl = wrapper.find(".main-nav-ul");

        expect(mainNavUl.find(".sidebar-secondary-nav")).toHaveLength(1);
        expect(mainNavUl.find(".secondary-nav-ul")).toHaveLength(1);
        expect(mainNavUl.find(".secondary-nav-li")).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders three levels when three levels is provided", () => {
        const navList = [
            {
                title: "Get Started",
                icon: <i className="material-icons-outlined rotated">wb_incandescent</i>,
                children: [
                    {
                        title: "Accessibility",
                        group: true,
                        children: [
                            {
                                title: "Primary colors"
                            }
                        ]
                    }
                ]
            }
        ];

        const wrapper = mount(<Sidebar id="test" navList={navList} />);
        const mainNavUl = wrapper.find(".main-nav-ul");

        expect(mainNavUl.find(".secondary-nav-ul")).toHaveLength(1);
        expect(mainNavUl.find("ul > li")).toHaveLength(3);
        expect(mainNavUl.find(".nav-leaf")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders four levels when four levels is provided", () => {
        const navList = [
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
                                group: true,
                                children: [
                                    {
                                        title: "Children 1"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

        const wrapper = mount(<Sidebar id="test" navList={navList} extendedSidebar={true}/>);

        expect(wrapper.find("ul > li")).toHaveLength(4);
        expect(wrapper.find(".nav-leaf")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders five levels when four levels is provided", () => {
        const navList = [
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
                                        title: "Children 2",
                                        group: true,
                                        children: [
                                            {
                                                title: "Gran children 1"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

        const wrapper = mount(<Sidebar id="test" navList={navList} extendedSidebar={true}/>);

        expect(wrapper.find("ul > li")).toHaveLength(5);
        expect(wrapper.find(".nav-leaf")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders 10 levels when four levels is provided", () => {
        const navList = [
            {
                title: "Level 1",
                icon: <i className="material-icons-outlined rotated">wb_incandescent</i>,
                children: [
                    {
                        icon: <i className="material-icons-outlined rotated">accessibility</i>,
                        title: "Level 2",
                        children: [
                            {
                                title: "Level 3",
                                children: [
                                    {
                                        title: "Level 4",
                                        children: [
                                            {
                                                title: "Level 5",
                                                children: [
                                                    {
                                                        title: "Level 6",
                                                        children: [
                                                            {
                                                                title: "Level 7",
                                                                children: [
                                                                    {
                                                                        title: "Level 8",
                                                                        children: [
                                                                            {
                                                                                title: "Level 9",
                                                                                group: true,
                                                                                children: [
                                                                                    {
                                                                                        title: "Level 10"
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

        const wrapper = mount(<Sidebar id="test" navList={navList} extendedSidebar={true}/>);

        expect(wrapper.find("ul > li")).toHaveLength(10);
        expect(wrapper.find(".nav-leaf")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with class .sidebar-topbar-sticky when sticky is provided", () => {
        const navList = [
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
        const wrapper = shallow(<Sidebar id="sidebar" navList={navList} sticky/>);

        expect(wrapper.html()).toContain("sidebar-topbar-sticky");
    });
});

