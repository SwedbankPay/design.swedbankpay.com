import React, { Component } from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import PaginationComponent from "../../../components/Pagination";

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
            <p>Default pagination... <code className="token property">.pagination</code>...</p>
            <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
                <PaginationComponent items={paginationItems} arrows={true} farArrows={true} />
            </ComponentPreview>
        </>
);

const PaginationBullets = () => (
        <>
            <h2 id="pagination-bullets">Pagination bullets</h2>
            <p>Pagination bullets... <code className="token property">.pagination-bullets</code>...</p>
            <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
                <PaginationComponent type="bullets" items={paginationItems} arrows={true} farArrows={true} />
            </ComponentPreview>
        </>
);

const SimplePagination = () => (
    <>
        <h2 id="simple-pagination">Simple pagination</h2>
        <p>Simple pagination... <code className="token property">.pagination</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <PaginationComponent text="16 of 256" arrows={true} farArrows={true} />
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
    componentDidMount () {
    }

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

/* for testing */
export { DefaultPagination, SimplePagination, PaginationBullets, PaginationText };
