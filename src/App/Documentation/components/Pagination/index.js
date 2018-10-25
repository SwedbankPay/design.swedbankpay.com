import React, { Component } from "react";

import { ComponentPreview, DocToc, Property } from "#";
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

const PaginationText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Pagination...</p>
        <DefaultPagination />
        <PaginationBullets />
        <SimplePagination />
    </div>
);

class Pagination extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <PaginationText />
                    <DocToc component={PaginationText} />
                </div>
            </div>
        );
    }
}

export default Pagination;

/* For testing */
export { DefaultPagination, SimplePagination, PaginationBullets, PaginationText };
