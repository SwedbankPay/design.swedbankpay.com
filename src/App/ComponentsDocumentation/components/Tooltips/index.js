import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import CodeTags from "@components/CodeTags";
import TooltipComponent from "@components/Tooltips";
import { tooltips } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Add the attribute <CodeTags type="secondary" code="tooltip" /> to the desired element and add your content in its value to create a tooltip.</p>
        <p>You can use the attribute <CodeTags type="secondary" code="tooltip-position" /> to position the tooltip relative to the containing element, use the values <CodeTags type="secondary" code="top" />, <CodeTags type="secondary" code="right" />, <CodeTags type="secondary" code="bottom" /> or <CodeTags type="secondary" code="left" />. If the attribute is not provided, it will default to top.</p>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <TooltipComponent className="btn btn-primary" title="Tooltip to the left" text="This is a tooltip!" position="left" id="tooltip-left-example"/>
            <TooltipComponent className="btn btn-primary" title="Tooltip on top" text="Payment capture is the process by which payments are secured once the payment has been authorized by the customer." position="top" id="tooltip-top-example"/>
            <TooltipComponent className="btn btn-primary" title="Tooltip to the right" text="This is a tooltip!" position="right" id="tooltip-left-example"/>
            <TooltipComponent className="btn btn-primary mt-1" title="Tooltip on bottom" text="Payment capture is the process by which payments are secured once the payment has been authorized by the customer." position="bottom" id="tooltip-left-example"/>
        </ComponentPreview>
    </>
);


const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="tooltips" />
    </>
);

const Tooltip = () => {
    useEffect(() => { tooltips.init(); });

    return (
        <DocContainer docToc>
            <p className="lead">Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function.</p>
            <Overview />
            <JavascriptMethods />
            <NpmInformation componentName={"tooltips"}/> 
        </DocContainer>
    );
};

export default Tooltip;

/* For testing */
export { Overview, JavascriptMethods };
