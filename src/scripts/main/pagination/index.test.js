import { beforeEach, expect, it } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";

import pagination from "./index";

describe("scripts: pagination", () => {
    const TestPagination = ({ id }) => (

        <ul className="pagination pagination-simple" id={id}>
            <li className="arrow-back disabled" aria-label="back">
                <a href="#"></a>
            </li>
            <li>
                <a href="#" aria-label="Go to page 1">1</a>
            </li>
            <li className=" " >
                <a href="#" aria-label="Go to page 2">2</a>
            </li>
            <li className=" " >
                <a href="#" aria-label="Go to page 3">3</a>
            </li>
            <li className=" " >
                <a href="#" aria-label="Go to page 4">4</a>
            </li>
            <li className=" " >
                <a href="#" aria-label="Go to page 5">5</a>
            </li>
            <li className="">
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

            const clickHandler = jest.fn();

            it("gets click event on arrow forward", () => {
                arrowForward.addEventListener("click", clickHandler); //

                expect(clickHandler).toHaveBeenCalled();
            });
        });
    });
});
