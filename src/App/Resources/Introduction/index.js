import React from "react";

import { DocContainer } from "@docutils";

const brandTitle = process.env.brandTitle;

const Introduction = () => (
    <DocContainer docToc>
        <p className="lead">Getting started with the {brandTitle} Resources. Resources and guidelines on how to use the provided resources can be found here.</p>
    </DocContainer>
);

export default Introduction;
