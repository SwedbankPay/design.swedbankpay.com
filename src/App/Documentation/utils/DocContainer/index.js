import React from "react";
import PropTypes from "prop-types";

import { DocToc } from "#";

const DocContainer = ({ docToc, children }) => {
    const DocContent = () => <div className={`doc-body ${docToc ? "col-lg-10" : "col-12"}`}>{children}</div>;

    return (
        <div className="doc-container">
            <div className="row">
                <DocContent />
                {docToc ? <DocToc component={DocContent} /> : null}
            </div>
        </div>
    );
};

DocContainer.propTypes = {
    docToc: PropTypes.bool
};

export default DocContainer;
