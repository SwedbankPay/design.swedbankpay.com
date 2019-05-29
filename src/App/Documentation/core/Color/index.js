import React from "react";

import { ComponentPreview, DocContainer } from "#";
import ColorPreview from "./ColorPreview";

const MainColors = () => (
    <>
        <h2 id="main-colors">Main colors</h2>
        <p>The main color palette of Swedbank Pay</p>
        <ComponentPreview language="html" showCasePanel>
            <div className="row color-container">
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="orange-medium" hex="#ee7023" />
                </div>
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="orange-light" hex="#ff9900" />
                </div>
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="orange-bright" hex="#ffcc00" />
                </div>
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="green" hex="#82b236" />
                </div>
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="blue" hex="#5b8ad6" />
                </div>
            </div>
            <div className="row color-container">
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="blue-light" hex="#a2c9ce" />
                </div>
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="blue-bright" hex="#d7e6e9" />
                </div>
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="teal" hex="#4893a0" />
                </div>
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="blue-bright-alt" hex="#a3c9cf" />
                </div>
                <div className="col-xl col-lg-2 col-12 mb-lg-0">
                    <ColorPreview name="red-medium" hex="#dd3300" />
                </div>
            </div>
        </ComponentPreview>
    </>
);

const AlertColors = () => (
    <>
        <h2 id="alert-colors">Alert colors</h2>
        <ComponentPreview language="html" showCasePanel>
            <div className="row color-container">
                <div className="col-12">
                    <ColorPreview name="brand-success" hex="#477d17" />
                </div>
                <div className="col-12">
                    <ColorPreview name="brand-success-light" hex="#f2f7eb" />
                </div>
                <div className="col-12">
                    <ColorPreview name="brand-warning" hex="#ff9900" />
                </div>
                <div className="col-12">
                    <ColorPreview name="brand-warning-light" hex="#fffae5" />
                </div>
                <div className="col-12">
                    <ColorPreview name="brand-error-border" hex="#f1bbb9" />
                </div>
                <div className="col-12">
                    <ColorPreview name="brand-error" hex="#b24843" />
                </div>
                <div className="col-12">
                    <ColorPreview name="brand-error-light" hex="#fceeed" />
                </div>
                <div className="col-12">
                    <ColorPreview name="brand-info" hex="#2c7a8f" />
                </div>
                <div className="col-12">
                    <ColorPreview name="brand-info-light" hex="#f0f9fb" />
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Grayscale = () => (
    <>
        <h2 id="grayscale">Grayscale</h2>
        <ComponentPreview language="html" showCasePanel>
            <div className="row color-container">
                <div className="col-12">
                    <ColorPreview name="black" hex="#000000" color="#eaeaea" />
                </div>
                <div className="col-12">
                    <ColorPreview name="nearblack" hex="#111111" color="#eaeaea" />
                </div>
                <div className="col-12">
                    <ColorPreview name="gray-dark" hex="#262626" color="#eaeaea" />
                </div>
                <div className="col-12">
                    <ColorPreview name="gray-medium-dark" hex="#363636" color="#eaeaea" />
                </div>
                <div className="col-12">
                    <ColorPreview name="gray-medium" hex="#404040" color="#eaeaea" />
                </div>
                <div className="col-12">
                    <ColorPreview name="gray-medium-light" hex="#545454" color="#eaeaea" />
                </div>
                <div className="col-12">
                    <ColorPreview name="gray-light" hex="#666666" color="#eaeaea" />
                </div>
                <div className="col-12">
                    <ColorPreview name="gray-light-alt" hex="#999999" />
                </div>
                <div className="col-12">
                    <ColorPreview name="gray-bright" hex="#eaeaea" />
                </div>
                <div className="col-12">
                    <ColorPreview name="gray-bright-alt" hex="#bcbcbc" />
                </div>
                <div className="col-12">
                    <ColorPreview name="neargray" hex="#f9f9f9" />
                </div>
                <div className="col-12">
                    <ColorPreview name="offwhite" hex="#f4f4f4" />
                </div>
                <div className="col-12">
                    <ColorPreview name="nearwhite" hex="#f0f0f0" />
                </div>
                <div className="col-12">
                    <ColorPreview name="white" hex="#ffffff" color="black" />
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Color = () => (
    <DocContainer>
        <p className="lead">The Swedbank Pay DesignGuide color palette</p>
        <MainColors />
        <AlertColors />
        <Grayscale />
    </DocContainer>
);

export default Color;

/* For testing */
export { MainColors, AlertColors, Grayscale };
