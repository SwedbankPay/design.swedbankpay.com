import React from "react";
import PropTypes from "prop-types";

const _renderItems = items => {
    return items.map((item, i) => {
        return item.disabled ? (
            <li key={i} className="disabled">
                <span>{item.title}</span>
            </li>
        ) : (
            <li key={i}>
                {item.href ? <a href={item.href}>{item.title}</a> : <span>{item.title}</span>}
            </li>
        );
    });
};

const DefaultItems = () => (
    <div>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Gadgets</a></li>
        <li><a href="#">Gadget #1</a></li>
    </div>
);

const Breadcrumb = ({ items, small }) => {
    return (
        <ol className={`breadcrumb${small ? " breadcrumb-sm" : ""}`}>
            {items ? _renderItems(items) : <DefaultItems />}
        </ol>
    );
};

Breadcrumb.propTypes = {
    items: PropTypes.array,
    small: PropTypes.bool
};

export default Breadcrumb;

// exporting for testing purposes
export { DefaultItems };
