import React from "react";

import { DocContainer } from "@docutils";

const brandTitle = process.env.brandTitle;

const Introduction = () => (
    <DocContainer docToc>
        <p className="lead">Getting started with the {brandTitle} Resources.</p>
    </DocContainer>
);

export default Introduction;
