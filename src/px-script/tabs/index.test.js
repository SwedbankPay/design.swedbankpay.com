import React from "react";
import ReactDOM from "react-dom";

import tabs from "./index";

describe("px-script: tabs", () => {
    const div = document.createElement("div");
    const items = ["item1", "item2", "item3"];

    const NoActiveTab = () => (
        <div className="tabs">
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
        let activeTab = document.querySelector(".active");

        expect(renderedTab).toBeTruthy();
        expect(activeTab).toBeFalsy();

        tabs.init();

        activeTab = document.querySelector(".active");

        expect(activeTab).toBeTruthy();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("does not change active if you click an active tab", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);
        tabs.init();

        const renderedTab = document.querySelector(".tabs");
        const activeTab = renderedTab.querySelector(".active");

        expect(renderedTab).toBeTruthy();
        expect(activeTab).toBeTruthy();

        activeTab.click();

        expect(activeTab.classList).toContain("active");
        expect(document.querySelector(".active")).toEqual(activeTab);

        ReactDOM.unmountComponentAtNode(div);
    });

    it("changes active item when an inactive item gets clicked", () => {
        ReactDOM.render(<NoActiveTab items={items} />, div);
        tabs.init();

        const renderedTab = document.querySelector(".tabs");
        const inactiveTab = renderedTab.querySelector("li:not(.active)");

        expect(renderedTab).toBeTruthy();
        expect(inactiveTab).toBeTruthy();

        inactiveTab.click()

        expect(inactiveTab.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });
});

// it("", () => {
//     ReactDOM.render(<NoActiveTab items={items} />, div);
//     tabs.init();

//     const renderedTab = document.querySelector(".tabs");

//     ReactDOM.unmountComponentAtNode(div);
// });
