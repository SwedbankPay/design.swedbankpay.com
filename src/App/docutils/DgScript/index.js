import React from "react";
import PropTypes from "prop-types";

const DgScript = ({ component, subComponents, func, params }) => {
    let renderedParams;
    let renderedSubComponents;

    if (subComponents) {
        renderedSubComponents = subComponents.map((component, i) => (
            <span key={i}>{component}
                <span className="token punctuation">.</span>
            </span>
        ));
    }

    if (params) {
        renderedParams = params.map((param, i) => (
            <span key={i} className={param.includes("\"") ? "token string" : null}>{param}
                {(i < params.length - 1) ? <span className="token punctuation">, </span> : null}
            </span>
        ));
    }

    return (
        <code>
            <span>dg</span>
            <span className="token punctuation">.</span>
            <span>{component}</span>
            <span className="token punctuation">.</span>
            {renderedSubComponents}
            <span className="token function">{func}</span>
            <span className="token punctuation">(</span>
            {renderedParams}
            <span className="token punctuation">);</span>
        </code>
    );
};

DgScript.propTypes = {
    component: PropTypes.string.isRequired,
    subComponents: PropTypes.array,
    func: PropTypes.string.isRequired,
    params: PropTypes.array
};

export default DgScript;
