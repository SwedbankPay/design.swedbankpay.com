import React from "react";
import ReactDOM from "react-dom";

import tabs from "./index";
import Tabs from "../../App/components/Tabs";

describe("px-script: tabs", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const items = [
        {
            name: "test",
            active: true
        },
        {
            name: "test 2",
            active: false
        }
    ];

    it("is defined", () => {
        expect(tabs).toBeDefined();
    });

    it("method init is defined and adds eventlisteners to the tabs", () => {
        expect(tabs.init).toBeDefined();

        ReactDOM.render(<Tabs items={items} mode="auto" />, div);

        const initialActiveTab = div.querySelectorAll("li")[0];
        const initialInActiveTab = div.querySelectorAll("li")[1];

        expect(initialActiveTab.classList.contains("active")).toEqual(true);
        expect(initialInActiveTab.classList.contains("active")).toEqual(false);

        tabs.init();

        initialInActiveTab.click();

        expect(initialActiveTab.classList.contains("active")).toEqual(false);
        expect(initialInActiveTab.classList.contains("active")).toEqual(true);

        ReactDOM.unmountComponentAtNode(div);
    });
});
