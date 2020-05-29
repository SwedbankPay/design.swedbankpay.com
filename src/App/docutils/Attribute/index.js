import React from "react";
import PropTypes from "prop-types";

export const Property = ({ value }) => <code className="token property">{value}</code>;

const Attribute = ({ data, name, value }) => {
    if (name && value) {
        return (
            <code>
                {data ? <span className="token attr-name">data-</span> : null}
                <span className="token attr-name">{name}</span>
                <span className="token attr-value">
                    <span className="token punctuation">{"=\""}</span>
                    {value}
                    <span className="token punctuation">{"\""}</span>
                </span>
            </code>
        );
    } else if (name && !value) {
        return (
            <code>
                {data ? <span className="token attr-name">data-</span> : null}
                <span className="token attr-name">{name}</span>
            </code>
        );
    } else if (!name && value) {
        return (
            <code>
                <span className="token attr-value">{value}</span>
            </code>
        );
    }
};

Attribute.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    data: PropTypes.bool
};

Property.propTypes = {
    value: PropTypes.string.isRequired
};

export default Attribute;
