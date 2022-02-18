import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import { PaginationShowCasePanel } from "./constants";

import CodeTags from "~/src/App/components/CodeTags";

const Overview = () => (
    <section id="pagination-overview">
        <h2 id="pagination">Overview</h2>
        <p>Pagination is commonly used for things like table listings, search results or directories.The need for pagination is influenced by the amount of data to be displayed and the aim is to not overwhelm users with information and to improve the loading performance of the system. </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={PaginationShowCasePanel} codeFigure/>

        <h3>Responsive design</h3>
        <div className="slab slab-plain">
            <nav className="pagination align-items-center no-pointer-events" role="navigation" aria-label="Pagination Navigation">
                <button className="arrow-start d-block disabled">
                    <i className="material-icons" aria-label="start"></i></button>
                <button className="arrow-back disabled">
                    <i className="material-icons" aria-label="back"></i>
                </button>
                <span className="mobile d-block font-weight-bold">Page 1 of 10</span>
                <button className="arrow-forward">
                    <i className="material-icons" aria-label="forward"></i>
                </button>
                <button className="arrow-end d-block">
                    <i className="material-icons" aria-label="end"></i>
                </button>
            </nav>
        </div>

        <p>On smaller screens the page links are replaced with text showing the page information, still using arrows to go to next or previous page but with the option to go to the first or last page as well.</p>

        <h3>When to consider something else</h3>
        <p>For exploration of content, where users are browsing aimlessly for something interesting, infinite scroll is better suited then using pagination. Pagination is best when the user is trying to accomplish a goal, for instance trying to find a particular article from a list. </p>

        <h3>How to use Pagination</h3>
        <h4>Items per page</h4>
        <p>10 items per page can be used as a general rule, but in reality it depends on your specific context. Consider the display size of each item, showing 10 items and leaving half the screen unused is not good practice.</p>
        <h4>Placement</h4>
        <p>Place pagination below the set of items it paginates through.</p>

        <div className="row">
            {["success", "error"].map((slabType, key) => <div key={key + slabType} className="col-lg-6">
                <div className={`slab slab-plain slab-border-${slabType}`}>
                    <h4>Do{slabType === "error" && "n't"}</h4>
                    {slabType === "success" && [...Array(4)].map((x, i) => <div key={slabType + i} className="pagination-content-box-example mt-3 mx-auto"></div>)}
                    <nav className="pagination example">
                        <button className="arrow-back">{"\n"}
                            <i className="material-icons"></i>{"\n"}
                        </button>
                        <div className="example-box my-auto"></div>
                        <button className="arrow-forward">{"\n"}
                            <i className="material-icons"></i>{"\n"}
                        </button>
                    </nav>
                    {slabType === "error" && [...Array(4)].map((x, i) => <div key={slabType + i} className="pagination-content-box-example mb-3 mx-auto"></div>)}
                </div>
            </div>
            )}
        </div>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <span className="h3">Javascript methods</span>
        <p>Our pagination component works without a script, so the styling is still working where Javascript is prohibited. But where it is allowed, and where you do not want to spend time banging your head to figure out the algorithm, we have provided a script that paginates the pages for you! <CodeTags type="secondary" code="dg.paginate(pages, currentActive)"/>. The script takes in two props, <CodeTags type="primary" code="pages"/> and <CodeTags type="primary" code="currentActive"/>, where <CodeTags type="primary" code="pages"/> is total pages and <CodeTags type="primary" code="currentActive"/> is the current active page.</p>
        <p>The script returns the paginated pages, an array which contains an object with two properties, <CodeTags type="primary" code="page"/> and <CodeTags type="primary" code="current"/>. <CodeTags type="primary" code="page"/> shows an integer, and <CodeTags type="primary" code="null"/> when it should be replaced with an ellipsis. The <CodeTags type="primary" code="current"/> is a bool that indicates whether the page is active or not.</p>

        <h3>Example</h3>
        <ComponentPreview language="javascript" codeFigure>
            import &#123; paginate &#125; from &quot;@src/scripts/main&quot;;{"\n"}{"\n"}

            console.log(paginate(10, 5)){"\n"}{"\n"}

            {"//expected output:"}{"\n"}
            [&#123;page: 1, current: false&#125;,{"\n"}
            &#123;page: null, current: false&#125;,{"\n"}
            &#123;page: 4, current: false&#125;,{"\n"}
            &#123;page: 5, current: true&#125;,{"\n"}
            &#123;page: 6, current: false&#125;,{"\n"}
            &#123;page: null, current: false&#125;,{"\n"}
            &#123;page: 10, current: false&#125;]
        </ComponentPreview>
    </section>
);

const Pagination = () => (
    <DocContainer docToc>
        <p className="lead">
            Pagination is used to divide large amounts of content into separate pages and allows the user to navigate to next or previous pages.
        </p>
        <Overview/>
        <DeveloperDocumentation/>
    </DocContainer>
);

export default Pagination;

/* For testing */
export { Overview, DeveloperDocumentation };
