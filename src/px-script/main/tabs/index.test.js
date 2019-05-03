import React from "react";
import ReactDOM from "react-dom";

import tabs from "./index";
import TabsComponent from "@/Tabs";

describe("px-script: tabs", () => {
    const div = document.createElement("div");
    const items = ["item1", "item2", "item3"];

    const NoActiveTab = ({ id, tabsOpen }) => (
        <div className={`tabs ${tabsOpen ? "tabs-open" : null}`} id={id}>
            <i className="material-icons">keyboard_arrow_right</i>
            <ul>
                {items.map((name, i) => (
                    <li key={`tab-item-${name}-${i}`}>{"\n"}
                        <a href="#">{name}</a>{"\n"}
                    </li>
                ))}
            </ul>
        </div>
    );

    document.body.appendChild(div);

    beforeEach(() => {
        jest.resetModules();
        ReactDOM.unmountComponentAtNode(div);
    });

    it("is defined", () => {
        expect(tabs).toBeTruthy();
    });

    it("has an init method", () => {
        expect(tabs.init).toBeTruthy();
        expect(tabs.init).toBeInstanceOf(Function);
    });

    it("sets an active item if none has been provided", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);

        const renderedTab = document.querySelector(".tabs");
        let activeTab = renderedTab.querySelector(".active");

        expect(renderedTab).toBeTruthy();
        expect(activeTab).toBeFalsy();

        tabs.init();

        activeTab = renderedTab.querySelector(".active");

        expect(activeTab).toBeTruthy();
    });

    it("does not reassign active item if one exists", () => {
        ReactDOM.render(<TabsComponent items={items} />, div);
        tabs.init();

        const renderedTab = document.querySelector(".tabs");
        const activeTab = renderedTab.querySelector(".active");
        const firstTab = renderedTab.querySelector("li");

        expect(activeTab).toBeTruthy();
        expect(firstTab).toBeTruthy();
        expect(activeTab.classList).toContain("active");
        expect(firstTab.classList).not.toContain("active");
        expect(activeTab).not.toEqual(firstTab);
    });

    it("prevents default if you click an active tab", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);
        tabs.init();
        Event.prototype.preventDefault = jest.fn();

        const renderedTab = document.querySelector(".tabs");
        const activeTab = renderedTab.querySelector(".active");

        expect(renderedTab).toBeTruthy();
        expect(activeTab).toBeTruthy();

        activeTab.click();

        expect(activeTab.classList).toContain("active");
        expect(document.querySelector(".active")).toEqual(activeTab);
        expect(Event.prototype.preventDefault).toHaveBeenCalled();
    });

    it("opens a tab dropdown when clicked", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);

        const renderedTab = document.querySelector(".tabs");
        const tabUl = renderedTab.querySelector("ul");

        tabUl.style.flexDirection = "column";
        tabs.init();

        expect(renderedTab).toBeTruthy();

        renderedTab.click();

        expect(renderedTab.classList).toContain("tabs-open");
    });

    it("closes a dropdown tab when clicked", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);

        const renderedTab = document.querySelector(".tabs");
        const tabUl = renderedTab.querySelector("ul");

        expect(renderedTab).toBeTruthy();

        renderedTab.classList.add("tabs-open");
        tabUl.style.flexDirection = "column";
        tabs.init();

        renderedTab.click();

        expect(renderedTab.classList).not.toContain("tabs-open");
    });

    it("closes a dropdown tab when user clicks outside the dropdown tab", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);

        const renderedTab = document.querySelector(".tabs");
        const tabUl = renderedTab.querySelector("ul");

        expect(renderedTab).toBeTruthy();

        renderedTab.classList.add("tabs-open");
        tabUl.style.flexDirection = "column";
        tabs.init();

        document.querySelector("html").click();

        expect(renderedTab.classList).not.toContain("tabs-open");
    });

    it("closes a dropdown tab when window is resized", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);

        const renderedTab = document.querySelector(".tabs");
        const tabUl = renderedTab.querySelector("ul");

        expect(renderedTab).toBeTruthy();

        tabUl.style.flexDirection = "column";
        tabs.init();

        tabUl.click();

        expect(renderedTab.classList).toContain("tabs-open");

        global.dispatchEvent(new Event("resize"));

        expect(renderedTab.classList).not.toContain("tabs-open");
    });

    describe("tabs.open", () => {
        it("opens the tabs matching the passed ID", () => {
            ReactDOM.render(<NoActiveTab id="demo-tabs" items={items} />, div);

            const renderedTabs = document.querySelector(".tabs");

            tabs.init();

            expect(renderedTabs).toBeTruthy();
            expect(renderedTabs.classList).not.toContain("tabs-open");

            tabs.open("demo-tabs");

            expect(renderedTabs.classList).toContain("tabs-open");
        });

        it("prints an error message if no tabs with matching ID exists", () => {
            console.error = jest.fn();

            tabs.open("demo-tabs-1");

            expect(console.error).toHaveBeenCalled();
        });
    });

    describe("tabs.close", () => {
        it("closes the tabs matching the passed ID", () => {
            ReactDOM.render(<NoActiveTab id="demo-tabs" items={items} tabsOpen />, div);

            const renderedTabs = document.querySelector(".tabs");

            tabs.init();

            expect(renderedTabs).toBeTruthy();
            expect(renderedTabs.classList).toContain("tabs-open");

            tabs.close("demo-tabs");

            expect(renderedTabs.classList).not.toContain("tabs-open");
        });

        it("prints an error message if no tabs with matching ID exists", () => {
            console.error = jest.fn();

            tabs.close("demo-tabs-1");

            expect(console.error).toHaveBeenCalled();
        });
    });

    test.todo("Tests persist the _tabs array through test cases. No way to \"reset\" an imported module, have to use require. [AW]");
});
