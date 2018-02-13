import React from "react";

import DocViewHeading from "../DocViewHeading";

const Introduction = () => {
    return (
        <div>
            <DocViewHeading title="Introduction" />
            <div className="doc-container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="lead">Get started with the PayEx DesignGuide...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
