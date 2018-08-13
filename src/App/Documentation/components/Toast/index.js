import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";
import { toast } from "$/px-script";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>You want jam on that toast?</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <button className="btn btn-brand" type="button" onClick={() => toast({ html: "<div><h3>LOLOLOL</h3><p>Lol saved</p></div><button class='btn toast-action'>Dismiss</button>", classes: ["asd", "fasad"] })}>Click for toast!</button>
        </ComponentPreview>
    </>
);

const ToastText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <div className="alert alert-danger in">
            This component is under development and will probably change.
        </div>
        <p className="lead">Toast...</p>
        <Overview />
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
export { Overview, ToastText };
