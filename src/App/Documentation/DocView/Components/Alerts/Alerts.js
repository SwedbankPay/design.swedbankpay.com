import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import ComponentPreview, { DataAttribute, PxScript } from "../../../utils/ComponentPreview";
import DocToc from "../../../utils/DocToc";

import AlertComponent from "../../../../components/Alert/Alert";
import { alert } from "../../../../../px-script";

const BasicUsage = () => (
    <div>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Alerts</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <AlertComponent type="success" display={true} text="This is a success alert!" />
            <AlertComponent type="neutral" display={true} text="This is a neutral alert!" />
            <AlertComponent type="warning" display={true} text="This is a warning alert!" />
            <AlertComponent type="error" display={true} text="This is a error alert!" />
            <AlertComponent type="light" display={true} text="This is a light alert!" />
            <AlertComponent type="default" display={true} text="This is a default alert!" />
        </ComponentPreview>
    </div>
);

const AlertWithLink = () => (
    <div>
        <h2 id="links">Links</h2>
        <p>Alerts with links</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <AlertComponent type="success" display={true} text="This is a success alert, " linkText="with a link!" />
            <AlertComponent type="neutral" display={true} text="This is a neutral alert, " linkText="with a link!" />
            <AlertComponent type="warning" display={true} text="This is a warning alert, " linkText="with a link!" />
            <AlertComponent type="error" display={true} text="This is a error alert, " linkText="with a link!" />
            <AlertComponent type="light" display={true} text="This is a light alert, " linkText="with a link!" />
            <AlertComponent type="default" display={true} text="This is a default alert, " linkText="with a link!" />
        </ComponentPreview>
    </div>
);
const AlertWithIcon = () => (
    <div>
        <h2 id="icons">Icons</h2>
        <p>To use an alert with an icon... Read more about icon usage here <Link to="/docs/core/icons">here</Link>.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <AlertComponent type="success" display={true} text="This is a success alert with an icon!" icon="check_circle" />
            <AlertComponent type="neutral" display={true} text="This is a neutral alert with an icon!" icon="info" />
            <AlertComponent type="warning" display={true} text="This is a warning alert with an icon!" icon="warning" />
            <AlertComponent type="error" display={true} text="This is a error alert with an icon!" icon="error" />
            <AlertComponent type="light" display={true} text="This is a light alert with an icon!" icon="info_outline" />
            <AlertComponent type="default" display={true} text="This is a default alert with an icon!" icon="info_outline" />
        </ComponentPreview>
    </div>
);

const ClosingTheAlert = () => (
    <div>
        <h2 id="closing-the-alert">Closing the alert</h2>
        <p>To add a close-button, add an <Link to="/docs/core/icons">icon</Link> element (<b>close</b> is recommended) with the class <code className="token property">.alert-close</code> and make sure to include the attribute <DataAttribute name="close" value="true" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <AlertComponent id="alert-success" type="success" display={true} text="This is a success alert with an icon!" close={true} icon="check_circle" />
            <AlertComponent id="alert-neutral" type="neutral" display={true} text="This is a neutral alert with an icon!" close={true} icon="info" />
            <AlertComponent id="alert-warning" type="warning" display={true} text="This is a warning alert with an icon!" close={true} icon="warning" />
            <AlertComponent id="alert-error" type="error" display={true} text="This is a error alert with an icon!" close={true} icon="error" />
            <AlertComponent id="alert-light" type="light" display={true} text="This is a light alert with an icon!" close={true} icon="info_outline" />
            <AlertComponent id="alert-default" type="default" display={true} text="This is a default alert with an icon!" close={true} icon="info_outline" />
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
                <i className="material-icons alert-close" data-close="true">close</i>
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
        <p>To display alerts</p>
        <ComponentPreview language="javascript" codeFigure={true}>
            {"px.alert.show();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.alert.show(id);"}
        </ComponentPreview>
        <p>To hide alerts</p>
        <ComponentPreview language="javascript" codeFigure={true}>
            {"px.alert.hide();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.alert.hide(id);"}
        </ComponentPreview>
        <h3>Methods</h3>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><PxScript component="alert" func="init" /></td>
                    <td>Initializes close-buttons on all alerts (this is done automatically by px-script.</td>
                </tr>
                <tr>
                    <td><PxScript component="alert" func="show" params={["id"]} /></td>
                    <td>Show the specified alert, if no id is provided it will show all hidden alerts currently rendered in the DOM.</td>
                </tr>
                <tr>
                    <td><PxScript component="alert" func="hide" params={["id"]} /></td>
                    <td>Hide the specified alert, if no id is provided it will hide all open alerts currently rendered in the DOM.</td>
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
