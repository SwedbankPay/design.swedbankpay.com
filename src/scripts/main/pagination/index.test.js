import { beforeEach, expect, it } from "@jest/globals";
import React from "react";
import ReactDOM from "react-dom";

import pagination from "./index";

describe("scripts: pagination", () => {
    const TestPagination = ({ id }) => (

        <ul className="pagination pagination-simple" id={id}>
            <li className="arrow-back disabled" aria-label="back">
                <a href="#"></a>
            </li>
            <li className="">
                <a href="#" aria-label="Go to page 1">1</a>
            </li>
            <li className="active" >
                <a href="#" aria-label="Go to page 2">2</a>
            </li>
            <li className="" >
                <a href="#" aria-label="Go to page 3">3</a>
            </li>
            <li className="" >
                <a href="#" aria-label="Go to page 4">4</a>
            </li>
            <li className="" >
                <a href="#" aria-label="Go to page 5">5</a>
            </li>
            <li className="">
                <a href="#" aria-label="Go to page 6">6</a>
            </li>
            <li className="">
                <a href="#" aria-label="Go to page 7">7</a>
            </li>
            <li className="">
                <a href="#" aria-label="Go to page 8">8</a>
            </li>
            <li className="arrow-forward" aria-label="forward">
                <a href="#"></a>
            </li>
        </ul>

    );
    const TestPagination2 = ({ id }) => (

        <ul className="pagination pagination-simple" id={id}>
            <li className="arrow-back disabled" aria-label="back">
                <a href="#"></a>
            </li>
            <li className="">
                <a href="#" aria-label="Go to page 1">1</a>
            </li>
            <li className="" >
                <a href="#" aria-label="Go to page 2">2</a>
            </li>
            <li className="" >
                <a href="#" aria-label="Go to page 3">3</a>
            </li>
            <li className="" >
                <a href="#" aria-label="Go to page 4">4</a>
            </li>
            <li className="" >
                <a href="#" aria-label="Go to page 5">5</a>
            </li>
            <li className="active">
                <a href="#" aria-label="Go to page 6">6</a>
            </li>
            <li className="arrow-forward" aria-label="forward">
                <a href="#"></a>
            </li>
        </ul>

    );

    const div = document.createElement("div");

    document.body.appendChild(div);

    beforeEach(() => ReactDOM.unmountComponentAtNode(div));

    it("is defined", () => {
        expect(pagination).toBeDefined();
    });

    describe("pagination.init", () => {
        it("is defined", () => {
            expect(pagination.init).toBeDefined();
        });

        it("returns a single object when one element is initialized", () => {
            ReactDOM.render(<TestPagination id="demo-pagination" />, div);

            const renderedPagination = document.querySelector(".pagination");

            expect(renderedPagination).toBeTruthy();

            const returnValue = pagination.init("demo-pagination");

            expect(Array.isArray(returnValue)).toBeFalsy();
            expect(typeof returnValue).toEqual("object");
        });

        it("returns an array of objects when more than one element is initialized", () => {
            ReactDOM.render(
                <>
                    <TestPagination/>
                    <TestPagination/>
                </>
                , div);

            const renderedPaginations = document.querySelectorAll(".pagination");

            expect(renderedPaginations).toBeTruthy();
            expect(renderedPaginations.length).toEqual(2);

            const returnValue = pagination.init();

            expect(Array.isArray(returnValue)).toBeTruthy();
            expect(returnValue.length).toEqual(2);
        });

        it("returns null if no pagination is found and prints warning message", () => {
            console.warn = jest.fn();

            expect(pagination.init()).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });

        it("returns null if an invalid ID is passed and prints a warning message", () => {
            console.warn = jest.fn();

            expect(pagination.init("test")).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });

        describe("checks if navigation arrows is rendered and click events", () => {
            ReactDOM.render(<TestPagination id="tester"/>, div);

            const renderedPagination = document.getElementById("tester");
            const arrowForward = renderedPagination.querySelector(".arrow-forward");
            const arrowBack = renderedPagination.querySelector(".arrow-back");

            it("renders arrow-forward", () => {
                expect(renderedPagination.innerHTML).toEqual(expect.stringContaining(arrowForward.innerHTML));
            });

            it("renders arrow-backward", () => {
                expect(renderedPagination.innerHTML).toEqual(expect.stringContaining(arrowBack.innerHTML));
            });

            const _arrowNavigation = jest.fn();

            it("gets click event on arrow forward", () => {
                arrowForward.addEventListener("click", _arrowNavigation("forward")); //
                // expect li[1] classname contains active
                expect(_arrowNavigation).toHaveBeenCalled();
            });
        });

        describe("checks if correct index is provided", () => {
            ReactDOM.render(<TestPagination id="tester"/>, div);

            const renderedPagination = document.getElementById("tester");
            const pages = renderedPagination.querySelectorAll("li:not(.arrow-back, .arrow-forward)");

            it("getActiveIndex gives correct active index", () => {
                expect(pagination._getActiveIndex(pages)).toEqual(1);

            });
        });

        describe("arrow-functions are working properly", () => {
            ReactDOM.render(<TestPagination2 id="tester"/>, div);

            const renderedPagination = document.getElementById("tester");
            const pages = renderedPagination.querySelectorAll("li:not(.arrow-back, .arrow-forward)");
            const arrows = renderedPagination.querySelectorAll("[class*='arrow-']");

            it("arrows is longer than zero", () => {
                expect(arrows.length).toBeGreaterThan(0);
            });

            it("has no disabled class in either arrow", () => {
                pagination._removeDisabledArrowState(arrows);
                expect(arrows[0].className).not.toContain("disabled");
                expect(arrows[1].className).not.toContain("disabled");
            });

            it("forward-arrow has disabled class and back-arrow has not", () => {
                pages[pages.length - 1].classList.add("active");

                pagination._addDisabledArrowState(arrows, pages);
                expect(arrows[0].className).not.toContain("disabled");
                expect(arrows[1].className).toContain("disabled");
            });
        });

        describe("paginate function are working properly", () => {
            ReactDOM.render(<TestPagination id="tester"/>, div);

            const renderedPagination = document.getElementById("tester");
            const pages = renderedPagination.querySelectorAll("li:not(.arrow-back, .arrow-forward)");
            const paginatedPages = pagination._paginate(pages);
            // TODO

            it("pages is containting 8 li-elements and paginatedPages are containing 7 li-elements", () => {
                expect(pages.length).toEqual(8);
                expect(paginatedPages.length).toEqual(7);
            });

            it("paginatedPages contains dotts when number of items > 7", () => {
                expect(paginatedPages[5].className).toContain("dotts");
            });

            it("paginatedpages contains last li-element as last child", () => {
                expect(paginatedPages[6].innerHTML).toEqual("<a href=\"#\" aria-label=\"Go to page 8\">8</a>"); // Last element in paginatedPages List
            });

        });
    });
});

/** Missing to test event listeners and create more tests after modifying by clicking, on other tests...
 *
 * It(returns corrects active index){

    Set initial acitve page
        - expect..(querySelector(li) sjekke førstesin classlist inneholder 'active')

    Get active index
        - render pagination, kalt tilfeldig, fram (arrovnav forward) tilbake, getactiveindex, sammenlikne med queryselector
        Arrow Navigation
            -

    Add listener
        -

    Set active page on click
        - Simulate click.
        - Klikke på en av li og sjekke active classlist

    Disabled arrow state
        - active index til 1, navigation(back) forvent arrow to have disabled

    Paginate
        - teste om det skjer en slicing
        - sjekke child elments, forvent rekkefølge. child nr x er dotter osv
        - classlist dotts

 *
 */
