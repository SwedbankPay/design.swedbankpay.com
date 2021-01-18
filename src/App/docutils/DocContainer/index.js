import React, { useEffect } from "react";
import PropTypes from "prop-types";

const { sidebar } = window.dg;

const DocContainer = ({ children }) => {
    const DocContent = () => <div id="doc-body" className="doc-body col-12">{children}</div>;

    useEffect(() => {
        sidebar.populateSidebarTertiary("doc-sidebar", document.querySelector(".doc-body").querySelectorAll("h2[id]"));
        sidebar.initScrollListener("doc-sidebar", "doc-body", "h2");

    }, []);

    return (
        <div className="row">
            <DocContent />
        </div>
    );
};

DocContainer.propTypes = {
    docToc: PropTypes.bool
};

export default DocContainer;
