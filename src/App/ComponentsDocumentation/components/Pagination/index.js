import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import PaginationComponent from "@components/Pagination";
import CodeTags from "@components/CodeTags";

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
            <p>
                Default pagination shows the pages as numbers. Add <CodeTags type="secondary" code=".pagination" /> to an <CodeTags type="primary" code={"<ul>"} /> containing
                <CodeTags type="primary" code={"<li>"} />. If you wish to present the user with navigational arrows you need to add those as <CodeTags type="primary" code={"<li>"} /> elements.
            </p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <PaginationComponent items={paginationItems} arrows farArrows />
            </ComponentPreview>
        </>
);

const PaginationBullets = () => (
        <>
            <h2 id="pagination-bullets">Pagination bullets</h2>
            <p>
                If you want to show bullets instead of numbers you can add <CodeTags type="secondary" code=".pagination-bullets" /> to your <CodeTags type="primary" code={"<ul>"} />.
            </p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <PaginationComponent type="bullets" items={paginationItems} arrows farArrows />
            </ComponentPreview>
        </>
);

const SimplePagination = () => (
    <>
        <h2 id="simple-pagination">Simple pagination</h2>
        <p>
            If the number of pages get high enough then it is better to use numbers.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PaginationComponent text="16 of 256" arrows farArrows />
        </ComponentPreview>
    </>
);

const Pagination = () => (
    <DocContainer docToc>
        <p className="lead">
            Use the pagination component to indicate that a series of related content exist across multiple pages.
        </p>
        <DefaultPagination />
        <PaginationBullets />
        <SimplePagination />
    </DocContainer>
);

export default Pagination;

/* For testing */
export { DefaultPagination, SimplePagination, PaginationBullets };
