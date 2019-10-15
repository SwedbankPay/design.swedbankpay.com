import React from "react";

import { DocContainer } from "@docutils";

const brandTitle = process.env.brandTitle;

const Introduction = () => (
    <DocContainer docToc>
        <p className="lead">Getting started with the {brandTitle} Templates. Templates, usage description as well as tips and tricks can be found here.</p>
    </DocContainer>
);

export default Introduction;
