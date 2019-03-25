import React from "react";
import ReactDOM from "react-dom";

import actionList from "./index";

describe("px-script: action-list", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const ActionList = ({ active }) => (
        <div className={`action-list${active ? " active" : ""}`}>
            <i className="material-icons">more_vert</i>
            <div className="action-menu">
                <a href="#"><i className="material-icons">bookmark</i>Add bookmark</a>
                <a href="#"><i className="material-icons">business_center</i>Add client</a>
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
        const toggleBtn = renderedActionList.querySelector("i.material-icons");

        expect(renderedActionList).toBeDefined();
        expect(toggleBtn).toBeDefined();
        expect(renderedActionList.classList).not.toContain("active");

        actionList.init();
        toggleBtn.dispatchEvent(new Event("click"));

        expect(renderedActionList.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes when clicking on icon while open", () => {
        ReactDOM.render(<ActionList active />, div);

        const renderedActionList = document.querySelector(".action-list");
        const toggleBtn = renderedActionList.querySelector("i.material-icons");

        expect(renderedActionList).toBeDefined();
        expect(toggleBtn).toBeDefined();
        expect(renderedActionList.classList).toContain("active");

        actionList.init();
        toggleBtn.dispatchEvent(new Event("click"));

        expect(renderedActionList.classList).not.toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes open action menu when clicking on a link", () => {
        ReactDOM.render(<ActionList active />, div);

        const renderedActionList = document.querySelector(".action-list");

        expect(renderedActionList).toBeDefined();
        expect(renderedActionList.classList).toContain("active");

        actionList.init();
        renderedActionList.querySelector("a").click();

        expect(renderedActionList.classList).not.toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("closes when clicking outside menu while open", () => {
        ReactDOM.render(<ActionList active />, div);

        const renderedActionList = document.querySelector(".action-list");

        expect(renderedActionList).toBeDefined();
        expect(renderedActionList.classList).toContain("active");

        actionList.init();
        document.querySelector("html").click(); // for clicking outside action list

        expect(renderedActionList.classList).not.toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });
});
