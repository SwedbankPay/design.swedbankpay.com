import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import AlertComponent from "@components/Alert";
import DialogComponent from "@components/Dialog";
import CodeTags from "@components/CodeTags";

const { dialog } = window.dg;

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>
            A dialog remains hidden until it is triggered. Once it is open it overlays the website with a dark background and presents some options, usually confirming or cancelling an action.
            If you use a dialog it is assumed that you want to &quot;force&quot; the user to make a choice. Therefore the only way to close a dialog is to choose one of the presented actions or, if given,
            press the <i className="material-icons d-inline-flex" aria-hidden="true">close</i> to close the dialog.
        </p>
        <p>
            Dialog boxes consist of a header, a body and a footer. In these you can put whatever you want, but some basic functionality should be included in all dialogs.
            The header should contain a short descriptive text for what the dialog-box does. You can include an icon with class <CodeTags type="secondary" code=".dialog-close" /> if you wish to give your user a way to close the dialog box without choosing an option.
            The dialog body should contain the main content, usually just text confirming an action.
            In the footer you will find buttons to confirm or cancel the requested action.
        </p>
        <AlertComponent type="warning">
            <h4>Initializing dialog buttons</h4>
            To make a button open the dialog box you need to
            include <CodeTags type="secondary" code={"data-dialog-open=\"{#your-dialog-id}\""} /> as an attribute to that button.
        </AlertComponent>
    </>
);

const Example = () => (
    <>
        <h2 id="overview">Example</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <button className="btn btn-primary" type="button" data-dialog-open="demo-dialog">{"\n"}Open dialog{"\n"}</button>
            <DialogComponent diaHeader="Delete item 456?" diaId="demo-dialog">
                <p>Are you sure you want to permanently delete the item <i>German Swashbuckle (456)?</i></p>
            </DialogComponent>
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="dialog" open close />
    </>
);

const Dialog = () => {
    useEffect(() => { dialog.init(); });

    return (
        <DocContainer docToc>
            <p className="lead">
                Dialog is meant to be used to show a snippet of text like a confirmation box before you delete something.
                Use <Link to="/components/sheet">sheet</Link> if you wish to receive input from the user or display a large chunk of information.
            </p>
            <HowItWorks />
            <Example />
            <JavascriptMethods />
        </DocContainer>
    );
};

export default Dialog;

/* For testing */
export { HowItWorks, Example, JavascriptMethods };
