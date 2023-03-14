import formComponents, { Checkbox, Radio, Togglebox } from "./index";

describe("formComponents -", () => {
    it("is defined", () => {
        expect(formComponents).toBeDefined();
    });

    it("Checkbox is defined", () => {
        expect(Checkbox).toBeDefined();
    });

    it("Radio is defined", () => {
        expect(Radio).toBeDefined();
    });

    it("Togglebox is defined", () => {
        expect(Togglebox).toBeDefined();
    });
});
