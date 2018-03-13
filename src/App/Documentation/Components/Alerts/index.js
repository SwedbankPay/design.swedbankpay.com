import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import ComponentPreview, { PxScript } from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

import AlertComponent from "../../../components/Alert";
import { alert } from "../../../../px-script";

const BasicUsage = () => (
    <div>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Alerts</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <AlertComponent type="success" display={true} text="This is a success alert!" />{"\n\n"}
            <AlertComponent type="neutral" display={true} text="This is a neutral alert!" />{"\n\n"}
            <AlertComponent type="warning" display={true} text="This is a warning alert!" />{"\n\n"}
            <AlertComponent type="error" display={true} text="This is a error alert!" />{"\n\n"}
            <AlertComponent type="light" display={true} text="This is a light alert!" />{"\n\n"}
            <AlertComponent type="default" display={true} text="This is a default alert!" />
        </ComponentPreview>
    </div>
);

const AlertWithLink = () => (
    <div>
        <h2 id="links">Links</h2>
        <p>Alerts with links</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <AlertComponent type="success" display={true} text="This is a success alert, " linkText="with a link!" />{"\n\n"}
            <AlertComponent type="neutral" display={true} text="This is a neutral alert, " linkText="with a link!" />{"\n\n"}
            <AlertComponent type="warning" display={true} text="This is a warning alert, " linkText="with a link!" />{"\n\n"}
            <AlertComponent type="error" display={true} text="This is a error alert, " linkText="with a link!" />{"\n\n"}
            <AlertComponent type="light" display={true} text="This is a light alert, " linkText="with a link!" />{"\n\n"}
            <AlertComponent type="default" display={true} text="This is a default alert, " linkText="with a link!" />
        </ComponentPreview>
    </div>
);

const AlertWithIcon = () => (
    <div>
        <h2 id="icons">Icons</h2>
        <p>To use an alert with an icon... Read more about icon usage here <Link to="/docs/core/icons">here</Link>.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <AlertComponent type="success" display={true} text="This is a success alert with an icon!" icon="check_circle" />{"\n\n"}
            <AlertComponent type="neutral" display={true} text="This is a neutral alert with an icon!" icon="info" />{"\n\n"}
            <AlertComponent type="warning" display={true} text="This is a warning alert with an icon!" icon="warning" />{"\n\n"}
            <AlertComponent type="error" display={true} text="This is a error alert with an icon!" icon="error" />{"\n\n"}
            <AlertComponent type="light" display={true} text="This is a light alert with an icon!" icon="info_outline" />{"\n\n"}
            <AlertComponent type="default" display={true} text="This is a default alert with an icon!" icon="info_outline" />
        </ComponentPreview>
    </div>
);

const ClosingTheAlert = () => (
    <div>
        <h2 id="closing-the-alert">Closing the alert</h2>
        <p>
            To add a close-button, add the following code inside your alert-element:<br/>
            <PrismCode className="language-html">{"<i className=\"material-icons alert-close\">close</i>"}</PrismCode>
        </p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <AlertComponent id="alert-success-1" type="success" display={true} text="This is a success alert with an icon!" close={true} icon="check_circle" />{"\n\n"}
            <AlertComponent id="alert-neutral-1" type="neutral" display={true} text="This is a neutral alert with an icon!" close={true} icon="info" />{"\n\n"}
            <AlertComponent id="alert-warning-1" type="warning" display={true} text="This is a warning alert with an icon!" close={true} icon="warning" />{"\n\n"}
            <AlertComponent id="alert-error-1" type="error" display={true} text="This is a error alert with an icon!" close={true} icon="error" />{"\n\n"}
            <AlertComponent id="alert-light-1" type="light" display={true} text="This is a light alert with an icon!" close={true} icon="info_outline" />{"\n\n"}
            <AlertComponent id="alert-default-1" type="default" display={true} text="This is a default alert with an icon!" close={true} icon="info_outline" />
        </ComponentPreview>
    </div>
);

const ExtendedUsage = () => (
    <div>
        <h2 id="extended-usage">Extended usage</h2>
        <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <div className="alert alert-success alert-with-icon in">{"\n"}
                <i className="material-icons alert-icon">check_circle</i>{"\n"}
                <i className="material-icons alert-close">close</i>
                <h3 className="alert-heading">Success!</h3>
                <p className="alert-text">You successfully saw the code example under the Extended usage section.</p>
                <p className="alert-text">This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr/>
                <p className="alert-text">By the way, great job!</p>
            </div>
        </ComponentPreview>
    </div>
);

const UsageWithJavascript = () => (
    <div>
        <h2 id="usage-with-javascript">Usage with javascript</h2>
        <p>To interact with the alert-component with javascript...</p>
        <h3>Show alerts</h3>
        <ComponentPreview language="javascript" codeFigure={true}>
            {"px.alert.show();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.alert.show(id);"}
        </ComponentPreview>
        <h3>Hide alerts</h3>
        <ComponentPreview language="javascript" codeFigure={true}>
            {"px.alert.hide();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.alert.hide(id);"}
        </ComponentPreview>
        <h3>Methods</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <PxScript component="alert" func="init" />
                    </td>
                    <td>
                        Initializes all rendered close-buttons. This is done automatically when the <code className="token property">px-script.js</code> loads, but might have to be used if you are not rendering your alerts right away. For instance, in react, you might want to call this function within the <PrismCode className="language-javascript">{"componentDidMount()"}</PrismCode> method.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="alert" func="show" />
                    </td>
                    <td>
                        Gives all rendered alerts the class <code className="token property">.in</code>, effectively giving them the css property <PrismCode className="language-css">{"display: block;"}</PrismCode>.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="alert" func="show" params={["id"]} />
                    </td>
                    <td>
                        Gives the specified alert the class <code className="token property">.in</code>, giving it the css property <PrismCode className="language-css">{"display: block;"}</PrismCode>. If no alert with the specified id is rendered to the DOM, the method does nothing.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="alert" func="hide" />
                    </td>
                    <td>
                        Removes the class <code className="token property">.in</code> from all rendered alerts, effectively giving them the css property <PrismCode className="language-css">{"display: none;"}</PrismCode>
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="alert" func="hide" params={["id"]} />
                    </td>
                    <td>
                        Removes the class <code className="token property">.in</code> from the alert specified by id, giving it the css property <PrismCode className="language-css">{"display: none;"}</PrismCode>. If no alert with the specified id is rendered to the DOM, the method does nothing.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

const AlertsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        <BasicUsage />
        <AlertWithLink />
        <AlertWithIcon />
        <ClosingTheAlert />
        <ExtendedUsage />
        <UsageWithJavascript />
    </div>
);

class Alerts extends Component {
    componentDidMount () {
        alert.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <AlertsText />
                    <DocToc component={AlertsText} />
                </div>
            </div>
        );
    }
}

export default Alerts;

/* for testing */
export { BasicUsage, AlertWithLink, AlertWithIcon, ClosingTheAlert, ExtendedUsage, UsageWithJavascript, AlertsText };
