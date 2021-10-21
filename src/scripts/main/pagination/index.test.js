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
});