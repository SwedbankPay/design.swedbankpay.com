import React from "react";
import ReactDOM from "react-dom";

import nav from "./index";

describe("scripts: nav", () => {
    const div = document.createElement("div");
    const submenuItems = ["Email", "Information", "Other things"];

    document.body.appendChild(div);

    const Nav = ({ subItems, open, subopen, id }) => (
        <nav id={id} className={`nav ${open ? "nav-open" : null}`}>
            <ul>
                <li>
                    <a href="#">
                        <i className="material-icons" aria-hidden="true">home</i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="material-icons" aria-hidden="true">account_balance</i>
                        <span>Account</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="material-icons" aria-hidden="true">fingerprint</i>
                        <span>Authentication</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="material-icons" aria-hidden="true">notification_important</i>
                        <span>Notifications</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="material-icons" aria-hidden="true">shopping_cart</i>
                        <span>Transactions</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="material-icons">language</i>
                        <span>Language</span>
                    </a>
                </li>
                <li>
                    { subItems ?
                        <div className={subopen ? "submenu submenu-open" : "submenu"}>{"\n"}
                            <a href="#">
                                <i className="material-icons" aria-hidden="true">language</i>{"\n"}
                                <span>{name}</span>
                            </a>
                            <ul>
                                {subItems.map((itemsname, j) => (
                                    <li key={`nav-subItems-${itemsname}-${j}`}>
                                        <a href="#" onClick = {e => e.preventDefault()}>{itemsname}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        :
                        <a href="#">
                            <i className="material-icons" aria-hidden="true">shopping_cart</i>
                            <span>Shop</span>
                        </a>}
                </li>
            </ul>
        </nav>
    );

    const Navsm = ({ subItems }) => (
        <nav className="nav">
            <ul>
                <li>
                    <i className="material-icons" aria-hidden="true">home</i>
                    <span>Home</span>
                </li>
                <li>{ subItems ?
                    <div className="submenu">{"\n"}
                        <a href="#">
                            <i className="material-icons" aria-hidden="true">language</i>{"\n"}
                            <span>{name}</span>
                        </a>
                        <ul>
                            {subItems.map((itemsname, j) => (
                                <li key={`nav-subItems-${itemsname}-${j}`}>
                                    <a href="#" onClick = {e => e.preventDefault()}>{itemsname}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    :
                    <a href="#">
                        <i className="material-icons" aria-hidden="true">account_balance</i>
                        <span>Account</span>
                    </a>}
                </li>
            </ul>
        </nav>
    );

    beforeEach(() => ReactDOM.unmountComponentAtNode(div));

    it("is defined", () => {
        expect(nav).toBeTruthy();
    });

    describe("nav.init", () => {
        it("is defined", () => {
            expect(nav.init).toBeTruthy();
        });

        it("returns a single object when one ID is passed", () => {
            ReactDOM.render(<Nav id="demo-nav" />, div);

            const renderedNav = document.querySelector(".nav");

            expect(renderedNav).toBeTruthy();

            const returnVal = nav.init("demo-nav");

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(returnVal.id).toEqual("demo-nav");
        });

        it("returns an array of objects when more than one nav is initialized", () => {
            ReactDOM.render(
                <>
                    <Nav />
                    <Nav />
                </>
                , div);

            const renderedNavs = document.querySelectorAll(".nav");

            expect(renderedNavs).toBeTruthy();
            expect(renderedNavs.length).toEqual(2);

            const returnVal = nav.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
        });

        it("init returns null if no nav is found prints a warning message", () => {
            console.warn = jest.fn();

            expect(nav.init()).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });

        it("returns null if an invalid ID is passed and prints a warning message", () => {
            console.warn = jest.fn();

            expect(nav.init("test")).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });
    });

    it("does not render a menu icon when there are less than four list elements", () => {
        ReactDOM.render(<Navsm />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");
        const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

        expect(renderedNav).toBeTruthy();
        expect(sidebarMenubtn).toBeNull();
    });

    it("renders a menu icon when there are less than four list elements but submenus exist", () => {
        ReactDOM.render(<Navsm subItems = {submenuItems} />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");
        const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

        expect(renderedNav).toBeTruthy();
        expect(sidebarMenubtn).toBeTruthy();
    });

    it("renders a menu icon when there are more than four list elements", () => {
        ReactDOM.render(<Nav />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");
        const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

        expect(renderedNav).toBeTruthy();
        expect(sidebarMenubtn).toBeTruthy();
    });

    it("opens when clicking the menu icon", () => {
        ReactDOM.render(<Nav />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");
        const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

        expect(renderedNav).toBeTruthy();
        expect(sidebarMenubtn).toBeTruthy();
        expect(renderedNav.classList).not.toContain("nav-open");

        sidebarMenubtn.click();

        expect(renderedNav.classList).toContain("nav-open");
    });

    it("closes when clicking the menu icon while open", () => {
        ReactDOM.render(<Nav open />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");
        const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

        expect(renderedNav).toBeTruthy();
        expect(sidebarMenubtn).toBeTruthy();
        expect(renderedNav.classList).toContain("nav-open");

        sidebarMenubtn.click();
        expect(renderedNav.classList).not.toContain("nav-open");
    });

    it("closes when clicking outside nav", () => {
        ReactDOM.render(<Nav open />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");

        expect(renderedNav).toBeTruthy();
        expect(renderedNav.classList).toContain("nav-open");

        document.querySelector("html").click();

        expect(renderedNav.classList).not.toContain("nav-open");
    });

    it("closes nav on resize", () => {
        ReactDOM.render(<Nav id="nav-test" subItems = {submenuItems} />, div);
        nav.init();
        nav.open("nav-test");

        const renderedNav = document.querySelector(".nav");

        expect(renderedNav.classList).toContain("nav-open");

        global.dispatchEvent(new Event("resize"));

        expect(renderedNav.classList).not.toContain("nav-open");
    });

    it("creates a copy of the submenu anchor", () => {
        ReactDOM.render(<Nav subItems = {submenuItems} />, div);
        nav.init();

        expect(document.querySelector(".submenu-toggle")).toBeTruthy();
    });

    it("opens a submenu when a submenu icon is clicked", () => {
        ReactDOM.render(<Nav subItems = {submenuItems} />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");
        const submenu = renderedNav.querySelector(".submenu");
        const iconClickable = submenu.querySelector(".submenu-toggle");

        expect(renderedNav).toBeTruthy();
        expect(submenu).toBeTruthy();
        expect(iconClickable).toBeTruthy();
        expect(submenu.classList).not.toContain("submenu-open");

        iconClickable.click();

        expect(submenu.classList).toContain("submenu-open");
    });

    it("closes a submenu when a submenu icon is clicked", () => {
        ReactDOM.render(<Nav subItems = {submenuItems} subopen />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");
        const submenu = renderedNav.querySelector(".submenu");
        const iconClickable = submenu.querySelector(".submenu-toggle");

        expect(renderedNav).toBeTruthy();
        expect(submenu).toBeTruthy();
        expect(iconClickable).toBeTruthy();
        expect(submenu.classList).toContain("submenu-open");

        iconClickable.click();

        expect(submenu.classList).not.toContain("submenu-open");
    });

    it("closes a submenu when clicking outside the submenu", () => {
        ReactDOM.render(<Nav subItems = {submenuItems} subopen />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");
        const submenu = renderedNav.querySelector(".submenu");

        expect(renderedNav).toBeTruthy();
        expect(submenu).toBeTruthy();
        expect(submenu.classList).toContain("submenu-open");

        document.querySelector("html").click();

        expect(submenu.classList).not.toContain("submenu-open");
    });

    it("closes submenu on resize", () => {
        ReactDOM.render(<Nav subItems = {submenuItems} />, div);
        nav.init();

        const renderedNav = document.querySelector(".nav");
        const submenu = renderedNav.querySelector(".submenu");
        const iconClickable = submenu.querySelector(".submenu-toggle");

        expect(renderedNav).toBeTruthy();
        expect(submenu).toBeTruthy();
        expect(iconClickable).toBeTruthy();
        expect(submenu.classList).not.toContain("submenu-open");

        iconClickable.click();

        expect(submenu.classList).toContain("submenu-open");

        global.dispatchEvent(new Event("resize"));

        expect(submenu.classList).not.toContain("submenu-open");
    });

    describe("nav.open", () => {
        it("opens nav when calling nav.open", () => {
            ReactDOM.render(<Nav id="demo-nav" />, div);
            nav.init();

            const renderedNav = document.querySelector(".nav");

            expect(renderedNav.classList).not.toContain("nav-open");

            nav.open("demo-nav");

            expect(renderedNav.classList).toContain("nav-open");
        });

        it("does not open nav when calling nav.open with wrong id and prints error to console", () => {
            console.error = jest.fn();
            ReactDOM.render(<Nav id="demo-nav" />, div);
            nav.init();

            const renderedNav = document.querySelector(".nav");

            expect(renderedNav.classList).not.toContain("nav-open");

            nav.open("qwerty");

            expect(console.error).toHaveBeenCalledWith("nav.open: No nav with id \"qwerty\" found.");
            expect(renderedNav.classList).not.toContain("nav-open");
        });
    });

    describe("nav.close", () => {
        it("closes nav when calling nav.close", () => {
            ReactDOM.render(<Nav id="demo-nav" open />, div);

            const renderedNav = document.querySelector(".nav");

            expect(renderedNav.classList).toContain("nav-open");

            nav.init();
            nav.close("demo-nav");

            expect(renderedNav.classList).not.toContain("nav-open");
        });

        it("does not close nav when calling nav.close with wrong id and prints error to console", () => {
            console.error = jest.fn();
            ReactDOM.render(<Nav id="demo-nav" open />, div);
            nav.init();

            const renderedNav = document.querySelector(".nav");

            expect(renderedNav.classList).toContain("nav-open");

            nav.close("qwerty");

            expect(console.error).toHaveBeenCalledWith("nav.close: No nav with id \"qwerty\" found.");
            expect(renderedNav.classList).toContain("nav-open");
        });
    });
});
