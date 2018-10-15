import rootRoutes from "./root";

describe("Routes: root", () => {
    it("is defined", () => {
        expect(rootRoutes).toBeDefined();
    });

    it("is an array", () => {
        expect(rootRoutes).toBeInstanceOf(Array);
    });

    it("all routes has a title, path and component", () => {
        rootRoutes.forEach(route => {
            const { title, path, component } = route;

            expect(title).toBeDefined();
            expect(path).toBeDefined();
            expect(component).toBeDefined();
        });
    });

    it("first route is home, has path '/home' and is exact", () => {
        const { title, path, exact } = rootRoutes[0];

        expect(title).toEqual("Home");
        expect(path).toEqual("/home");
        expect(exact).toEqual(true);
    });
});
