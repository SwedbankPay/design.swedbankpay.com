import { expect, it } from "@jest/globals";

import paginate from "./index";

describe("scripts: paginate", () => {
    it("is defined", () => {
        expect(paginate).toBeDefined();
    });

    it("returns an object with page and current properties", () => {
        expect(paginate(10, 5)).toEqual(expect.arrayContaining([
            expect.objectContaining({ page: 1,
                current: false }
            )
        ]));

        expect(typeof paginate(10, 5)).toEqual("object");
    });

    it("always return an array length of 7", () => {
        expect(paginate(10, 5).length).toEqual(7);
        expect(paginate(100, 50).length).toEqual(7);
    });

    it("returns the current page", () => {
        expect(paginate(10, 5)).toEqual(expect.arrayContaining([
            expect.objectContaining({ page: 5,
                current: true })
        ]));

        expect(paginate(100, 27)).toEqual(expect.arrayContaining([
            expect.objectContaining({ page: 27,
                current: true })
        ]));

        expect(paginate(1000, 666)).toEqual(expect.arrayContaining([
            expect.objectContaining({ page: 666,
                current: true })
        ]));
    });

    it("returns correct total pages", () => {
        expect(paginate(10, 5).slice(-1)[0]).toEqual(
            expect.objectContaining({ page: 10,
                current: false })
        );

        expect(paginate(55, 5).slice(-1)[0]).toEqual(
            expect.objectContaining({ page: 55,
                current: false })
        );

        expect(paginate(123, 5).slice(-1)[0]).toEqual(
            expect.objectContaining({ page: 123,
                current: false })
        );
    });

    describe("Ellipsis", () => {
        describe("left side ellipsis", () => {
            it("always has index 1", () => {
                expect(paginate(10, 5)[1]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(100, 60)[1]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(50, 30)[1]).toEqual(
                    expect.objectContaining({ page: null })
                );
            });

            it("appears when currentActive is higher than 4", () => {
                expect(paginate(10, 5)[1]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(10, 8)[1]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(10, 10)[1]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(10, 4)[1]).not.toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(10, 1)[1]).not.toEqual(
                    expect.objectContaining({ page: null })
                );
            });
        });

        describe("right side ellipsis", () => {
            it("always has index pages - 2", () => {
                expect(paginate(10, 5).slice(-2)[0]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(100, 60).slice(-2)[0]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(50, 30).slice(-2)[0]).toEqual(
                    expect.objectContaining({ page: null })
                );
            });

            it("appears when currentActive lower than pages - 3", () => {
                expect(paginate(10, 5).slice(-2)[0]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(10, 6).slice(-2)[0]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(10, 1).slice(-2)[0]).toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(10, 10).slice(-2)[0]).not.toEqual(
                    expect.objectContaining({ page: null })
                );

                expect(paginate(10, 7).slice(-2)[0]).not.toEqual(
                    expect.objectContaining({ page: null })
                );
            });
        });

        describe("ellipsis on both sides", () => {
            it("appears when current active is higher than 4 and lower than pages - 3", () => {
                expect(paginate(10, 5)[1]).toEqual(expect.objectContaining({ page: null }));
                expect(paginate(10, 5).slice(-2)[0]).toEqual(expect.objectContaining({ page: null }));

                expect(paginate(10, 4)[1]).not.toEqual(expect.objectContaining({ page: null }));
                expect(paginate(10, 8).slice(-2)[0]).not.toEqual(expect.objectContaining({ page: null }));

            });
        });

    });

    describe("Error throws", () => {
        it("throws error when currentActive is greater than total pages", () => {
            expect(() => paginate(10, 11)).toThrowError("CurrentActive can not be greater than total pages.");
        });

        it("throws error when currentActive is 0 or less", () => {
            expect(() => paginate(10, 0)).toThrowError("CurrentActive must be greater than 0");
            expect(() => paginate(10, -1)).toThrowError("CurrentActive must be greater than 0");
        });
    });
});
