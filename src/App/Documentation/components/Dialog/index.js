import React, { Component } from "react";

import { ComponentPreview, DocToc, Icon, Property } from "#";
import { dialog } from "$/px-script";

const Example = () => (
    <>
        <h2 id="example">Example</h2>
        <p>Example dialog...</p>
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
        <h2 id="usage-with-javascript">Usage with javascript</h2>
        <p>To programmatically open a dialog, use <Property value={"px.dialog.open(\"DIALOG_ID\")"} />.</p>
        <p>To programmatically close a dialog, use <Property value={"px.dialog.close(\"DIALOG_ID\")"} />.</p>
    </>
);

const DialogText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Dialogs...</p>
        <Example />
        <UsageWithJavascript />
    </div>
);

class Dialog extends Component {
    componentDidMount () {
        dialog.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <DialogText />
                    <DocToc component={DialogText} />
                </div>
            </div>
        );
    }
}

export default Dialog;

/* For testing */
export { Example, UsageWithJavascript, DialogText };
