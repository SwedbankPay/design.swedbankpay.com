import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import CodeTags from "@components/CodeTags";

const { tooltips } = window.dg;

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
                    data-tooltip="Payment capture is the process by which payments are secured once the payment has been authorized by the customer!"
                    data-tooltip-position="right"
                >Tooltip to the right
                </button>{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const WithIcons = () => (
    <>
        <h2 id="with-icons">With icons</h2>
        <p>Tooltips can be used with icons to give further information, for instance to inform about CVC</p>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="form-group">{"\n"}
                <label htmlFor="cvc">{"\n"}
                    CVC{"\n"}
                    <i className="material-icons"
                        data-tooltip="Payment capture is the process by which payments are secured once the payment has been authorized by the customer."
                        data-tooltip-position="top"
                    >{"\n"}
                        help_outline{"\n"}
                    </i>{"\n"}
                </label>{"\n"}
                <input type="text" className="form-control" id="cvc" style={{ width: "250px" }} />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const ExtendedUsage = () => (
    <>
        <h2 id="extended-usage">Extended usage</h2>
        <p>
            The extended usage tooltip is meant to give more control over the tooltip, such as automatic repositioning of the tooltip if its content falls
            out from the viewport (using <CodeTags type="secondary" code="dg.tooltips.init()" />). Recommended to be used on mobile focused
            applications. <b>NOTE:</b> Only <CodeTags type="secondary" code="data-tooltip-position" /> with
            the values <CodeTags type="secondary" code="top" /> and <CodeTags type="secondary" code="bottom" /> are supported.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="d-flex align-items-center">
                <i className="material-icons mr-3"
                    data-tooltip=""
                    data-tooltip-position="top"
                >{"\n"}
                    help_outline{"\n"}
                    <span className="tooltip">{"\n"}
                        Payment capture is the process by which payments are secured once the payment has been authorized by the customer.{"\n"}
                    </span>{"\n"}
                </i>{"\n"}
                <button
                    className="btn btn-primary"
                    type="button"
                    data-tooltip=""
                    data-tooltip-position="bottom"
                >{"\n"}
                    Tooltip on bottom{"\n"}
                    <span className="tooltip">Payment capture is the process by which payments are secured once the payment has been authorized by the customer.</span>{"\n"}
                </button>{"\n"}
            </div>
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
            <WithIcons />
            <ExtendedUsage />
            <JavascriptMethods />
        </DocContainer>
    );
};

export default Tooltip;

/* For testing */
export { Overview, WithIcons, ExtendedUsage, JavascriptMethods };
