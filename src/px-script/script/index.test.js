import script from "./index";

describe("px-script: script", () => {

    it("is defined", () => {
        expect(script).toBeDefined();
    });

    it("method initAll runs all init functions provided in the object argument", () => {
        const test = {
            test1: { init: jest.fn() },
            test2: { init: jest.fn() }
        };

        script.initAll(test);

        expect(test.test1.init).toHaveBeenCalled();
        expect(test.test2.init).toHaveBeenCalled();
    });

    it("method initAll does not run init on object keys that are not functions", () => {
        const test = {
            test1: { init: jest.fn() },
            test2: { init: { test: jest.fn() } }
        };

        // to prevent console warning in console
        console.warn = jest.fn();

        script.initAll(test);

        expect(test.test1.init).toHaveBeenCalled();
        expect(test.test2.init.test).not.toHaveBeenCalled();
    });

    it("method initAll calls console warn when key init on the provided argument is not a function", () => {
        const test = {
            test1: { init: "test" },
            test2: { init: "test" }
        };

        console.warn = jest.fn();

        script.initAll(test);

        expect(console.warn).toHaveBeenCalled();
    });
});
