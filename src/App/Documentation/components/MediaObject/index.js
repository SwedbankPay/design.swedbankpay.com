import React from "react";

import { ComponentPreview, DocToc } from "#";
import MediaObjectComponent from "@/MediaObject";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Use the <code className="token property">.media</code> class on an object to style it as a small container that feature a left- or right-aligned image/icon alongside textual content.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <MediaObjectComponent imgUrl="http://via.placeholder.com/64x64" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
            <MediaObjectComponent icon="account_circle" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
        </ComponentPreview>
    </>
);

const MediaAlignment = () => (
    <>
        <h2 id="media-alignment">Media alignment</h2>
        <p>Use the <code className="token property">.media-right</code> class to align the media content to the right.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <MediaObjectComponent mediaRight imgUrl="http://via.placeholder.com/64x64" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
            <MediaObjectComponent mediaRight icon="account_circle" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
        </ComponentPreview>
    </>
);

const MediaObjectText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <div className="alert alert-danger in">
            This component is under development and will probably change.
        </div>
        <p className="lead">Media objects...</p>
        <Overview />
        <MediaAlignment />
    </div>
);

const MediaObject = () => (
    <div className="doc-container">
        <div className="row">
            <MediaObjectText />
            <DocToc component={MediaObjectText} />
        </div>
    </div>
);

export default MediaObject;

/* for testing */
export { Overview, MediaAlignment, MediaObjectText };
