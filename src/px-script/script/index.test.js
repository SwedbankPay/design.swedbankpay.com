import script from "./index";

describe("px-script: script", () => {
    it("is defined", () => {
        expect(script).toBeDefined();
    });

    it("method initAll runs all init functions provided in the object argument", () => {
        window.px = {
            test1: { init: jest.fn() },
            test2: { init: jest.fn() }
        };

        script.initAll();

        expect(window.px.test1.init).toHaveBeenCalled();
        expect(window.px.test2.init).toHaveBeenCalled();

        window.px = {};
    });

    it("method initAll does not run init on object keys that are not functions", () => {
        window.px = {
            test1: { init: jest.fn() },
            test2: { init: { test: jest.fn() } }
        };

        console.warn = jest.fn(); // To prevent console warning in console

        script.initAll();

        expect(window.px.test1.init).toHaveBeenCalled();
        expect(window.px.test2.init.test).not.toHaveBeenCalled();

        window.px = {};
    });

    it("method initAll calls console warn when key init on the provided argument is not a function", () => {
        window.px = {
            test1: { init: "test" },
            test2: { init: "test" }
        };

        console.warn = jest.fn();

        script.initAll();

        expect(console.warn).toHaveBeenCalled();

        window.px = {};
    });
});
