import dg from "./index";

describe("scripts: index (main)", () => {
    it("is defined", () => {
        expect(dg).toBeDefined();
    });

    it("defines window.dg as dg", () => {
        expect(window.dg).toBeDefined();
        expect(window.dg).toEqual(dg);
    });
});
