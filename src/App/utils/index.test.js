import { setTitle } from "./index";

const brandTitle = process.env.brandTitle;

describe("App utils: setTitle", () => {
    it("is defined", () => {
        expect(setTitle).toBeDefined();
        expect(setTitle).toBeInstanceOf(Function);
    });

    it("correctly sets document title", () => {
        expect(document.title).not.toEqual(`TEST | ${brandTitle} Design Guide`);
        setTitle("TEST");
        expect(document.title).toEqual(`TEST | ${brandTitle} Design Guide`);
    });
});
