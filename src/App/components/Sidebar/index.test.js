// import React from "react";
// import { shallow } from "enzyme";

import Sidebar from "./index";

describe("Component: Sidebar - ", () => {

    it("is defined", () => {
        expect(Sidebar).toBeDefined();
    });

    // it("renders", () => {
    //     const SidebarNavList = [
    //         {
    //             title: "Introduction",
    //             lastParent: true,
    //             subList: [
    //                 {
    //                     title: "Introduction 1"
    //                 },
    //                 {
    //                     title: "Introduction 2"
    //                 },
    //                 {
    //                     title: "Introduction 3"
    //                 }
    //             ]
    //         },
    //         {
    //             title: "Other features",
    //             lastParent: false,
    //             subList: [
    //                 {
    //                     title: "Operations",
    //                     lastParent: true,
    //                     subList: [
    //                         {
    //                             title: "Operations"
    //                         },
    //                         {
    //                             title: "Lorem ipsum"
    //                         },
    //                         {
    //                             title: "Dolor sit amet consectetur"
    //                         },
    //                         {
    //                             title: "Adipiscing elit"
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ];
    //     const wrapper = shallow(<Sidebar id="test" sidebarNavList={SidebarNavList} />);

    //     expect(wrapper.find(".nav-group")).toHaveLength(2);
    //     expect(wrapper).toMatchSnapshot();
    // });

    // it("renders group with one level when one level is provided", () => {
    //     const SidebarNavList = [
    //         {
    //             title: "Introduction",
    //             lastParent: true,
    //             subList: [
    //                 {
    //                     title: "Introduction 1"
    //                 },
    //                 {
    //                     title: "Introduction 2"
    //                 },
    //                 {
    //                     title: "Introduction 3"
    //                 }
    //             ]
    //         }
    //     ];
    //     const wrapper = shallow(<Sidebar id="test" sidebarNavList={SidebarNavList} />);
    //     const navGroup = wrapper.find(".nav-group");

    //     expect(navGroup.find(".nav-subgroup")).toHaveLength(0);
    //     expect(navGroup.find(".nav-leaf")).toHaveLength(3);
    //     expect(wrapper).toMatchSnapshot();
    // });

    // it("renders group with two levels when two levels is provided", () => {
    //     const SidebarNavList = [
    //         {
    //             title: "Other features",
    //             lastParent: false,
    //             subList: [
    //                 {
    //                     title: "Operations",
    //                     lastParent: true,
    //                     subList: [
    //                         {
    //                             title: "Operations"
    //                         },
    //                         {
    //                             title: "Lorem ipsum"
    //                         },
    //                         {
    //                             title: "Dolor sit amet consectetur"
    //                         },
    //                         {
    //                             title: "Adipiscing elit"
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ];
    //     const wrapper = shallow(<Sidebar id="test" sidebarNavList={SidebarNavList} />);
    //     const navGroup = wrapper.find(".nav-group");

    //     expect(navGroup.find(".nav-subgroup")).toHaveLength(1);
    //     expect(navGroup.find(".nav-leaf")).toHaveLength(4);
    //     expect(wrapper).toMatchSnapshot();
    // });

    // it("renders with class .sidebar-topbar-sticky when sticky is provided", () => {
    //     const SidebarNavList = [
    //         {
    //             title: "Introduction",
    //             lastParent: true,
    //             subList: [
    //                 {
    //                     title: "Introduction 1"
    //                 },
    //                 {
    //                     title: "Introduction 2"
    //                 },
    //                 {
    //                     title: "Introduction 3"
    //                 }
    //             ]
    //         },
    //         {
    //             title: "Other features",
    //             lastParent: false,
    //             subList: [
    //                 {
    //                     title: "Operations",
    //                     lastParent: true,
    //                     subList: [
    //                         {
    //                             title: "Operations"
    //                         },
    //                         {
    //                             title: "Lorem ipsum"
    //                         },
    //                         {
    //                             title: "Dolor sit amet consectetur"
    //                         },
    //                         {
    //                             title: "Adipiscing elit"
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ];
    //     const wrapper = shallow(<Sidebar id="test" sidebarNavList={SidebarNavList} sticky/>);

    //     expect(wrapper.html()).toContain("sidebar-topbar-sticky");
    // });
});
