import React, { Component } from "react";

import { ComponentPreview, DocContainer, Property } from "#";
import PaginationComponent from "@/Pagination";

const paginationItems = [
    /* eslint-disable object-property-newline */
    { name: "1", href: "#", active: false },
    { name: "2", href: "#", active: false },
    { name: "3", href: "#", active: false },
    { name: "4", href: "#", active: false },
    { name: "5", href: "#", active: true }
    /* eslint-enable object-property-newline */
];

const DefaultPagination = () => (
        <>
            <h2 id="default-pagination">Default pagination</h2>
            <p>Default pagination... <Property value=".pagination" />...</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <PaginationComponent items={paginationItems} arrows farArrows />
            </ComponentPreview>
        </>
);

const PaginationBullets = () => (
        <>
            <h2 id="pagination-bullets">Pagination bullets</h2>
            <p>Pagination bullets... <Property value=".pagination-bullets" />...</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <PaginationComponent type="bullets" items={paginationItems} arrows farArrows />
            </ComponentPreview>
        </>
);

const SimplePagination = () => (
    <>
        <h2 id="simple-pagination">Simple pagination</h2>
        <p>Simple pagination... <Property value=".pagination" />...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PaginationComponent text="16 of 256" arrows farArrows />
        </ComponentPreview>
    </>
);

class Pagination extends Component {
    render () {
        return (
            <DocContainer docToc>
                <p className="lead">Pagination...</p>
                <DefaultPagination />
                <PaginationBullets />
                <SimplePagination />
            </DocContainer>
        );
    }
}

export default Pagination;

/* For testing */
export { DefaultPagination, SimplePagination, PaginationBullets };
