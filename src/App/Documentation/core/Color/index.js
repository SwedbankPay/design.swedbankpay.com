import React from "react";
import { Link } from "react-router-dom";

import { DocContainer } from "#";
import ColorPreview from "./ColorPreview";

const MainColors = () => (
    <>
        <h2 id="main-colors">Main colors</h2>
        <p>The main color palette of Swedbank Pay</p>
        <div className="row">
            <div className="col-12 col-sm mb-lg-0">
                <ColorPreview name="Yellow" hex="#fdc129" />
            </div>
            <div className="col-12 col-sm mb-lg-0">
                <ColorPreview name="Brown" hex="#512b2b" />
            </div>
            <div className="col-12 col-sm mb-lg-0">
                <ColorPreview name="Orange Main" hex="#ee7023" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm mb-lg-0">
                <ColorPreview name="Info Turquoise" hex="#8acdc3" />
            </div>
            <div className="col-12 col-sm mb-lg-0">
                <ColorPreview name="Info Pink" hex="#efb7b6" />
            </div>
            <div className="col-12 col-sm mb-lg-0">
                <ColorPreview name="Apricot" hex="#fbf2ea" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm mb-lg-0">
                <ColorPreview name="Light Turquoise" hex="#ebf8f2" />
            </div>
            <div className="col-12 col-sm mb-lg-0">
                <ColorPreview name="Turquoise" hex="#31a3ae" />
            </div>
            <div className="col-12 col-sm mb-lg-0">
                <ColorPreview name="Turquoise Links" hex="#257886" />
            </div>
        </div>
    </>
);

const AlertColors = () => (
    <>
        <h2 id="alert-colors">Alert colors</h2>
        <p>
            These colors are used to visualize state,
            see <Link to="/docs/components/alerts/">Alert</Link> for an example.
        </p>
        <div className="row">
            <div className="col-12 col-sm">
                <ColorPreview name="brand-success" hex="#477d17" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="brand-success-light" hex="#f2f7eb" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="brand-warning" hex="#ff9900" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm">
                <ColorPreview name="brand-warning-light" hex="#fffae5" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="brand-error-border" hex="#f1bbb9" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="brand-error" hex="#b24843" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm">
                <ColorPreview name="brand-error-light" hex="#fceeed" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="brand-info" hex="#2c7a8f" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="brand-info-light" hex="#f0f9fb" />
            </div>
        </div>
    </>
);

const Grayscale = () => (
    <>
        <h2 id="grayscale">Grayscale</h2>
        <div className="row">
            <div className="col-12 col-sm">
                <ColorPreview name="black" hex="#000000" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="nearblack" hex="#111111" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="gray-dark" hex="#262626" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm">
                <ColorPreview name="gray-medium-dark" hex="#363636" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="gray-medium" hex="#404040" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="gray-medium-light" hex="#545454" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm">
                <ColorPreview name="gray-light" hex="#666666" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="gray-light-alt" hex="#999999" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="gray-bright" hex="#eaeaea" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm">
                <ColorPreview name="gray-bright-alt" hex="#bcbcbc" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="neargray" hex="#f9f9f9" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="offwhite" hex="#f4f4f4" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm">
                <ColorPreview name="nearwhite" hex="#f0f0f0" />
            </div>
            <div className="col-12 col-sm">
                <ColorPreview name="white" hex="#ffffff" />
            </div>
            <div className="col-12 col-sm">
            </div>
        </div>
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
