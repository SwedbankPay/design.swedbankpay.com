import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, Icon, Attribute } from "#";
import { dialog } from "$/px-script/main";

const Example = () => (
    <>
        <h2 id="example">Example</h2>
        <p>
            Dialog boxes consist of a header, a body and a footer. In these you can put whatever you want, but some basic functionality should be included in all dialogs.
            The header should contain a short descriptive text for what the dialog-box does. Remember to include a way to close the dialog box in the header
            in the form of a clickable icon or something similar. The dialog body should contain the main content, usually just text confirming an action.
            In the footer you will find buttons to confirm or cancel the requested action. To make a button open the dialog box you need to
            include <Attribute data name="datepicker-time" value="{#your-dialog-id}" /> as an attribute to that button.
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
            <button className="btn btn-executive" type="button" data-dialog-open="demo-dialog">Open dialog</button>
        </ComponentPreview>
    </>
);

const UsageWithJavascript = () => (
    <>
        <h2 id="usage-with-javascript">Usage with javascript</h2>
        <ComponentPreview language="html" codeFigure>
            <div className="dialog" id="demo-dialog">{"\n"}
                ...{"\n"}
            </div>{"\n"}
        </ComponentPreview>
        <p>To open a dialog:</p>
        <ComponentPreview language="javascript" codeFigure>
            {"px.dialog.open(\"demo-dialog\")"}
        </ComponentPreview>
        <p>To close a dialog:</p>
        <ComponentPreview language="javascript" codeFigure>
            {"px.dialog.close(\"demo-dialog\")"}
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
                <Example />
                <UsageWithJavascript />
            </DocContainer>
        );
    }
}

export default Dialog;

/* For testing */
export { Example, UsageWithJavascript };
