import React from "react";

import { DocContainer } from "@docutils";
import Button from "@components/Button";

const basename = process.env.basename;

const Download = () => (
    <>
        <h2 id="download">Download</h2>
        <div className="slab slab-default slab-elevated">
            <p>Before downloading any logotype files, make sure to read the Swedbank Pay logotype guidelines. The guidelines can be found below.</p>
            <Button type="executive" icon="file_download" href={`${basename}release/logos/cid_2799998.zip`} label="Download" />
        </div>
    </>
);

const Overview = () => (
    <>
        <img src={`${basename}img/logotype/cid_2799392.png`} className="img-fluid mb-4" />
        <p>
            The Swedbank Pay logotype is designed to highlight and communicate our commerce offer. It should be used as a sender on any material or information regarding Swedbank Pay
            to both merchants and consumers.
        </p>
        <p>
            The Swedbank Pay logotype is used in Swedbank Pay channels and touchpoints.
        </p>
        <p>
            In Swedbank channels, for example Swedbank.se, we refer to Swedbank Pay in text or in a link, we don’t use the Swedbank Pay logotype.
            The Swedbank Pay logotype can, however, be a natural part of an image showing the user interface or other parts of the service.
        </p>
    </>
);

const Guidelines = () => (
    <>
        <h2 id="guidelines">Logotype guidelines</h2>
        <h3>General</h3>
        <p>
            The Swedbank Pay logotype is available in a vertical and horizontal version, and the two variants can be used as positive or negative.
            The vertical version is used as the primary logotype. In situations where both the negative or positive version can be used,
            the recommendation is to use the negative version as it gives a lighter and more friendly impression.
        </p>
        <p>
            Note that the logotype is an image and does not need to comply with the WCAG contrast requirements even though legibility of course must be considered.
        </p>
        <img src={`${basename}img/logotype/cid_2799410.png`} className="img-fluid mb-4" />

        <h3>Background</h3>
        <p>
            The Swedbank Pay logotype can be placed on white, all our background colours and images.
        </p>
        <p>
            When using images as background, the logotype may only be placed if the area has low level of detail and is naturally light or dark.
            You may not alter or retouch the image to place the logotype. Use the negative version on dark images, and the positive on light images.
        </p>
        <p>
            Swedbank Pay uses Yellow as an accent colour. When placing the Swedbank Pay logotype on Yellow background always use the negative version.
            Make sure to keep the logotype above the minimum size recommendation for legibility.
        </p>
        <img src={`${basename}img/logotype/cid_2799428.png`} className="img-fluid mb-4" />

        <h3>Size</h3>
        <p>
            The recommended size for the logotype is based on the height of the Symbol.
        </p>
        <p>
            The recommended sizes are based on initial design drafts and may be adjusted during
            the implementation.
        </p>

        <h4>Size in printed units, vertical logotype (A5–A3)</h4>
        <ul>
            <li>Recommended symbol height: 22 mm</li>
            <li>Minimum symbol height: 12 mm</li>
        </ul>
        <h4>Size in printed units, horisontal logotype (A5–A3)</h4>
        <ul>
            <li>Recommended symbol height: 16 mm</li>
            <li>Minimum symbol height: 12 mm</li>
        </ul>
        <h4>Size in digital units, vertical logotype</h4>
        <ul>
            <li>Recommended symbol height: 160 px</li>
            <li>Minimum symbol height: 24 px</li>
        </ul>
        <h4>Size in digital units, horisontal logotype</h4>
        <ul>
            <li>Recommended symbol height: 64 px</li>
            <li>Minimum symbol height: 24 px</li>
        </ul>
        <img src={`${basename}img/logotype/cid_2799443.png`} className="img-fluid mb-4" />

        <h3>Placement</h3>
        <p>
            For best recognition and a consistent expression, our primary placement of the Swedbank Pay logotype is in the top right corner.
            As secondary placement we place the logotype in the bottom right corner. In end frames such as in film clips and other video formats, mobile splash screens,
            animated banners or Powerpoint the logotype may be placed centered.
        </p>
        <p>
            On websites the logotype can be placed top left, this is as an exception.
        </p>
        <h4>Placement of the vertical logotype</h4>
        <p>
            The vertical Swedbank Pay logotype is placed at a consistent distance from the edge of the unit based on the height of the Symbol.
            Both the vertical and horizontal distance is 75% of the height of the Symbol, but when placed bottom right the vertical distance to the lower edge is 60% of the height of the Symbol.
        </p>
        <img src={`${basename}img/logotype/cid_2799444.png`} className="img-fluid mb-4" />
        <h4>Placement of the horizontal logotype</h4>
        <p>
            The horizontal Swedbank Pay logotype is placed at a consistent distance from the edge of the unit based on the height of the Symbol.
            In print both the vertical and horizontal distance is 75% of the height of the Symbol. In digital units the vertical and horizontal distance can vary depending on the space needed in the design,
            but the distance may never be smaller than 30% of the height of the Symbol. Round up to nearest 8pt-grid step.
        </p>
        <img src={`${basename}img/logotype/cid_2799455.png`} className="img-fluid mb-4" />

        <h3>Clear space</h3>
        <p>
            The Swedbank Pay logotype should be used with a defined clear space for best visibility. The space differs from the vertical and horizontal version,
            and in digital units the clear space is fairly smaller to maintain a big and proud appearance despite the limited space.
        </p>
        <p>
            For digital units round up the clear space to the nearest 8pt-grid step (e.g recommended symbol height for horizontal logotype is 64 px,
            clear space should be 24 px. [64 × 0.3 = 19.2] → 24px).
        </p>
        <img src={`${basename}img/logotype/cid_2799483.png`} className="img-fluid mb-4" />

        <h3>Avoid</h3>
        <ul>
            <li>Do not alter the Swedbank Pay logotype in any way.</li>
            <li>Never separate the wordmark and the symbol.</li>
            <li>Do not use positive logotype (black wordmark) version on Yellow background.</li>
            <li>Never create your own logotype by combining the symbol and typing the text “Pay”</li>
            <li>When the logotype is not used, always write “Swedbank Pay” when referring to the brand. Never use shortened versions such as “Pay”, “S-Pay” or “Swed-Pay”.</li>
        </ul>
    </>
);

const Logotype = () => (
    <DocContainer docToc>
        <Overview />
        <Download />
        <Guidelines />
    </DocContainer>
);

export default Logotype;

/* For testing */
export { Overview, Download, Guidelines };
