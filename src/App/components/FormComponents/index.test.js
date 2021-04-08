import formComponents, { Checkbox, FormControlText, Radio, Rangeslider, Togglebox } from "./index";

describe("formComponents -", () => {
    it("is defined", () => {
        expect(formComponents).toBeDefined();
    });

    it("Checkbox is defined", () => {
        expect(Checkbox).toBeDefined();
    });

    it("FormControlText is defined", () => {
        expect(FormControlText).toBeDefined();
    });

    it("Radio is defined", () => {
        expect(Radio).toBeDefined();
    });

    it("Rangeslider is defined", () => {
        expect(Rangeslider).toBeDefined();
    });

    it("Togglebox is defined", () => {
        expect(Togglebox).toBeDefined();
    });
});
