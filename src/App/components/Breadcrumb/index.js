import React from "react";
import PropTypes from "prop-types";

const _renderItems = items => items.map((item, i) => (
    <li key={i}>
        {item.href ? <a href={item.href}>{item.title}</a> : <span>{item.title}</span>}
    </li>
));

const DefaultItems = () => (
    <div>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Gadgets</a></li>
        <li><a href="#">Gadget #1</a></li>
    </div>
);

const Breadcrumb = ({ items }) => (
    <nav>
        <ol className="breadcrumb">
            {items ? _renderItems(items) : <DefaultItems />}
        </ol>
    </nav>
);

Breadcrumb.propTypes = {
    items: PropTypes.array
};

export default Breadcrumb;

// Exporting for testing purposes
export { DefaultItems };
