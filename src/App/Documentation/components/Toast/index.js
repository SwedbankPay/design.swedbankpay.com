import React, { Component } from "react";

import { ComponentPreview, DocToc, ExperimentalComponentAlert } from "#";
import { toast } from "$/px-script";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>You want jam on that toast?</p>
        <ComponentPreview language="javascript" codeFigure>
            {"px.toast({ html: \"I am a toast!\" });"}
        </ComponentPreview>
        <ComponentPreview language="html" codeFigure dangerousHTML>
            {"<button onclick=\"px.toast({ html: 'I am a toast' })\" class=\"btn\">Toast!</button>"}
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel>
            <button className="btn btn-brand" type="button" onClick={() => toast({ html: "I'm a toast!" })}>Click for toast!</button>
        </ComponentPreview>
    </>
);

const Options = () => (
    <>
        <h2 id="options">Options</h2>
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
                    <td>{"\" \""}</td>
                    <td>The HTML content of the Toast.</td>
                </tr>
                <tr>
                    <td>displayLength</td>
                    <td>Number</td>
                    <td>4000</td>
                    <td>Length in ms the Toast stays before dismissal.</td>
                </tr>
                <tr>
                    <td>inDuration</td>
                    <td>Number</td>
                    <td>300</td>
                    <td>Transition in duration in milliseconds.</td>
                </tr>
                <tr>
                    <td>outDuration</td>
                    <td>Number</td>
                    <td>375</td>
                    <td>Transition out duration in milliseconds.</td>
                </tr>
                <tr>
                    <td>classes</td>
                    <td>Array of strings</td>
                    <td>[ ]</td>
                    <td>Classes to be added to the toast element.</td>
                </tr>
                <tr>
                    <td>completeCallback</td>
                    <td>Function</td>
                    <td>null</td>
                    <td>Callback function called when toast is dismissed.</td>
                </tr>
                <tr>
                    <td>activationPercent</td>
                    <td>Number</td>
                    <td>0.8</td>
                    <td>The percentage of the toast{"'"}s width it takes for a drag to dismiss a Toast.</td>
                </tr>
            </tbody>
        </table>
    </>
);

const CustomHtml = () => {
    const toastHtml = "<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class=\"btn toast-action\">Undo</button>";

    return (
        <>
            <h2 id="custom-html">Custom HTML</h2>
            <p>You can pass in an HTML String as the first argument as well. Take a look at the example below, where we pass in text as well as a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks.</p>
            <ComponentPreview language="javascript" codeFigure>
                {"const toastHtml = \"<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class='btn toast-action'>Undo</button>\";"}
                {"px.toast({ html: toastHtml });"}
            </ComponentPreview>
            <ComponentPreview language="html" showCasePanel>
                <button className="btn btn-brand" type="button" onClick={() => toast({ html: toastHtml })}>Toast with action</button>
            </ComponentPreview>
        </>
    );
};

const ToastText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">Toast...</p>
        <Overview />
        <Options />
        <CustomHtml />
    </div>
);

class Toast extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ToastText />
                    <DocToc component={ToastText} />
                </div>
            </div>
        );
    }
}

export default Toast;

/* for testing */
export { Overview, Options, ToastText };
