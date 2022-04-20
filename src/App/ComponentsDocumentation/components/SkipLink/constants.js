import React from "react";
import SkipLink from "@components/SkipLink";

const SkipLinkComponent = () => (
    <>
        <p>To view the skip link component tab to this example, or click inside this example and press tab.</p>
        <SkipLink id="skip-link-example"/>
    </>
);

export const skipLinkShowcase = { 
    id: "overviewSkipLink",
    hideOptions: true,
    elements: [
        { 
            component: <SkipLinkComponent/>,
            title: "Skip link",
            description: <><p>Some people use the tab key to navigate through a web page. Including the skip link component gives users the option to bypass the top-level navigation links and jump to the main content on a page. The skip link component is visually hidden until a keyboard press activates it.</p>
            <p>All Swedbank Pay sites should include a skip link component.</p></>
        }
    ]
}