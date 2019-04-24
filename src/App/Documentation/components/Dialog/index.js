import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, Icon, Attribute, Property } from "#";

const { dialog } = window.px;

const HowItWorks = () => (
    <>
        <h2 id="how">How it works</h2>
        <p>
            A dialog remains hidden until it is triggered. Once it is open it overlays the website with a dark background and presents some options, usually confirming or cancelling an action.
            If you use a dialog it is assumed that you want to &quot;force&quot; the user to make a choice. Therefore the only way to close a dialog is to choose one of the presented actions or, if given,
            press the <i className="material-icons">close</i> to close the dialog.
        </p>
    </>
);

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Dialog boxes consist of a header, a body and a footer. In these you can put whatever you want, but some basic functionality should be included in all dialogs.
            The header should contain a short descriptive text for what the dialog-box does. You can include an icon with class <Property value=".dialog-close" /> if you wish to give your user a way to close the dialog box without choosing an option.
            The dialog body should contain the main content, usually just text confirming an action.
            In the footer you will find buttons to confirm or cancel the requested action. To make a button open the dialog box you need to
            include <Attribute data name="dialog-open" value="{#your-dialog-id}" /> as an attribute to that button.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="dialog" id="demo-dialog">
                <section>
                    <header>
                        <h5>Delete item 456?</h5>{"\n"}
                        <a href="#" className="dialog-close">{"\n\t\t\t\t"}
                            <Icon icon="close" />{"\n\t\t\t"}
                        </a>{"\n\t\t"}
                    </header>
                    <div className="dialog-body">
                        <p>Are you sure you want to permanently delete the item <i>German Swashbuckle (456)?</i></p>
                    </div>
                    <footer>{"\n"}
                        <button className="btn btn-secondary" type="button" data-dialog-close="demo-dialog">Cancel</button>{"\n"}
                        <button className="btn btn-danger" type="button">Delete</button>{"\n"}
                    </footer>
                </section>
            </div>{"\n"}
            <button className="btn btn-primary" type="button" data-dialog-open="demo-dialog">Open dialog</button>
        </ComponentPreview>
    </>
);

const UsageWithJavascript = () => (
    <>
        <h2 id="usage-with-javascript">Usage With Javascript</h2>
        <p>
            With the Dialog object you are given access to <Property value="init()" />, <Property value="open()" /> and  <Property value="close()" />.
        </p>
        <h3>Initializing dialogs</h3>
        <p>
            To initialize a Dialog use <Property value="px.dialog.init()" />. If called without arguments it will initialize all dialogs the page, or you can specify dialogs.
            The init function accepts both a single string or an array of strings. These strings need to match an existing dialog id and will print warning messages if an argument is invalid.
            <hr></hr>
            Example of valid arguments
        </p>
        <ComponentPreview language="javascript" codeFigure >
            {"px.dialog.init();\n"}
            {"px.dialog.init(\"demo-dialog\");\n"}
            {"px.dialog.init([\"demo-dialog\"]);\n"}
            {"px.dialog.init([\"demo-dialog-1\", .. \"demo-dialog-x\"]);\n"}
        </ComponentPreview>
        <h3>Toggling dialogs programmatically</h3>
        <p>
            We only support having one dialog open at-a-time, so <Property value="dialog.open()" /> and <Property value="dialog.close()" /> only accept single IDs as arguments.
        </p>
        <ComponentPreview language="javascript" codeFigure >
            {"px.dialog.open(\"demo-dialog\");\n"}
            {"px.dialog.close(\"demo-dialog\");\n"}
        </ComponentPreview>
    </>
);

class Dialog extends Component {
    componentDidMount () {
        dialog.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Dialog is meant to be used to show a snippet of text like a confirmation box before you delete something.
                    Use <Link to="/docs/components/sheet">sheet</Link> if you wish to receive input from the user or display a large chunk of information.
                </p>
                <HowItWorks />
                <Overview />
                <UsageWithJavascript />
            </DocContainer>
        );
    }
}

export default Dialog;

/* For testing */
export { HowItWorks, Overview, UsageWithJavascript };
