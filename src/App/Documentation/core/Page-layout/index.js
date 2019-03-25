import React from "react";

import { ComponentPreview, DocContainer, Property } from "#";

const Overview = () => (
    <>
        <h2 id="overview">Default layout</h2>
        <p>
            The standard layout for pages is achieved by using <Property value=".page-container" />. This container has
            a max width of 992px.
        </p>
        <ComponentPreview language="html" showCasePanel >
            {/* <div className="page-container">
                <p>Some page content! <span className="badge badge-yellow">42</span></p>
                <div className="slab slab-apricot slab-arrow">
                    <ul className="settings-list m-0">
                        <li>
                            <i className="material-icons text-success">check</i>Shovels and tapestry newsletter
                        </li>
                        <li>
                            <i className="material-icons text-warning">remove</i>Spoon collectors weekly newsletter
                        </li>
                        <li>
                            <i className="material-icons text-danger">clear</i>Energetic squirrels newsletter
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="example-page-container">
                <div className="example-page-topbar">
                    <p>
                        Topbar container
                    </p>
                </div>
                <div className="example-content-container">
                    <p>
                        Content container
                    </p>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const PageLayout = () => {
    return (
        <DocContainer docToc>
            <p className="lead">
                Use our container classes to follow the standard page layout.
            </p>
            <Overview />
        </DocContainer>
    );
};

export default PageLayout;

export { Overview };
