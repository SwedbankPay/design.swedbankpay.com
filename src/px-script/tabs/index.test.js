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
            active: false
        },
        {
            name: "test 2",
            active: true
        }
    ];

    it("is defined", () => {
        expect(tabs).toBeDefined();
    });

    it("method init is defined and adds eventlisteners to the tabs", () => {
        expect(tabs.init).toBeDefined();

        ReactDOM.render(<Tabs items={items} mode="auto" />, div);

        ReactDOM.unmountComponentAtNode(div);
    });
});
