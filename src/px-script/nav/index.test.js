import React from "react";
import ReactDOM from "react-dom";

import nav from "./index";

describe("px-script: nav", () => {
    const div = document.createElement("div");
    const submenuItems = ["Email", "Information", "Other things"];

    document.body.appendChild(div);

    const Nav = ({ subItems, open, subopen }) => (
        <nav className={`nav ${open ? "nav-open" : null}`}>
            <ul>
                <li>
                    <a href="#">
                        <i className="material-icons">home</i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="material-icons">account_balance</i>
                        <span>Account</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="material-icons">fingerprint</i>
                        <span>Authentication</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="material-icons">notification_important</i>
                        <span>Notifications</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="material-icons">shopping_cart</i>
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
                            <i className="material-icons">language</i>{"\n"}
                            <span>{name}</span>
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
                            <i className="material-icons">shopping_cart</i>
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
                    <i className="material-icons">home</i>
                    <span>Home</span>
                </li>
                <li>{ subItems ?
                    <div className="submenu">{"\n"}
                        <i className="material-icons">language</i>{"\n"}
                        <span>{name}</span>
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
                        <i className="material-icons">account_balance</i>
                        <span>Account</span>
                    </a>}
                </li>
            </ul>
        </nav>
    );

    it("is defined", () => {
        expect(nav).toBeDefined();
    });

    it("has an init method", () => {
        expect(nav.init).toBeDefined();
        expect(nav.init).toBeInstanceOf(Function);
    });

    it("does not render a menu icon when there are less than four list elements", () => {
        ReactDOM.render(<Navsm />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const sidebarMenubtn = renderedSidebar.querySelector(".nav-openbtn");

        expect(renderedSidebar).toBeDefined();
        expect(sidebarMenubtn).toBeNull();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders a menu icon when there are less than four list elements but submenus exist", () => {
        ReactDOM.render(<Navsm subItems = {submenuItems} />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const sidebarMenubtn = renderedSidebar.querySelector(".nav-openbtn");

        expect(renderedSidebar).toBeDefined();
        expect(sidebarMenubtn).toBeDefined();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders a menu icon when there are more than four list elements", () => {
        ReactDOM.render(<nav />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const sidebarMenubtn = renderedSidebar.querySelector(".nav-openbtn");

        expect(renderedSidebar).toBeDefined();
        expect(sidebarMenubtn).toBeDefined();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("opens when clicking the menu icon", () => {
        ReactDOM.render(<nav />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const sidebarMenubtn = renderedSidebar.querySelector(".nav-openbtn");

        expect(renderedSidebar).toBeDefined();
        expect(sidebarMenubtn).toBeDefined();
        expect(renderedSidebar.classList).not.toContain("nav-open");

        sidebarMenubtn.click();

        expect(renderedSidebar.classList).toContain("nav-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes when clicking the menu icon while open", () => {
        ReactDOM.render(<nav open />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const sidebarMenubtn = renderedSidebar.querySelector(".nav-openbtn");

        expect(renderedSidebar).toBeDefined();
        expect(sidebarMenubtn).toBeDefined();
        expect(renderedSidebar.classList).toContain("nav-open");

        sidebarMenubtn.click();
        expect(renderedSidebar.classList).not.toContain("nav-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes when clicking outside nav", () => {
        ReactDOM.render(<nav open />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");

        expect(renderedSidebar).toBeDefined();
        expect(renderedSidebar.classList).toContain("nav-open");

        document.querySelector("html").click();

        expect(renderedSidebar.classList).not.toContain("nav-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes nav on resize", () => {
        ReactDOM.render(<nav subItems = {submenuItems} />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const sidebarMenubtn = renderedSidebar.querySelector(".nav-openbtn");

        expect(renderedSidebar).toBeDefined();
        expect(sidebarMenubtn).toBeDefined();
        expect(renderedSidebar.classList).not.toContain("nav-open");

        sidebarMenubtn.click();

        expect(renderedSidebar.classList).toContain("nav-open");

        global.dispatchEvent(new Event("resize"));

        expect(renderedSidebar.classList).not.toContain("nav-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("creates one copy of the submenu icon", () => {
        ReactDOM.render(<nav subItems = {submenuItems} />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const submenu = renderedSidebar.querySelector(".submenu");
        const submenuicons = submenu.querySelectorAll("i");

        expect(renderedSidebar).toBeDefined();
        expect(submenu).toBeDefined();
        expect(submenuicons).toBeDefined();
        expect([...submenuicons]).toHaveLength(2);

        const submenuIcon = [...submenuicons][1];
        const submenuIconCopy = [...submenuicons][0];

        expect(submenuIconCopy).not.toEqual(submenuIcon);

        ReactDOM.unmountComponentAtNode(div);
    });

    it("opens a submenu when a submenu icon is clicked", () => {
        ReactDOM.render(<nav subItems = {submenuItems} />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const submenu = renderedSidebar.querySelector(".submenu");
        const iconClickable = submenu.querySelector(".submenu-icon-clickable");

        expect(renderedSidebar).toBeDefined();
        expect(submenu).toBeDefined();
        expect(iconClickable).toBeDefined();
        expect(submenu.classList).not.toContain("submenu-open");

        iconClickable.click();

        expect(submenu.classList).toContain("submenu-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes a submenu when a submenu icon is clicked", () => {
        ReactDOM.render(<nav subItems = {submenuItems} subopen />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const submenu = renderedSidebar.querySelector(".submenu");
        const iconClickable = submenu.querySelector(".submenu-icon-clickable");

        expect(renderedSidebar).toBeDefined();
        expect(submenu).toBeDefined();
        expect(iconClickable).toBeDefined();
        expect(submenu.classList).toContain("submenu-open");

        iconClickable.click();

        expect(submenu.classList).not.toContain("submenu-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes a submenu when clicking outside the submenu", () => {
        ReactDOM.render(<nav subItems = {submenuItems} subopen />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const submenu = renderedSidebar.querySelector(".submenu");

        expect(renderedSidebar).toBeDefined();
        expect(submenu).toBeDefined();
        expect(submenu.classList).toContain("submenu-open");

        document.querySelector("html").click();

        expect(submenu.classList).not.toContain("submenu-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes submenu on resize", () => {
        ReactDOM.render(<nav subItems = {submenuItems} />, div);
        nav.init();

        const renderedSidebar = document.querySelector(".nav");
        const submenu = renderedSidebar.querySelector(".submenu");
        const iconClickable = submenu.querySelector(".submenu-icon-clickable");

        expect(renderedSidebar).toBeDefined();
        expect(submenu).toBeDefined();
        expect(iconClickable).toBeDefined();
        expect(submenu.classList).not.toContain("submenu-open");

        iconClickable.click();

        expect(submenu.classList).toContain("submenu-open");

        global.dispatchEvent(new Event("resize"));

        expect(submenu.classList).not.toContain("submenu-open");

        ReactDOM.unmountComponentAtNode(div);
    });
});
