import React from "react";

import { DocContainer } from "@docutils";
import ActionLinkComponent from "@components/ActionLink";

const ImagesLink = () => (
    <div className="slab slab-default">
        <i className="material-icons" aria-hidden="true">wb_incandescent</i>
        <p>Want to include images in the presentation? Images can be found in the image archive. </p>
        <ActionLinkComponent linkText="Open image archive" newTab={true} link="https://payex.pickit.com" />
    </div>
);

const Images = () => (
    <DocContainer docToc>
        <ImagesLink />
    </DocContainer>
);

export default Images;

/* For testing */
export { ImagesLink };
