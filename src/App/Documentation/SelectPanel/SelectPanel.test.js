import React from "react";
import ReactDOM from "react-dom";
import SelectPanel from "./SelectPanel";

describe("Main: SelectPanel", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<SelectPanel />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

