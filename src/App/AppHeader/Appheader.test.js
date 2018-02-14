import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./AppHeader";

describe("Main: AppHeader", () => {
    it("is defined", () => {
        expect(AppHeader).toBeDefined();
    });
    // it("renders without crashing", () => {
    //     const div = document.createElement("div");
    //     ReactDOM.render(<AppHeader />, div);
    //     ReactDOM.unmountComponentAtNode(div);
    // });
});

