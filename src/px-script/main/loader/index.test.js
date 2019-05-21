import React from "react";
import ReactDOM from "react-dom";

import loader from "./index";
import Loader from "@/Loader";

describe("px-script: loader", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    beforeEach(() => ReactDOM.unmountComponentAtNode(div));

    it("is defined", () => {
        expect(loader).toBeDefined();
    });

    describe("loader.init", () => {
        it("has an init method", () => {
            expect(loader.init).toBeDefined();
            expect(loader.init).toBeInstanceOf(Function);
        });

        it("returns a single object when one loader is initialized", () => {
            ReactDOM.render(<Loader id="demo-loader" size="default" />, div);

            const renderedLoader = document.querySelector(".loader");

            expect(renderedLoader).toBeTruthy();

            const returnVal = loader.init("demo-loader");

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of objects when more than one loader is initialized", () => {
            ReactDOM.render(
                <>
                    <Loader size="default" />
                    <Loader size="default" />
                </>
                , div);

            const renderedLoaders = document.querySelectorAll(".loader");

            expect(renderedLoaders).toBeTruthy();
            expect(renderedLoaders.length).toEqual(2);

            const returnVal = loader.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
        });

        it("returns null if no loader is found and prints a warning message", () => {
            console.warn = jest.fn();

            expect(loader.init()).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });

        it("returns null if an invalid ID is passed and prints a warning message", () => {
            console.warn = jest.fn();

            expect(loader.init("test")).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });
    });

    it("method init is defined and adds loader markup to tags with the attribute [data-loader]", () => {
        const Loaders = () => (
            <div>
                <Loader size="small" />
                <Loader size="default" />
                <Loader size="large" />
            </div>
        );

        ReactDOM.render(<Loaders />, div);

        const renderedLoaders = document.querySelectorAll("[data-loader]");

        expect(renderedLoaders).toHaveLength(3);

        renderedLoaders.forEach(_loader => {
            expect(_loader.childNodes).toHaveLength(0);
        });

        loader.init();

        renderedLoaders.forEach(_loader => {
            expect(_loader.childNodes).toHaveLength(1);
            expect(_loader.lastChild.classList).toContain("loader-icon");
        });
    });
});
