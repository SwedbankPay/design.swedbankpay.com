import React, { Component } from "react";

import { ComponentPreview, DocToc, DeprecatedComponentAlert } from "#";
import { modal } from "$/px-script";
import ModalComponent from "@/Modal";

const Usage = () => (
    <>
        <h2 id="usage">Usage</h2>
        <p>Static modal</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ModalComponent
                id="static-modal"
                title="Modal title"
                subTitle="Not as important as the title"
                type="brand"
                size="large"
                isStatic
                visible
                footerAlignment="right"
                footerText="Footer text"
            >
                <p>Modal body text goes here.</p>
            </ModalComponent>
        </ComponentPreview>
    </>
);

const Demo = () => (
    <>
        <h2 id="demo">Demo</h2>
        <p>Live modal</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ModalComponent
                id="live-modal"
                title="Modal title"
                subTitle="Not as important as the title"
                type="brand"
                size="large"
                button
                fade
                footerAlignment="right"
                footerText="Footer text"
            >
                <p>Modal body text goes here.</p>
            </ModalComponent>
        </ComponentPreview>
    </>
);

const ModalText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <DeprecatedComponentAlert />
        <p className="lead">Modals...</p>
        <Usage />
        <Demo />
    </div>
);

class Modal extends Component {
    componentDidMount () {
        modal.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ModalText />
                    <DocToc component={ModalText} />
                </div>
            </div>
        );
    }
}

export default Modal;

/* for testing */
export { Usage, Demo, ModalText };
