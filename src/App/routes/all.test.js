import allRoutes from "./all";

describe("Routes: all", () => {
    const pathFormat = new RegExp("^([a-z]+([-a-z]+)?)+$");

    it("is defined", () => {
        expect(allRoutes).toBeDefined();
    });

    it("is an array", () => {
        expect(allRoutes).toBeInstanceOf(Array);
    });

    it("all top routes has a title, path redirect and routes of type array", () => {
        allRoutes.forEach(({ title, path, redirect, routes }) => {

            expect(title).toBeDefined();
            expect(path).toBeDefined();
            expect(redirect).toBeDefined();
            expect(routes).toBeInstanceOf(Array);
        });
    });

    it("all top path and redirect routes is formatted correctly", () => {
        allRoutes.forEach(({ path, redirect }) => {
            expect(path).toMatch(pathFormat);
            expect(redirect).toMatch(pathFormat);
        });
    });

    it("all child routes has a title, path and componentPath", () => {
        allRoutes.forEach(route => {
            route.routes.forEach(({ title, path, componentPath }) => {

                expect(title).toBeDefined();
                expect(path).toBeDefined();
                expect(componentPath).toBeDefined();
            });
        });
    });

    it("all child path routes is formatted correctly", () => {
        allRoutes.forEach(route => {
            route.routes.forEach(({ path }) => {
                expect(path).toMatch(pathFormat);
            });
        });
    });
});
