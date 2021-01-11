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
                        title: "Secondary colors"
                    },
                    {
                        title: "Tertiary colors"
                    }
                ]
            },
            {
                icon: <i className="material-icons-outlined rotated">grid_on</i>,
                title: "Grid"
            },
            {
                icon: <i className="material-icons-outlined rotated">space_bar</i>,
                title: "Spacing"
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
                title: "Events",
                lastParent: true,
                children: [
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
    }
];

export const SidebarNavListExtended = [
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
                        title: "Secondary colors"
                    },
                    {
                        title: "Tertiary colors",
                        children: [
                            {
                                title: "Children 1"
                            },
                            {
                                title: "Children 2"
                            },
                            {
                                title: "Children 3"
                            }
                        ]
                    }
                ]
            },
            {
                icon: <i className="material-icons-outlined rotated">grid_on</i>,
                title: "Grid"
            },
            {
                icon: <i className="material-icons-outlined rotated">space_bar</i>,
                title: "Spacing"
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
                title: "Events",
                lastParent: true,
                children: [
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
    }
];
