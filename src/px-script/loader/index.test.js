import React from "react";
import ReactDOM from "react-dom";

import loader from "./index";
import Loader from "../../App/components/Loader";

describe("px-script: loader", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    it("is defined", () => {
        expect(loader).toBeDefined();
    });

    it("method init is defined and adds loader markup to tags with the attribute [data-loader='true']", () => {
        expect(loader.init).toBeDefined();

        const Loaders = () => (
            <div>
                <Loader size="small" />
                <Loader size="default" />
                <Loader size="large" />
            </div>
        );

        ReactDOM.render(<Loaders />, div);

        const renderedLoaders = document.querySelectorAll("[data-loader='true']");

        expect(renderedLoaders).toHaveLength(3);

        renderedLoaders.forEach(_loader => {
            expect(_loader.childNodes).toHaveLength(0);
        });

        loader.init();

        renderedLoaders.forEach(_loader => {
            expect(_loader.childNodes).toHaveLength(1);
            expect(_loader.lastChild.classList).toContain("loader-icon");
        });

        ReactDOM.unmountComponentAtNode(div);
    });
});
