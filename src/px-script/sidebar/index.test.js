import React from "react";
import ReactDOM from "react-dom";

import sidebar from "./index";

describe("px-script: sidebar", () => {
    const div = document.createElement("div");
    const submenuItems = ["Email", "Information", "Other things"];

    document.body.appendChild(div);

    const Sidebar = ({ subItems, open }) => (
        <nav className={`sidebar ${open ? "sidebar-open" : null}`}>
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
                    { subItems ?
                        <div className="submenu">{"\n"}
                            <i className="material-icons">language</i>{"\n"}
                            <span>{name}</span>
                            <ul>
                                {subItems.map((itemsname, j) => (
                                    <li key={`sidebar-subItems-${itemsname}-${j}`}>
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

    const Sidebarsm = ({ subItems }) => (
        <nav className="sidebar">
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
                                <li key={`sidebar-subItems-${itemsname}-${j}`}>
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
        expect(sidebar).toBeDefined();
    });

    it("has an init method", () => {
        expect(sidebar.init).toBeDefined();
        expect(sidebar.init).toBeInstanceOf(Function);
    });

    it("does not render a menu icon when there are less than four list elements", () => {
        ReactDOM.render(<Sidebarsm />, div);
        sidebar.init();

        const renderedSidebar = document.querySelector(".sidebar");
        const sidebarMenubtn = renderedSidebar.querySelector(".sidebar-openbtn");

        expect(renderedSidebar).toBeDefined();
        expect(sidebarMenubtn).toBeNull();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders a menu icon when there are less than four list elements but submenus exist", () => {
        ReactDOM.render(<Sidebarsm subItems = {submenuItems} />, div);
        sidebar.init();

        const renderedSidebar = document.querySelector(".sidebar");
        const sidebarMenubtn = renderedSidebar.querySelector(".sidebar-openbtn");

        expect(renderedSidebar).toBeDefined();
        expect(sidebarMenubtn).toBeDefined();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders a menu icon when there are more than four list elements", () => {
        ReactDOM.render(<Sidebar />, div);
        sidebar.init();

        const renderedSidebar = document.querySelector(".sidebar");
        const sidebarMenubtn = renderedSidebar.querySelector(".sidebar-openbtn");

        expect(renderedSidebar).toBeDefined();
        expect(sidebarMenubtn).toBeDefined();

        ReactDOM.unmountComponentAtNode(div);
    });

    // it("opens when clicking the menu icon", () => {
    //     ReactDOM.render(<Sidebar />, div);
    //     sidebar.init();

    //     const renderedSidebar = document.querySelector(".sidebar");
    //     const sidebarMenubtn = renderedSidebar.querySelector(".sidebar-openbtn");

    //     expect(renderedSidebar).toBeDefined();
    //     expect(sidebarMenubtn).toBeDefined();
    //     expect(renderedSidebar.classList).not.toContain("sidebar-open");

    //     sidebarMenubtn.click();

    //     expect(renderedSidebar.classList).toContain("sidebar-open");

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("closes when clicking the menu icon while open", () => {
    //     ReactDOM.render(<Sidebar open />, div);
    //     sidebar.init();

    //     const renderedSidebar = document.querySelector(".sidebar");
    //     const sidebarMenubtn = renderedSidebar.querySelector(".sidebar-openbtn");

    //     expect(renderedSidebar).toBeDefined();
    //     expect(sidebarMenubtn).toBeDefined();
    //     expect(renderedSidebar.classList).toContain("sidebar-open");

    //     sidebarMenubtn.click();
    //     expect(renderedSidebar.classList).not.toContain("sidebar-open");

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    it("closes when clicking outside sidebar", () => {
        ReactDOM.render(<Sidebar open />, div);
        sidebar.init();

        const renderedSidebar = document.querySelector(".sidebar");

        expect(renderedSidebar).toBeDefined();
        expect(renderedSidebar.classList).toContain("sidebar-open");

        document.querySelector("html").click();

        expect(renderedSidebar.classList).not.toContain("sidebar-open");

        ReactDOM.unmountComponentAtNode(div);
    });

    // it("opens a submenu when submenu icon is clicked", () => {
    //     ReactDOM.render(<Sidebar subItems = {submenuItems}/>, div);

    //     const renderedSidebar = document.querySelector(".sidebar");
    //     const submenu = renderedSidebar.querySelector(".submenu");

    //     expect(renderedSidebar).toBeDefined();
    //     expect(submenu).toBeDefined();
    //     expect(submenu.classList).not.toContain("submenu-open");

    //     submenu.click();
    //     expect(submenu.classList).toContain("submenu-open");

    //     ReactDOM.unmountComponentAtNode(div);
    // });
});
