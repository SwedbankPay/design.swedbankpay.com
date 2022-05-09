import React from "react";

export const SidebarNavList = [
    {
        title: "Home Page",
        icon: <i className="material-icons-outlined" aria-hidden="true">home</i>
    },
    {
        title: "Get Started",
        icon: <i className="material-icons-outlined rotated" aria-hidden="true">wb_incandescent</i>,
        children: [
            {
                icon: <i className="material-icons-outlined rotated" aria-hidden="true">accessibility</i>,
                title: "Accessibility"
            },
            {
                icon: <i className="material-icons-outlined rotated" aria-hidden="true">palette</i>,
                title: "Colors",
                group: true,
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
                icon: <i className="material-icons-outlined rotated" aria-hidden="true">grid_on</i>,
                title: "Grid"
            },
            {
                icon: <i className="material-icons-outlined rotated" aria-hidden="true">space_bar</i>,
                title: "Spacing"
            }
        ]
    },
    {
        title: "Identity",
        icon: <i className="material-icons-outlined" aria-hidden="true">palette</i>,
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
        icon: <i className="material-icons-outlined" aria-hidden="true">home</i>
    },
    {
        title: "Get started",
        icon: <i className="material-icons-outlined rotated" aria-hidden="true">wb_incandescent</i>,
        children: [
            {
                title: "Second level"
            },
            {
                title: "Second level",
                children: [
                    {
                        title: "Third level"
                    },
                    {
                        title: "Third level",
                        children: [
                            {
                                title: "Fourth level",
                                group: true,
                                children: [
                                    {
                                        title: "Fourth group"
                                    },
                                    {
                                        title: "Fourth group"
                                    },
                                    {
                                        title: "Fourth group"
                                    }
                                ]
                            },
                            {
                                title: "Fourth level",
                                children: [
                                    {
                                        title: "Fifth level"
                                    },
                                    {
                                        title: "Fifth level",
                                        group: true,
                                        children: [
                                            {
                                                title: "Sixth level"
                                            },
                                            {
                                                title: "Sixth level"
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
