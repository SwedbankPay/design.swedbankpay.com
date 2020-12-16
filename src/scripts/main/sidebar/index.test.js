import React from "react";
import ReactDOM from "react-dom";

import sidebar from "./index";
// import SELECTORS from "./selectors";

describe("scripts: sidebar", () => {
    const div = document.createElement("div");

    beforeEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    document.body.appendChild(div);

    const Sidebar = ({ id }) => (
        <div id={ id } className="sidebar">
            <nav className="sidebar-main-nav">
                <div className="sidebar-logo">
                    <img></img>
                </div>
                <ul className="main-nav-ul">
                    <li className="main-nav-li">
                        <a href="#">
                            Title - Level 1
                        </a>
                    </li>
                    <li className="main-nav-li">
                        <a href="#">
                            Title - Level 1
                        </a>
                    </li>
                    <li className="main-nav-li content-id">
                        <a href="#">
                            Group - Level 2
                        </a>
                        <nav className="sidebar-secondary-nav">
                            <header className="secondary-nav-header">
                                Title - Level 2
                            </header>
                            <ul className="secondary-nav-ul extended-sidebar">
                                <li className="secondary-nav-li leaf">
                                    <a href="#">
                                        Leaf 1
                                    </a>
                                </li>
                                <li className="secondary-nav-li leaf">
                                    <a href="#">
                                        Leaf 2
                                    </a>
                                </li>
                                <li className="secondary-nav-li group">
                                    <a href="#">
                                        Group - Level 3
                                    </a>
                                    <ul className="tertiary-nav-ul">
                                        <a href="#" className="previous-nav">
                                            <i className="material-icons" aria-hidden="true">arrow_back_ios</i>
                                            <span>
                                                Back to previous nav
                                            </span>
                                        </a>
                                        <header className="tertiary-nav-header">
                                            Title - Level 3
                                        </header>
                                        <li className="tertiary-nav-li leaf">
                                            <a href="#">
                                                Leaf 1
                                            </a>
                                        </li>
                                        <li className="tertiary-nav-li leaf">
                                            <a href="#">
                                                Leaf 2
                                            </a>
                                        </li>
                                        <li className="tertiary-nav-li group">
                                            <a href="#">
                                                Group - Level 4
                                            </a>
                                            <ul className="quaternary-nav-ul">
                                                <li className="nav-leaf">
                                                    <a href="#">
                                                        Nav-leaf 1
                                                    </a>
                                                </li>
                                                <li className="nav-leaf">
                                                    <a href="#">
                                                        Nav-leaf 2
                                                    </a>
                                                </li>
                                                <li className="nav-leaf">
                                                    <a href="#">
                                                        Nav-leaf 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </li>
                </ul>
            </nav>
        </div>
    );

    it("is defined", () => {
        expect(sidebar).toBeDefined();
    });

    describe("sidebar.init", () => {
        it("has an init method", () => {
            expect(sidebar.init).toBeDefined();
            expect(sidebar.init).toBeInstanceOf(Function);
        });

        it("returns one object when an ID is passed", () => {
            ReactDOM.render(<Sidebar id="sidebar-1" />, div);

            const renderedSidebar = document.getElementById("sidebar-1");

            expect(renderedSidebar).toBeTruthy();

            const returnVal = sidebar.init("sidebar-1");

            expect(typeof returnVal).toEqual("object");
        });

        it("warns the user if no sidebar with the given ID exists", () => {
            const id = "sidebar-1";

            console.warn = jest.fn();

            ReactDOM.render(<Sidebar id="sidebar-2" />, div);

            expect(sidebar.init(id)).toBeNull();
            expect(console.warn).toHaveBeenCalledWith(`sidebar.init: No sidebar with id ${id} found`);
        });

        it("returns array of sidebars when no id is provided", () => {

            ReactDOM.render(
                <>
                    <Sidebar id="sidebar-2" />
                    <Sidebar id="sidebar-3" />
                </>,
                div
            );

            expect(sidebar.init().length).toEqual(2);
        });

        it("returns null and warns user if no sidebar found", () => {
            console.warn = jest.fn();

            expect(sidebar.init()).toBeNull();
            expect(console.warn).toHaveBeenCalledWith("sidebar.init: No sidebars found");
        });
    });

    describe("sidebar.removeScrollListener", () => {
        it("is defined", () => {
            expect(sidebar.removeScrollListener).toBeDefined();
            expect(sidebar.removeScrollListener).toBeInstanceOf(Function);
        });
    });

    describe("sidebar.initScrollListener", () => {
        it("is defined", () => {
            expect(sidebar.initScrollListener).toBeDefined();
            expect(sidebar.initScrollListener).toBeInstanceOf(Function);
        });

        // it("invokes removeScrollListener when initiated", () => {
        //     const id = "sidebar-1";
        //     const contentId = "contentId";

        //     sidebar.removeScrollListener = jest.fn();

        //     sidebar.initScrollListener(id, contentId);

        //     expect(sidebar.removeScrollListener).toHaveBeenCalledWith(id, contentId);
        // });

        it("warns user when no content with contentId is found", () => {
            const id = "sidebar-1";
            const contentId = "contentId";

            console.warn = jest.fn();

            sidebar.initScrollListener(id, contentId);

            expect(console.warn).toHaveBeenCalledWith(`sidebar.initScrollListener: Cannot find main content with id ${contentId}`);
        });
    });
});

/* describe("scripts: sidebar", () => {
    const div = document.createElement("div");

    beforeEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    document.body.appendChild(div);

    const Sidebar = ({ id }) => (
        <div id={id} className="sidebar">
            <nav className="sidebar-nav">
                <div className="nav-group">
                    <div className="nav-group-heading">
                        <i className="material-icons" aria-hidden="true">arrow_right</i>
                        <span>
                            Group 1
                        </span>
                    </div>
                    <ul className="nav-ul">
                        <li className="nav-subgroup">
                            <div className="nav-subgroup-heading">
                                <i className="material-icons" aria-hidden="true">arrow_right</i>
                                <span>
                                    Subgroup 1
                                </span>
                            </div>
                            <ul className="nav-ul">
                                <li className="nav-leaf">
                                    <a href="#">
                                        Leaf 1
                                    </a>
                                </li>
                                <li className="nav-leaf">
                                    <a href="#">
                                        Leaf 2
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-subgroup">
                            <div className="nav-subgroup-heading">
                                <i className="material-icons" aria-hidden="true">arrow_right</i>
                                <span>
                                    Subgroup 2
                                </span>
                            </div>
                            <ul className="nav-ul">
                                <li className="nav-leaf">
                                    <a href="#">
                                        Leaf 3
                                    </a>
                                </li>
                                <li className="nav-leaf">
                                    <a href="#">
                                        Leaf 4
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="nav-group">
                    <div className="nav-group-heading">
                        <i className="material-icons" aria-hidden="true">arrow_right</i>
                        <span>
                            Group 1
                        </span>
                        <ul className="nav-ul">
                            <li className="nav-leaf">
                                <a href="#">
                                    Leaf 5
                                </a>
                            </li>
                            <li className="nav-leaf">
                                <a href="#">
                                    Leaf 6
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

    it("is defined", () => {
        expect(sidebar).toBeDefined();
    });

    describe("sidebar.init", () => {
        it("has an init method", () => {
            expect(sidebar.init).toBeDefined();
            expect(sidebar.init).toBeInstanceOf(Function);
        });

        it("returns one object when an ID is passed", () => {
            ReactDOM.render(<Sidebar id="sidebar-1" />, div);

            const renderedSidebar = document.getElementById("sidebar-1");

            expect(renderedSidebar).toBeTruthy();

            const returnVal = sidebar.init("sidebar-1");

            expect(typeof returnVal).toEqual("object");
        });

        it("warns the user if no sidebar with the given ID exists", () => {
            const id = "sidebar-1";

            console.warn = jest.fn();

            ReactDOM.render(<Sidebar id="sidebar-2" />, div);

            expect(sidebar.init(id)).toBeNull();
            expect(console.warn).toHaveBeenCalledWith(`sidebar.init: No sidebar with id ${id} found`);
        });

        it("returns array of sidebars when no id is provided", () => {

            ReactDOM.render(
                <>
                    <Sidebar id="sidebar-2" />
                    <Sidebar id="sidebar-3" />
                </>,
                div
            );

            expect(sidebar.init().length).toEqual(2);
        });

        it("returns null and warns user if no sidebar found", () => {
            console.warn = jest.fn();

            expect(sidebar.init()).toBeNull();
            expect(console.warn).toHaveBeenCalledWith("sidebar.init: No sidebars found");
        });
    });

    describe("sidebar.setActivestate", () => {
        it("has an setActiveState method", () => {
            expect(sidebar.setActiveState).toBeDefined();
            expect(sidebar.setActiveState).toBeInstanceOf(Function);
        });

        it("warns user and returns null when group is not provided", () => {
            const id = "sidebar-2";

            ReactDOM.render(<Sidebar id={id}/>, div);

            console.warn = jest.fn();

            expect(sidebar.setActiveState(id, null, null, null)).toBeNull();
            expect(console.warn).toHaveBeenCalledWith("sidebar.setActiveState: The group parameter must be provided");
        });

        it("sets group to active when group is provided", () => {
            const id = "sidebar-2";

            ReactDOM.render(<Sidebar id={id} />, div);

            const renderedSidebar = sidebar.init(id).el;

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);

            sidebar.setActiveState(id, 0, null, null);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);

            sidebar.setActiveState(id, 1, null, null);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(2);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(2);
        });

        it("warns user and returns null if no sidebar with ID found", () => {
            const id = "sidebar-2";

            ReactDOM.render(<Sidebar id={id}/>, div);
            console.warn = jest.fn();

            const renderedSidebar = sidebar.init(id).el;

            const wrongId = "sidebar-3";

            expect(sidebar.setActiveState(wrongId)).toBeNull();
            expect(console.warn).toHaveBeenCalledWith(`sidebar.setActiveState: No sidebar with id ${wrongId} found.`);
            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);
        });

        it("sets group and subgroup to active when provided", () => {
            const id = "sidebar-3";

            ReactDOM.render(<Sidebar id={id} />, div);

            const renderedSidebar = sidebar.init(id).el;

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);

            sidebar.setActiveState(id, 0, 0, null);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(2);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE).length).toEqual(1);

            sidebar.setActiveState(id, 0, 1, null);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(3);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE).length).toEqual(2);
        });

        it("sets group, subgroup and leaf to active when provided", () => {
            const id = "sidebar-4";

            ReactDOM.render(<Sidebar id={id} />, div);

            const renderedSidebar = sidebar.init(id).el;

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);

            sidebar.setActiveState(id, 0, 0, 0);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(3);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVLEAF + SELECTORS.ACTIVE).length).toEqual(1);

            sidebar.setActiveState(id, 0, 1, 0);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(5);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE).length).toEqual(2);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVLEAF + SELECTORS.ACTIVE).length).toEqual(2);
        });

        it("sets group and leaf to active when provided", () => {
            const id = "sidebar-5";

            ReactDOM.render(<Sidebar id={id} />, div);

            const renderedSidebar = sidebar.init(id).el;

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);

            sidebar.setActiveState(id, 0, null, 0);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(2);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVLEAF + SELECTORS.ACTIVE).length).toEqual(1);
        });
    });

    describe("sidebar.removeActiveState", () => {
        it("has a removeActiveState method", () => {
            expect(sidebar.removeActiveState).toBeDefined();
            expect(sidebar.removeActiveState).toBeInstanceOf(Function);
        });

        it("warns user and returns null when group is not provided", () => {
            const id = "sidebar-2";

            ReactDOM.render(<Sidebar id={id} />, div);

            console.warn = jest.fn();

            expect(sidebar.removeActiveState(id, null, null, null)).toBeNull();
            expect(console.warn).toHaveBeenCalledWith("sidebar.removeActiveState: The group parameter must be provided");
        });

        it("remove group active state when group is provided", () => {
            const id = "sidebar-2";

            ReactDOM.render(<Sidebar id={id} />, div);

            const renderedSidebar = sidebar.init(id).el;

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);

            sidebar.setActiveState(id, 0, null, null);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);

            sidebar.removeActiveState(id, 0, null, null);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);
        });

        it("warns user and returns null if no sidebar with ID found", () => {
            const id = "sidebar-2";

            ReactDOM.render(<Sidebar id={id}/>, div);
            console.warn = jest.fn();

            const renderedSidebar = sidebar.init(id).el;

            const wrongId = "sidebar-3";

            expect(sidebar.removeActiveState(wrongId)).toBeNull();
            expect(console.warn).toHaveBeenCalledWith(`sidebar.removeActiveState: No sidebar with id ${wrongId} found.`);
            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);
        });

        it("remove group and subgroup active state when provided", () => {
            const id = "sidebar-3";

            ReactDOM.render(<Sidebar id={id} />, div);

            const renderedSidebar = sidebar.init(id).el;

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);

            sidebar.setActiveState(id, 0, 0, null);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(2);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE).length).toEqual(1);

            sidebar.removeActiveState(id, 0, 0, null);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
        });

        it("remove group, subgroup and leaf active state when provided", () => {
            const id = "sidebar-4";

            ReactDOM.render(<Sidebar id={id} />, div);

            const renderedSidebar = sidebar.init(id).el;

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);

            sidebar.setActiveState(id, 0, 0, 0);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(3);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVLEAF + SELECTORS.ACTIVE).length).toEqual(1);

            sidebar.removeActiveState(id, 0, 0, 0);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(2);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVSUBGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVLEAF + SELECTORS.ACTIVE).length).toEqual(0);
        });

        it("remove group and leaf active state when provided", () => {
            const id = "sidebar-5";

            ReactDOM.render(<Sidebar id={id} />, div);

            const renderedSidebar = sidebar.init(id).el;

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(0);

            sidebar.setActiveState(id, 0, null, 0);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(2);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVLEAF + SELECTORS.ACTIVE).length).toEqual(1);

            sidebar.removeActiveState(id, 0, null, 0);

            expect(renderedSidebar.querySelectorAll(SELECTORS.ACTIVE).length).toEqual(1);
            expect(renderedSidebar.querySelectorAll(SELECTORS.NAVGROUP + SELECTORS.ACTIVE).length).toEqual(1);
        });
    });
});

*/
