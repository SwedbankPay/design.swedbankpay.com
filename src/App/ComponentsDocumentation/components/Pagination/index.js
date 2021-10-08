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
        <h3>When to consider something else</h3>
        <ul className="pl-3 list list-bullet">
            <li>For exploration of content, where users are browsing aimlessly for something interesting, infinite scroll is better suited then using pagination. Pagination is best when the user is trying to accomplish a goal, for instance trying to find a particular article from a list. </li>
        </ul>

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
        pagination.init();
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
