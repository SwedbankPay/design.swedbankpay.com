import React from "react";

import { DocContainer } from "@docutils";
import Button from "@components/Button";
import CodeTags from "@components/CodeTags";

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
            <p>The presentation template is provided as a <CodeTags type="secondary" code=".potx" />-file.</p>
            <Button type="primary" icon="file_download" href={`${basename}templates/SwedbankPay_ppt_template.potx`} label="Presentation template" />
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
