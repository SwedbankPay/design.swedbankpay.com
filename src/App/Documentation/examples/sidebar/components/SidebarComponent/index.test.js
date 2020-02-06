import React from "react";
import { shallow } from "enzyme";

import SidebarComponent from "./index";

describe("Examples: Sidebar - SidebarComponent", () => {
    it("is defined", () => {
        expect(SidebarComponent).toBeDefined();
    });

    it("renders", () => {
        const mockSidebarNavList = [
            {
                title: "Introduction",
                lastParent: true,
                subList: [
                    {
                        title: "Introduction 1"
                    },
                    {
                        title: "Introduction 2"
                    },
                    {
                        title: "Introduction 3"
                    }
                ]
            },
            {
                title: "Other features",
                lastParent: false,
                subList: [
                    {
                        title: "Operations",
                        lastParent: true,
                        subList: [
                            {
                                title: "Operations"
                            },
                            {
                                title: "Lorem ipsum"
                            },
                            {
                                title: "Dolor sit amet consectetur"
                            },
                            {
                                title: "Adipiscing elit"
                            }
                        ]
                    }
                ]
            }
        ];
        const mockSetActive = jest.fn();
        const wrapper = shallow(<SidebarComponent sidebarNavList={mockSidebarNavList} setActive={mockSetActive} />);

        expect(wrapper).toMatchSnapshot();
    });
});
