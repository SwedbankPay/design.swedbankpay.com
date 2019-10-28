import React from "react";

import { DocContainer, Property } from "@docutils";
import Button from "@components/Button";
import ActionLinkComponent from "@components/ActionLink";

const basename = process.env.basename;

const Overview = () => (
    <>
        <p>
            This is the main template for both internal and external use. Make sure you have the correct fonts installed on your computer.
            The fonts can be found <a href="/res/resources/typography">here</a>.
            Please do not change the colour or the logo of this template.
        </p>
        <p>
            If you have other needs, have new ideas or feedback on this presentation - please contact Head of Marketing.
        </p>
    </>
);

const Download = () => (
    <>
        <h2 id="download">Download</h2>
        <div className="slab slab-default slab-elevated">
            <p>The presentation template is provided as a <Property value=".potx" />-file.</p>
            <Button type="executive" icon="file_download" href={`${basename}release/templates/cid_2799998.zip`} label="Download" />
        </div>
        <div className="slab slab-default slab-arrow">
            <i className="material-icons">wb_incandescent</i>
            <p>Want to include images in the presentation? Images can be found in the image archive. </p>
            <ActionLinkComponent linkText="Open image archive" newTab={true} link="https://payex.pickit.com" />
        </div>
    </>
);

const Presentations = () => (
    <DocContainer docToc>
        <Overview />
        <Download />
    </DocContainer>
);

export default Presentations;

/* For testing */
export { Overview, Download };
