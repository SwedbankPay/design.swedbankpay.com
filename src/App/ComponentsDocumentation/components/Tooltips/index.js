import React, { useEffect } from "react";

import { ComponentPreview, DocContainer } from "@docutils";
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
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <i className="material-icons"
                data-tooltip=""
                data-tooltip-position="top"
            >
                help_outline
                <span className="tooltip">Payment capture is the process by which payments are secured once the payment has been authorized by the customer.</span>
            </i>{"\n"}
            <button
                className="btn btn-executive"
                type="button"
                data-tooltip=""
                data-tooltip-position="top"
            >
                Tooltip on top
                <span className="tooltip">Payment capture is the process by which payments are secured once the payment has been authorized by the customer.</span>
            </button>{"\n"}

        </ComponentPreview>

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
        </DocContainer>
    );
};

export default Tooltip;

/* For testing */
export { Overview };
