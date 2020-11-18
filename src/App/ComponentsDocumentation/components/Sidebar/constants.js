import React from "react";

export const SidebarNavList = [
    {
        title: "Home Page",
        icon: <i className="material-icons-outlined">home</i>
    },
    {
        title: "Get Started",
        icon: <i className="material-icons-outlined rotated">wb_incandescent</i>,
        children: [
            {
                title: "Overview"
            },
            {
                title: "Accessibility"
            },
            {
                title: "Colors",
                children: [
                    {
                        title: "Primary colors"
                    },
                    {
                        title: "Secondary colors"
                    },
                    {
                        title: "Tertiary colors"
                    }
                ]
            },
            {
                title: "Copywriting"
            },
            {
                title: "Grid"
            },
            {
                title: "Iconography"
            },
            {
                title: "Imagery"
            },
            {
                title: "Logotype"
            },
            {
                title: "Spacing"
            },
            {
                title: "Typography"
            }
        ]
    },
    {
        title: "Identity",
        icon: <i className="material-icons-outlined">palette</i>,
        lastParent: false,
        children: [
            {
                title: "Introduction"
            },
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
            },
            {
                title: "Events",
                lastParent: true,
                subList: [
                    {
                        title: "Event 1"
                    },
                    {
                        title: "Event 2"
                    },
                    {
                        title: "Event 3"
                    }
                ]
            },
            {
                title: "Conclusion"
            }
        ]
    },
    {
        title: "Components",
        icon: <i className="material-icons-outlined">category</i>,
        children: []
    },
    {
        title: "Utilities",
        icon: <i className="material-icons-outlined">build</i>,
        children: []
    }
];
