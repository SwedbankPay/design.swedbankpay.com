import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, Property, Attribute, JavascriptDocs } from "@docutils";

const Sidebar = () => {
    useEffect(() => { console.log("init"); });

    return (
        <DocContainer docToc>
            <p className="lead">The sidebar is used to give users an easily available navigational bar at the left side of your web application.</p>
        </DocContainer>
    );
};

export default Sidebar;
