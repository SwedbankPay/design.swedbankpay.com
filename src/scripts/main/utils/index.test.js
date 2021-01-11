import { extendObj, /* isWithinBoundingBox, */ handleScrollbar, openComponent, closeComponent } from "./index";

describe("scripts: utils", () => {
    describe("- extendObj", () => {
        it("extends current object with new object", () => {
            const oldObj = { test: "test" };
            const newObj = { test2: "test2" };
            const expectedObj = {
                test: "test",
                test2: "test2"
            };

            const extObj = extendObj(false, oldObj, newObj);

            expect(expectedObj).toEqual(extObj);
        });

        it("does not overwrite property when overWrite is set to false", () => {
            const oldObj = { test: "test" };
            const newObj = {
                test: "test1",
                test2: "test2"
            };
            const expectedObj = {
                test: "test",
                test2: "test2"
            };

            const extObj = extendObj(false, oldObj, newObj);

            expect(expectedObj).toEqual(extObj);
        });

        it("overwrites property when overWrite is set to true", () => {
            const oldObj = { test: "test" };
            const newObj = {
                test: "test1",
                test2: "test2"
            };
            const expectedObj = {
                test: "test1",
                test2: "test2"
            };

            const extObj = extendObj(true, oldObj, newObj);

            expect(expectedObj).toEqual(extObj);
        });
    });

    test.todo("Write tests for isWithinBoundingBox");

    describe("- handleScrollbar", () => {
        it("adds class has-vscroll to body if innerwidth is larger than clientwidth", () => {
            handleScrollbar();

            expect(document.body.classList).toContain("has-vscroll");
        });

        it("removes has-vscroll if vertical scrollbar does not exist", () => {
            document.body.classList.add("has-vscroll");
            window.innerWidth = 0;
            handleScrollbar();

            expect(document.body.classList).not.toContain("has-vscroll");
        });
    });

    describe("- openComponent", () => {
        const mockComponent = {
            id: "test-component-id",
            open: jest.fn(),
            isOpen: false
        };
        const mockComponentList = [
            mockComponent,
            {
                id: "test-isOpen",
                open: jest.fn(),
                isOpen: true
            }
        ];

        it("opens the component with the provided ID", () => {
            openComponent("test-component-id", "testComponent", mockComponentList);

            // eslint-disable-next-line security/detect-non-literal-fs-filename
            expect(mockComponent.open).toHaveBeenCalled();
        });

        it("prints warning message when component with provided ID does not exist", () => {
            console.warn = jest.fn();

            openComponent("invalid-id", "testComponent", mockComponentList);

            expect(console.warn).toHaveBeenCalledWith("testComponent.open: No testComponent with id \"invalid-id\" found.");

        });

        it("prints a warning message when component with provided ID is already open", () => {
            console.warn = jest.fn();

            openComponent("test-isOpen", "testComponent", mockComponentList);

            expect(console.warn).toHaveBeenCalledWith("testComponent.open: testComponent with id \"test-isOpen\" is open");
        });
    });

    describe("- closeComponent", () => {
        const mockComponent = {
            id: "test-component-id",
            close: jest.fn(),
            isOpen: true
        };
        const mockComponentList = [
            mockComponent,
            {
                id: "test-isNotOpen",
                close: jest.fn(),
                isOpen: false
            }
        ];

        it("closes the component with the provided ID", () => {
            closeComponent("test-component-id", "testComponent", mockComponentList);

            // eslint-disable-next-line security/detect-non-literal-fs-filename
            expect(mockComponent.close).toHaveBeenCalled();
        });

        it("prints warning message when component with provided ID does not exist", () => {
            console.warn = jest.fn();

            closeComponent("invalid-id", "testComponent", mockComponentList);

            expect(console.warn).toHaveBeenCalledWith("testComponent.close: No testComponent with id \"invalid-id\" found.");

        });

        it("prints a warning message when component with provided ID is not open", () => {
            console.warn = jest.fn();

            closeComponent("test-isNotOpen", "testComponent", mockComponentList);

            expect(console.warn).toHaveBeenCalledWith("testComponent.close: testComponent with id \"test-isNotOpen\" is not open");
        });
    });
});
