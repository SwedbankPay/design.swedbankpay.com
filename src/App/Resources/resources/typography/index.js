import React from "react";

import { DocContainer } from "@docutils";
import Button from "@components/Button";

const basename = process.env.basename;

const Overview = () => (
    <>
        <img src={`${basename}img/typography/cid_2873206.png`} className="img-fluid mb-4" />
        <p>
            Swedbank Pay uses a selection of fonts from Swedbank&apos;s typography toolbox.
        </p>
        <p>
            Our main font is Swedbank Headline Bold, a custom made typeface with an open, welcoming
            visual voice. In addition Swedbank Sans is used for body copy in printed units whilst Arial is used
            for body copy on screens.
        </p>

    </>
);

const Download = () => (
    <>
        <h2 id="download">Download</h2>
        <div className="slab slab-default slab-elevated">
            <p>Before downloading any typography files, make sure to read the Swedbank Pay typography guidelines. The guidelines can be found below.</p>
            <div className="resources-typography-download">
                <Button type="executive" icon="file_download" href={`${basename}release/fonts/cid_2108538.zip`} label="Download Swedbank Headline" />
                <Button type="executive" icon="file_download" href={`${basename}release/fonts/cid_2686429.zip`} label="Download Swedbank Sans" />
            </div>
        </div>
    </>
);

const Guidelines = () => (
    <>
        <h2 id="guidlines">Typography guidlines</h2>
        <img src={`${basename}img/typography/cid_2873207.png`} className="img-fluid mb-4" />

        <h4>Use Swedbank Headline Bold in:</h4>
        <ul>
            <li>Headlines and highlights</li>
            <li>Introduction texts</li>
            <li>Lower level headlines</li>
        </ul>

        <h4>Use Arial in:</h4>
        <ul>
            <li>Body copy on screens</li>
        </ul>

        <h4>Use Swedbank Sans in:</h4>
        <ul>
            <li>Body copy in printed units</li>
        </ul>

        <h4>Typesetting</h4>
        <ul>
            <li>Use large contrast in size between top level headlines and body text</li>
            <li>Use metric settings for spacing</li>
        </ul>
    </>
);

const Typography = () => (
    <DocContainer docToc>
        <Overview />
        <Download />
        <Guidelines />
    </DocContainer>
);

export default Typography;

/* For testing */
export { Overview, Download, Guidelines };
