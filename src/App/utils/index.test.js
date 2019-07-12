import { setTitle } from "./index";

describe("App utils: setTitle", () => {
    it("is defined", () => {
        expect(setTitle).toBeDefined();
        expect(setTitle).toBeInstanceOf(Function);
    });

    it("correctly sets document title", () => {
        expect(document.title).not.toEqual("TEST | Swedbank Pay DesignGuide");
        setTitle("TEST");
        expect(document.title).toEqual("TEST | Swedbank Pay DesignGuide");
    });
});
