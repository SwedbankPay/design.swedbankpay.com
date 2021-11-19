import { beforeEach, expect, it } from "@jest/globals";
import React from "react";
import ReactDOM from "react-dom";

import pagination from "./index";

describe("scripts: pagination", () => {

    const TestPagination = ({ id }) => (
        <nav className="pagination" id={id}>
            <button className="arrow-start d-block d-sm-none disabled">
                <i className="material-icons" aria-label="start">
                    <a href="#"></a>
                </i>
            </button>
            <button className="arrow-back disabled">
                <i className="material-icons" aria-label="back">
                    <a href="#"></a>
                </i>
            </button>
            <ul>
                <li className="d-none d-sm-block active">
                    <a href="#" aria-label="Go to page 1">1</a>
                </li>
                <li className="d-none d-sm-block">
                    <a href="#" aria-label="Go to page 2">2</a>
                </li>
                <li className="d-none d-sm-block">
                    <a href="#" aria-label="Go to page 3">3</a>
                </li>
                <li className="d-none d-sm-block">
                    <a href="#" aria-label="Go to page 4">4</a>
                </li>
                <li className="d-none d-sm-block">
                    <a href="#" aria-label="Go to page 5">5</a>
                </li>
                <li className="d-none d-sm-block">
                    <a href="#" aria-label="Go to page 6">6</a>
                </li>
                <li className="d-none d-sm-block">
                    <a href="#" aria-label="Go to page 7">7</a>
                </li>
                <li className="d-none d-sm-block">
                    <a href="#" aria-label="Go to page 8">8</a>
                </li>
                <li className="d-none d-sm-block">
                    <a href="#" aria-label="Go to page 9">9</a>
                </li>
                <li className="d-none d-sm-block">
                    <a href="#" aria-label="Go to page 10">10</a>
                </li><span className="text align-self-end d-block d-sm-none font-weight-bold">Page <span className="current-page">1</span> of 10</span>
            </ul>
            <button className="arrow-forward">
                <i className="material-icons" aria-label="forward">
                    <a href="#"></a>
                </i>
            </button>
            <button className="arrow-end d-block d-sm-none">
                <i className="material-icons" aria-label="end">
                    <a href="#"></a>
                </i>
            </button>
        </nav>

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
    });

    it("returns a single object when one element is initialized", () => {
        ReactDOM.render(<TestPagination id="demo-pagination"/>, div);

        const renderedPagination = document.querySelector(".pagination");

        expect(renderedPagination).toBeTruthy();

        const returnVal = pagination.init();

        expect(Array.isArray(returnVal)).toBeTruthy();
        expect(typeof returnVal).toEqual("object");
    });

    it("returns an array of objects when more than one element is initialized", () => {
        ReactDOM.render(
            <>
                <TestPagination id="demo-pagination"/>
                <TestPagination id="demo-pagination2"/>
            </>, div);

        const renderedPaginations = document.querySelectorAll(".pagination");

        expect(renderedPaginations).toBeTruthy();
        expect(renderedPaginations.length).toEqual(2);

        const returnVal = pagination.init();

        expect(Array.isArray(returnVal)).toBeTruthy();
        expect(returnVal.length).toEqual(2);
    });

    it("returns null if no pagination is found and prints a warning massaged", () => {
        console.warn = jest.fn();

        expect(pagination.init()).toBeNull();
        expect(console.warn).toHaveBeenCalled();
    });
    // tests getActiveIndex
    it ("returns activeIndex to be 1", () => {
        ReactDOM.render(<TestPagination />, div);

        const returnVal = pagination.init();
    });
});

