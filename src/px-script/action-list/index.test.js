import React from "react";
import ReactDOM from "react-dom";

import actionList from "./index";

describe("px-script: action-list", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const ActionList = () => (
        <div className="action-list">
            <i className="material-icons">more_vert</i>
            <div className="action-menu">
                <a href="#"><i className="material-icons">bookmark</i>Add bookmark</a>
                <a href="#"><i className="material-icons">business_center</i>Add client</a>
                <a href="#"><i className="material-icons">add_circle</i>Add document</a>
                <a href="#"><i className="material-icons">person_add</i>Add user</a>
            </div>
        </div>
    );

    it("is defined", () => {
        expect(actionList).toBeDefined();
    });

    it("has an init method", () => {
        expect(actionList.init).toBeDefined();
        expect(actionList.init).toBeInstanceOf(Function);
    });

    it("opens when clicking the icon", () => {
        ReactDOM.render(<ActionList />, div);

        const renderedActionList = document.querySelector(".action-list");

        expect(renderedActionList).toBeDefined();

        // TODO: Continue here... [EH]

        ReactDOM.unmountComponentAtNode(div);
    });
});
