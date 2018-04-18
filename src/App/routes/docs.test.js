import docsRoutes from "./docs";

describe("Routes: docs", () => {
    const pathFormat = new RegExp("^(\\/[a-z]+(-[a-z]+)?)+$");

    it("is defined", () => {
        expect(docsRoutes).toBeDefined();
    });

    it("is an array", () => {
        expect(docsRoutes).toBeInstanceOf(Array);
    });

    it("all top routes has a title, path redirect and routes of type array", () => {
        docsRoutes.forEach(({ title, path, redirect, routes }) => {

            expect(title).toBeDefined();
            expect(path).toBeDefined();
            expect(redirect).toBeDefined();
            expect(routes).toBeInstanceOf(Array);
        });
    });

    it("all top path and redirect routes is formatted correctly", () => {
        docsRoutes.forEach(({ path, redirect }) => {
            expect(path).toMatch(pathFormat);
            expect(redirect).toMatch(pathFormat);
        });
    });

    it("all child routes has a title, path and component", () => {
        docsRoutes.forEach(route => {
            route.routes.forEach(({ title, path, component }) => {

                expect(title).toBeDefined();
                expect(path).toBeDefined();
                expect(component).toBeDefined();
            });
        });
    });

    it("all child path routes is formatted correctly", () => {
        docsRoutes.forEach(route => {
            route.routes.forEach(({ path }) => {
                expect(path).toMatch(pathFormat);
            });
        });
    });
});
