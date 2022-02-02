import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import Tag from "@components/Tag";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Use class <Tag code type="secondary" text=".badge" /> along with <Tag code type="secondary" text=".badge-{color}" /> to display the badge of your choosing.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p>Badge <span className="badge badge-default">Default</span></p>
            <p>Badge <span className="badge badge-inactive">Inactive</span></p>
            <p>Badge <span className="badge badge-warning">Warning</span></p>
        </ComponentPreview>
    </>
);

const BadgeNumber = () => (
    <>
        <h2 id="badgenumber">Badges with numbers</h2>
        <p>Badges are often used with numbers. Use <Tag code type="secondary" text=".badge-number" /> when a badge suited for use with numbers is desired.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p>Badge <span className="badge badge-default badge-number">1</span></p>
            <p>Badge <span className="badge badge-inactive badge-number">8</span></p>
            <p>Badge <span className="badge badge-warning badge-number">100</span></p>
        </ComponentPreview>
    </>
);

const Badge = () => (
    <DocContainer docToc>
        <p className="lead">
            Badges are small rectangular boxes which can convey a message and or state with their text and color.
        </p>
        <Overview />
        <BadgeNumber />
    </DocContainer>
);

export default Badge;

/* For testing */
export { Overview, BadgeNumber };
