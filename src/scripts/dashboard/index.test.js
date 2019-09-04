import dg from "./index";

describe("scripts: index (dashboard)", () => {
    it("is defined", () => {
        expect(dg).toBeDefined();
    });

    it("defines window.dg as dg", () => {
        expect(window.dg).toBeDefined();
        expect(window.dg).toEqual(dg);
    });
});
