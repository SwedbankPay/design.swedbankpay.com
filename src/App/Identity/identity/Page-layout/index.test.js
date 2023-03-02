import PageLayout, { FullWidth, CenteredContent } from "./index";

describe("Utilities: PageLayout", () => {
    it("is defined", () => {
        expect(PageLayout).toBeDefined();
    });

    describe("FullWidth", () => {
        it("is defined", () => {
            expect(FullWidth).toBeDefined();
        });
    });

    describe("CenteredContent", () => {
        it("is defined", () => {
            expect(CenteredContent).toBeDefined();
        });
    });
});
