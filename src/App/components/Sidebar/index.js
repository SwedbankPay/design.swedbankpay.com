import React from "react";

import InputGroupComponent from "@components/InputGroup";

const SidebarNavList = [
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
        title: "Summary",
        lastParent: true,
        subList: [
            {
                title: "Summary chapter 1"
            },
            {
                title: "Summary chapter 2"
            },
            {
                title: "Summary chapter 3"
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
                title: "Extras",
                lastParent: false,
                subList: [
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
        ]
    }
];

const Sidebar = ({ id }) => (
    <div id={id} className="sidebar">
        <InputGroupComponent
            id="sidebar-search"
            type="text"
            placeholder="Search..."
            prefixType="icon"
            prefixValue="search"
        /> {"\n\n"}
        <nav className="sidebar-nav">
            {SidebarNavList.map((group, i) => (
                <div key={i} className="nav-group">
                    <div className="nav-group-heading">
                        <i className="material-icons">arrow_right</i>
                        <span>
                            {group.title}
                        </span>
                    </div>
                    <ul className="nav-ul">
                        {
                            group.lastParent ?
                                group.subList.map((leaf, i) => (
                                    <li key={i} className="nav-leaf">
                                        <a href="#" onClick={e => e.preventDefault()}>
                                            {leaf.title}
                                        </a>
                                    </li>
                                ))
                                :
                                group.subList.map((sub, i) => (
                                    <li key={i} className="nav-subgroup">
                                        <div className="nav-subgroup-heading">
                                            <i className="material-icons">arrow_right</i>
                                            <span>
                                                {sub.title}
                                            </span>
                                        </div>
                                        <ul className="nav-ul">
                                            {
                                                sub.lastParent ?
                                                    sub.subList.map((leaf, i) => (
                                                        <li key={i} className="nav-leaf">
                                                            <a href="#" onClick={e => e.preventDefault()}>
                                                                {leaf.title}
                                                            </a>
                                                        </li>
                                                    ))
                                                    :
                                                    sub.subList.map((sub, i) => (
                                                        <li key={i} className="nav-subgroup">
                                                            <div className="nav-subgroup-heading">
                                                                <i className="material-icons">arrow_right</i>
                                                                <span>
                                                                    {sub.title}
                                                                </span>
                                                            </div>
                                                            <ul className="nav-ul">
                                                                {
                                                                    sub.subList.map((leaf, i) => (
                                                                        <li key={i} className="nav-leaf">
                                                                            <a href="#" onClick={e => e.preventDefault()}>
                                                                                {leaf.title}
                                                                            </a>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </li>
                                                    ))
                                            }
                                        </ul>
                                    </li>
                                ))
                        }
                    </ul>
                </ div>
            ))}
        </nav>
    </div>
);

export default Sidebar;
