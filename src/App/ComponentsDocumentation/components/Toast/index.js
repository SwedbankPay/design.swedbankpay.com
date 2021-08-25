import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Alert from "@components/Alert";
import CodeTags from "@components/CodeTags";
import { toastShowCase } from "./constants";

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" codeFigure showCasePanel showCasePanelAdvanced={toastShowCase}/>

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
                <div className="toast-example-container m-5">
                    <div id="toast-container" className="m-auto">
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

const PremadeToasts = () => (
    <>
        <h2 id="premade-toasts">Premade toasts</h2>
        <p>There are four premade toast styles other than the default one; <CodeTags type="secondary" code="neutral" />, <CodeTags type="secondary" code="success" />, <CodeTags type="secondary" code="warning" /> and <CodeTags type="secondary" code="danger" />. Apply the desired one to the options object and be amazed!</p>
        <ComponentPreview language="html" codeFigure dangerousHTML>
            {"<button type=\"button\" onclick=\"toast({ html: 'I am a neutral toast!', type: 'neutral' })\" class=\"btn btn-primary\">Neutral toast</button>"}
            {"<button type=\"button\" onclick=\"toast({ html: 'I am a success toast!', type: 'success' })\" class=\"btn btn-primary\">Success toast</button>"}
            {"<button type=\"button\" onclick=\"toast({ html: 'I am a warning toast!', type: 'warning' })\" class=\"btn btn-primary\">Warning toast</button>"}
            {"<button type=\"button\" onclick=\"toast({ html: 'I am a danger toast!', type: 'danger' })\" class=\"btn btn-primary\">Danger toast</button>"}
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => toast({
                    html: "I am a toast!",
                    type: "neutral"
                })}
            >
                Neutral toast
            </button>{"\n"}
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => toast({
                    html: "I am a toast!",
                    type: "success"
                })}
            >
                Success toast
            </button>{"\n"}
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => toast({
                    html: "I am a toast!",
                    type: "warning"
                })}
            >
                Warning toast
            </button>{"\n"}
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => toast({
                    html: "I am a toast!",
                    type: "danger"
                })}
            >
                Danger toast
            </button>
        </ComponentPreview>
    </>
);

const CustomHtml = () => {
    const toastHtml = "<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class=\"btn toast-action\">Undo</button>";

    return (
        <>
            <h2 id="custom-html">Custom HTML</h2>
            <p>You can pass in an HTML String as the first argument as well. Take a look at the example below, where we pass in text as well as a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks.</p>
            <ComponentPreview language="javascript" codeFigure>
                {"const toastHtml = \"<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class='btn toast-action'>Undo</button>\";"}{"\n"}
                {"toast({ html: toastHtml });"}
            </ComponentPreview>
            <ComponentPreview language="html" showCasePanel>
                <button className="btn btn-primary" type="button" onClick={() => toast({ html: toastHtml })}>Toast with action</button>
            </ComponentPreview>
        </>
    );
};

const ContentGuidelines = () => (
    <section>
        <h3>Content guidelines</h3>
        <div className="slab slab-plain">
            <div className="toast-example-container">
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
        <p>To use the Toast, call the toast function on an element.</p>
        <h3>Options</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>html</td>
                    <td>String</td>
                    <td><CodeTags type="secondary" code='""'/></td>
                    <td>The HTML content of the Toast.</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>String</td>
                    <td><CodeTags type="secondary" code='""'/></td>
                    <td>Alert types: <CodeTags type="secondary" code="success"/>, <CodeTags type="secondary" code="neutral"/>, <CodeTags type="secondary" code="warning"/>, <CodeTags type="secondary" code="danger"/></td>
                </tr>
                <tr>
                    <td>classes</td>
                    <td>Array of strings</td>
                    <td><CodeTags type="secondary" code="[]"/></td>
                    <td>Classes to be added to the toast element.</td>
                </tr>
                <tr>
                    <td>completeCallback</td>
                    <td>Function</td>
                    <td><CodeTags type="secondary" code="null"/></td>
                    <td>Callback function called when toast is dismissed.</td>
                </tr>
            </tbody>
        </table>
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
export { Overview, PremadeToasts, CustomHtml };
