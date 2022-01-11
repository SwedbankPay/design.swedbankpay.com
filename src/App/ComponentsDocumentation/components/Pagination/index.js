import React, { useEffect } from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import { PaginationShowCasePanel } from "./constants";
import PaginationComponent from "~/src/App/components/Pagination";

import { pagination } from "@src/scripts/main";
import CodeTags from "~/src/App/components/CodeTags";

const Overview = () => (
    <section id="pagination-overview">
        <h2 id="pagination">Pagination</h2>
        <p>Pagination is commonly used for things like table listings, search results or directories.The need for pagination is influenced by the amount of data to be displayed and the aim is to not overwhelm users with information and to improve the loading performance of the system. </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={PaginationShowCasePanel} codeFigure/>

        <h3>Responsive design</h3>
        <div className="mobile-view-container">
            <nav className="pagination" role="navigation" aria-label="Pagination Navigation">
                <button className="arrow-start d-block disabled">
                    <i className="material-icons" aria-label="start">
                        <a></a>
                    </i></button><button className="arrow-back disabled">
                    <i className="material-icons" aria-label="back">
                        <a></a>
                    </i>
                </button>
                <span className="mobile d-block">Page 1 of 10</span>
                <button className="arrow-forward">
                    <i className="material-icons" aria-label="forward">
                        <a></a>
                    </i></button>
                <button className="arrow-end d-block">
                    <i className="material-icons" aria-label="end">
                        <a></a>
                    </i>
                </button>
            </nav>
        </div>
        <p className="mt-2">On smaller screens the page links are replaced with text showing the page information, still using arrows to go to next or previous page but with the option to go to the first or last page as well.</p>

        <h3>The pagination algorithm</h3>
        <p>Below you can see the algorithm implemented for our solution. Our paginate function takes in two arguments; <b>pages</b> (the original list of pages) and <b>target</b> (current active index). Remember, the maximum elements to be shown in our paginator is seven, including dots, first and last element.</p>
        <p>Other parts to notice is <i>delta</i>. Delta takes the length of pages and calculates how many indexes to be showed before and after the current active index. <br/>For example: <CodeTags type="primary" code="currentActive = 6"/> (in a list with 10 elements), the correct delta would be 1, meaning both 5 and 7 would be included in the paginated list.</p>
        <ComponentPreview language="javascript" codeFigure>
        if (currentPage === 1 || currentPage === numberOfPages) &#x7b; {"\n"}{"\t"}delta = 4; &#x7d; {"\n"}
        else if (currentPage === 2 || currentPage === numberOfPages - 1) &#x7b; {"\n"}{"\t"}delta = 3; &#x7d; {"\n"}
        else if (currentPage === 3 || currentPage === numberOfPages - 2) &#x7b; {"\n"}{"\t"}delta = 2; &#x7d; {"\n"}
        else &#x7b; delta = 1; &#x7d;
        </ComponentPreview>
        <p><i>Ellipsis</i> is the returned list with correct elements to be included and right placement of dots. Also, the function returns <i>currentPage</i>, which is the current page with active class. Tha utility class of <CodeTags type="primary" code="active"/> gives the current page a more accessible look and helps the user to perceive which page is active.
        </p>
        <p>Also, keep in mind that the arrows must correctly be given the belonging utility classes, called <CodeTags type="secondary" code="disabled"/>. This class provides the correct styling for disabling the arrow-buttons if currentPage is either first or last in the pagination.</p>

        <ComponentPreview language="javascript" codeFigure>
            const paginate = (pages, target) =&#x3e; &#x7b; {"\n"}{"\t"}
                const numberOfPages = pages.length; {"\n"}{"\t"}
                &#x2f;&#x2f; Remember to create a function to calculate the size of delta {"\n"}{"\t"}
                let delta; {"\n"}{"\t"}
                const paginatedPages = &#x5b;&#x5d;; {"\n"}{"\t"}
                const ellipsis = &#x5b;&#x5d;;{"\n"}{"\t"}
                let paginatedIndex;{"\n"}{"\t"}

                const currentPage = target ? Number(target.innerText) : 1;{"\n"}{"\t"}
                paginatedPages.push(firstPage);{"\n"}{"\t"}
                if (numberOfPages &#x3c;= 1) &#x7b;{"\n"}{"\t"}{"\t"}
                    return paginatedPages;{"\n"}{"\t"}
                &#x7d;{"\n"}{"\t"}
                for (let i = currentPage - delta ; i&#x3c;= currentPage + delta ; i++) &#x7b; {"\n"}{"\t"}{"\t"}
                    if (i &#x3c; numberOfPages &#x26;&#x26; i &#x3e; 1) &#x7b; {"\n"}{"\t"}{"\t"}{"\t"}
                        paginatedPages.push(i); {"\n"}{"\t"}{"\t"}
                    &#x7d; {"\n"}{"\t"}
                &#x7d; {"\n"}{"\t"}
                paginatedPages.push(numberOfPages); {"\n"}{"\t"}
                &#x2f;&#x2f; Algorithm to correctly place dots in paginatedPages {"\n"}{"\t"}
                for (const i of paginatedPages) &#x7b; {"\n"}{"\t"}{"\t"}
                    if (paginatedIndex) &#x7b; {"\n"}{"\t"}{"\t"}{"\t"}
                        if (i - paginatedIndex === 2) &#x7b; {"\n"}{"\t"}{"\t"}{"\t"}{"\t"}
                            ellipsis.push(paginatedIndex + 1); {"\n"}{"\t"}{"\t"}{"\t"}
                        &#x7d; else if (i - paginatedIndex !== 1) &#x7b; {"\n"}{"\t"}{"\t"}{"\t"}{"\t"}
                            ellipsis.push(&#x22;...&#x22;); {"\n"}{"\t"}{"\t"}{"\t"}
                        &#x7d; {"\n"}{"\t"}{"\t"}
                    &#x7d; {"\n"}{"\t"}{"\t"}
                    ellipsis.push(i); {"\n"}{"\t"}{"\t"}
                    paginatedIndex = i; {"\n"}{"\t"}
                &#x7d; {"\n"}{"\t"}
                &#x2f;&#x2f; Returns the new list with ellipsis and current active page {"\n"}{"\t"}
                return &#x7b; ellipsis, {"\n"}{"\t"}{"\t"}
                    currentPage&#x7d;; {"\n"}{"\t"}
        </ComponentPreview>
        <p>Don&apos;t hesitate to reach out to the design team for further explanation of the algorithm.</p>

        <h3>When to consider something else</h3>
        <p>For exploration of content, where users are browsing aimlessly for something interesting, infinite scroll is better suited then using pagination. Pagination is best when the user is trying to accomplish a goal, for instance trying to find a particular article from a list. </p>

        <h3>How to use Pagination</h3>
        <h4>Items per page</h4>
        <p>10 items per page can be used as a general rule, but in reality it depends on your specific context. Consider the display size of each item, showing 10 items and leaving half the screen unused is not good practice.</p>
        <h4>Placement</h4>
        <p>Place pagination below the set of items it paginates through.</p>

        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success pb-5 h100" >
                    <h4>Do</h4>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-4 mb-4">
                        {[...Array(4)].map((e, i) => <div key={i} className="pagination-content-box-example"></div>)}
                        <PaginationComponent type="example" id="example-test"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error pb-5 h100">
                    <h4>{"Don't"}</h4>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-4 mb-4">
                        <PaginationComponent type="example"/>
                        {[...Array(4)].map((e, i) => <div key={i} className="pagination-content-box-example"></div>)}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <span className="h3">Javascript methods</span>
        <p className="mt-2">Use <CodeTags type="secondary" code="dg.pagination.init()"/> to initialize all paginations.</p>
        <p>Use <CodeTags type="secondary" code='dg.pagination.init("component-id")'/> to initialize one specific component.</p>
    </section>
);

const Pagination = () => {
    useEffect(() => {
        pagination.init("overview");
    });

    return (
        <DocContainer docToc>
            <p className="lead">
                Use the pagination component to indicate that a series of related content exist across multiple pages.
            </p>
            <Overview/>
            <DeveloperDocumentation/>
        </DocContainer>
    );
};

export default Pagination;

/* For testing */
export { Overview, DeveloperDocumentation };
