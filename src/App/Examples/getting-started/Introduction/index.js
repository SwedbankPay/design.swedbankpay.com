import React from "react";

import { DocContainer } from "@docutils";

const brandTitle = process.env.brandTitle;

const Introduction = () => (
    <DocContainer docToc>
        <p className="lead">Getting started with the {brandTitle} examples. Examples and inspiration on how to use parts provided by the Design Guide can be found here.</p>
    </DocContainer>
);

export default Introduction;
