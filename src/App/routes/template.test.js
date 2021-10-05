import templateRoutes from "./templates";

describe("Routes: templates", () => {
    const pathFormat = new RegExp("^(\\/[a-z]+([-a-z]+)?)+$");

    it("is defined", () => {
        expect(templateRoutes).toBeDefined();
    });

    it("is an array", () => {
        expect(templateRoutes).toBeInstanceOf(Array);
    });

    it("all top routes has a title, path redirect and routes of type array", () => {
        templateRoutes.forEach(({ title, path, redirect, routes }) => {
            expect(title).toBeDefined();
            expect(path).toBeDefined();
            expect(redirect).toBeDefined();
            expect(routes).toBeInstanceOf(Array);
        });
    });

    it("all top path and redirect routes is formatted correctly", () => {
        templateRoutes.forEach(({ path, redirect }) => {
            expect(path).toMatch(pathFormat);
            expect(redirect).toMatch(pathFormat);
        });
    });

    it("all child routes has a title, path and componentPath", () => {
        templateRoutes.forEach(route => {
            route.routes.forEach(({ title, path, componentPath }) => {
                expect(title).toBeDefined();
                expect(path).toBeDefined();
                expect(componentPath).toBeDefined();
            });
        });
    });

    it("all child path routes is formatted correctly", () => {
        templateRoutes.forEach(route => {
            route.routes.forEach(({ path }) => {
                expect(path).toMatch(pathFormat);
            });
        });
    });
});
