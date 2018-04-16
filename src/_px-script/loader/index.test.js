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

    // it("displays a console warning when method hide recieves an id which does not exist in current dom", () => {
    //     console.warn = jest.fn();
    //     loader.hide("test");
    //     expect(console.warn).toHaveBeenCalled();
    // });

    // it("hides the loader when provided an id to method loader.hide", () => {
    //     ReactDOM.render(<Loader size="default" id="test" visible={true} />, div);

    //     expect(document.getElementById("test").classList).toContain("in");
    //     loader.hide("test");
    //     expect(document.getElementById("test").classList).not.toContain("in");

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("hides all loaders when not provided an id to method hide", () => {
    //     const Loaders = () => (
    //         <div>
    //             <Loader size="default" visible={true} />
    //             <Loader size="default" visible={true} />
    //         </div>
    //     );
    //     ReactDOM.render(<Loaders />, div);

    //     const renderedLoaders = document.querySelectorAll("div.loader");

    //     renderedLoaders.forEach(loader => {
    //         expect(loader.classList).toContain("in");
    //     });

    //     loader.hide();

    //     renderedLoaders.forEach(loader => {
    //         expect(loader.classList).not.toContain("in");
    //     });

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("displays a console warning when method show recieves an id which does not exist in current dom", () => {
    //     console.warn = jest.fn();
    //     loader.show("test");
    //     expect(console.warn).toHaveBeenCalled();
    // });

    // it("shows the loader when provided an id to method loader.hide", () => {
    //     ReactDOM.render(<Loader size="default" id="test" visible={false} />, div);

    //     expect(document.getElementById("test").classList).not.toContain("in");
    //     loader.show("test");
    //     expect(document.getElementById("test").classList).toContain("in");

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("shows all loaders when not provided an id to method loader.show", () => {
    //     const Loaders = () => (
    //         <div>
    //             <Loader size="default" visible={false} />
    //             <Loader size="default" visible={false} />
    //         </div>
    //     );
    //     ReactDOM.render(<Loaders />, div);

    //     const renderedLoaders = document.querySelectorAll("div.loader");

    //     renderedLoaders.forEach(loader => {
    //         expect(loader.classList).not.toContain("in");
    //     });

    //     loader.show();

    //     renderedLoaders.forEach(loader => {
    //         expect(loader.classList).toContain("in");
    //     });

    //     ReactDOM.unmountComponentAtNode(div);
    // });
});
