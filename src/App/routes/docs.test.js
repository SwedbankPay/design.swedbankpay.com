import docsRoutes from "./docs";

describe("Routes: docs", () => {
    it("is defined", () => {
        expect(docsRoutes).toBeDefined();
    });

    it("is an array", () => {
        expect(docsRoutes).toBeInstanceOf(Array);
    });

    it("all top routes has a title, path redirect and routes of type array", () => {
        docsRoutes.forEach(route => {
            const { title, path, redirect, routes } = route;

            expect(title).toBeDefined();
            expect(path).toBeDefined();
            expect(redirect).toBeDefined();
            expect(routes).toBeInstanceOf(Array);
        });
    });

    it("all child routes has a title, path and component", () => {
        docsRoutes.forEach(route => {
            route.routes.forEach(childRoute => {
                const { title, path, component } = childRoute;

                expect(title).toBeDefined();
                expect(path).toBeDefined();
                expect(component).toBeDefined();
            });
        });
    });
});
