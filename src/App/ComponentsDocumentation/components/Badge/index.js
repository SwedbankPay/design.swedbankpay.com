import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";
import { badgeShowcase } from "./constants";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Use class <CodeTags type="secondary" code=".badge" /> along with <CodeTags type="secondary" code=".badge-{color}" /> to display the badge of your choosing. Badges are often used with numbers. Use <CodeTags type="secondary" code=".badge-number" /> when a badge with only numbers is desired.</p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={badgeShowcase} codeFigure removeOuterTag/>
        <h3>Things to consider</h3>
        <ul className="list list-bullet">
            <li>A normal badge does not feature interaction, use the button component instead.</li>
            <li>If you want removable badges consider using the tag component instead.</li>
            <li>Do not use too long labels or whole sentences.</li>
            <li>If possible, try not to use more than three words.</li>
        </ul>

        <h3>Content guidelines</h3>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success">
                    <h3>Do</h3>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <span className="badge badge-yellow-light">Transactions</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error">
                    <h3>Don't</h3>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <span className="badge badge-yellow-light">Transactions from 2022-2023</span>
                    </div>
                </div>
            </div>
        </div>
    </>
);

const Badge = () => (
    <DocContainer docToc>
        <p className="lead">
            Badges are small rectangular boxes which can convey a message and or state with their text and color.
        </p>
        <Overview />
    </DocContainer>
);

export default Badge;

/* For testing */
export { Overview };
