import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";
import { toastShowCase, optionsTable } from "./constants";

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" showCasePanel hideCodeFigure showCasePanelAdvanced={toastShowCase} />
        <ComponentPreview language="html" codeFigure dangerousHTML>
            {"<button type=\"button\" class=\"btn btn-primary\" onclick=\"dg.toast({\n\ttype: 'neutral' \n\thtml: '<p><b>Info header</b> Input informative alert information here, provide <a href=\"#\">link</a> to solution or more info when possible.</p>'})\">\nNeutral toast\n</button>"}
        </ComponentPreview>
        <section>
            <h3>When to consider something else</h3>
            <ul className="list list-bullet">
                <li>Toasts are temporary notifications, therefore in cases where you want to display a more permanent message to the user, use the <Link to="/components/alerts">alert</Link> component instead which stays permanently on the screen.</li>
                <li>Similarly, if you require action from the user before continuing to the next page, use a <Link to="/components/dialog">dialog</Link> component instead.</li>
            </ul>
        </section>

        <section>
            <h3>How to use toast</h3>
            <div className="slab slab-plain slab-border-success">
                <span className="h3">Do</span>
                <div className="toast-example-container">
                    <div id="toast-container" className="ml-auto mr-3 mt-3">
                        <div className="toast toast-neutral">
                            <i className="material-icons">info</i>
                            <div className="toast-content"><b>Short information message</b></div>
                            <i className="material-icons">close</i>
                        </div>
                    </div>
                </div>
            </div>
            <p>The positioning of the toast component should always be at the top left corner of the page on web and top center on mobile devices.</p>

            <div className="slab slab-plain slab-border-error">
                <span className="h3">Don&apos;t</span>
                <div className="toast-example-container m-4">
                    <div id="toast-container" className="toast-dont-example m-auto">
                        <div className="toast toast-neutral">
                            <i className="material-icons">info</i>
                            <div className="toast-content"><b>Short information message</b></div>
                            <i className="material-icons">close</i>
                        </div>
                    </div>
                </div>
            </div>
            <p>Since the toast component provides updates on user actions and never critical information, it should not disturb/abrupt the user flow. As seen on the example above, it should not pop up in the middle of the screen interrupting the user. </p>
        </section>
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h3>Content guidelines</h3>
        <div className="slab slab-plain mt-3">
            <div className="toast-example-container py-5">
                <div id="toast-container" className="m-auto">
                    <div className="toast toast-neutral">
                        <i className="material-icons">info</i>
                        <div className="toast-content"><b>Message</b></div>
                        <i className="material-icons">close</i>
                    </div>
                </div>
            </div>
        </div>
        <ul className="list list-bullet">
            <li>The <b>message</b> for toast should reflect the type of the toast, if it is informative it should explain and link the user further. If it is an error toast, it should clearly explain what the issue is and explain how the user can solve the problem.</li>
        </ul>
    </section>
);

const DeveloperDocumentation = () => (
    <section id="developer-documentation">
        <h2>Developer documentation</h2>
        <p>To use the Toast, call <CodeTags type="secondary" code="dg.toast()" /> on an element with the desired options.</p>
        <ComponentPreview language="html" codeFigure dangerousHTML>
            {"<button type=\"button\" class=\"btn btn-primary\" onclick=\"dg.toast({\n\ttype: 'neutral' \n\thtml: '<p><b>Info header</b>\n\t\t Input informative alert information here, provide <a href=\"#\">link</a> to solution or more info when possible.\n\t</p>'})\">Neutral toast\n</button>"}
        </ComponentPreview>

        <h4>Options</h4>
        {optionsTable.map(({ tableHead, tableBody }, i) => (
            <table key={tableHead} className="table table-striped">
                <thead>
                    <tr>
                        {tableHead.map(th => <th key={th + i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {tableBody.map(({ tableData }, i) => (
                        <tr key={i}>
                            {tableData.map((td, i) => <td key={td + i}>{td}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        ))}

        <section>
            <h3>Usage with NPM</h3>
            <p><Link to="/get-started/for-developers/">Usage with NPM</Link> will require you to import it from <CodeTags type="primary" code="@swedbankpay/design-guide" /> before calling it on an element.</p>
            <ComponentPreview language="javascript" codeFigure dangerousHTML>
                import &#123; toast &#125; from &quot;@swedbankpay/design-guide&quot;; {"\n"}
                toast();
            </ComponentPreview>
            <ComponentPreview language="html" codeFigure dangerousHTML>
                {"<button type=\"button\" class=\"btn btn-primary\" onclick=\"toast({\n\ttype: 'neutral' \n\thtml: '<p><b>Info header</b>\n\t\t Input informative alert information here, provide <a href=\"#\">link</a> to solution or more info when possible.\n\t\t</p>'})\">Neutral toast\n</button>"}
            </ComponentPreview>
        </section>
    </section>
);

class Toast extends Component {
    render () {
        return (
            <DocContainer>
                <section id="toast-doc">
                    <p className="lead">
                        The toast component is only displayed when the user has performed an action. The components informs the user of the status of their request, warning and potential errors.
                    </p>
                    <Overview />
                    <ContentGuidelines />
                    <DeveloperDocumentation />
                </section>
            </DocContainer>
        );
    }
}

export default Toast;

/* For testing */
export { Overview, ContentGuidelines, DeveloperDocumentation };
