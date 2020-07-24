import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Add the attribute <CodeTags type="secondary" code="tooltip" /> to the desired element and add your content in its value to create a tooltip.</p>
        <p>You can use the attribute <CodeTags type="secondary" code="tooltip-position" /> to position the tooltip relative to the containing element, use the values <CodeTags type="secondary" code="top" />, <CodeTags type="secondary" code="right" />, <CodeTags type="secondary" code="bottom" /> or <CodeTags type="secondary" code="left" />. If the attribute is not provided, it will default to top.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <button
                    className="btn btn-primary"
                    type="button"
                    data-tooltip="This is a tooltip!"
                    data-tooltip-position="left"
                >Tooltip to the left
                </button>{"\n"}
                <button
                    className="btn btn-primary"
                    type="button"
                    data-tooltip="Payment capture is the process by which payments are secured once the payment has been authorized by the customer."
                    data-tooltip-position="top"
                >Tooltip on top
                </button>{"\n"}
                <button
                    className="btn btn-primary"
                    type="button"
                    data-tooltip="This is a tooltip!"
                    data-tooltip-position="bottom"
                >Tooltip to the bottom
                </button>{"\n"}
                <button
                    className="btn btn-primary"
                    type="button"
                    data-tooltip="This is a tooltip!"
                    data-tooltip-position="right"
                >Tooltip to the right
                </button>{"\n"}
                <i className="material-icons"
                    data-tooltip="Payment capture is the process by which payments are secured once the payment has been authorized by the customer."
                    data-tooltip-position="bottom"
                >help_outline</i>
            </div>
        </ComponentPreview>
    </>
);

const Tooltip = () => (
    <DocContainer docToc>
        <p className="lead">Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function.</p>
        <Overview />
    </DocContainer>
);

export default Tooltip;

/* For testing */
export { Overview };
