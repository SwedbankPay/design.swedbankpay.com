import React from "react";
import PropTypes from "prop-types";

const _renderItems = items => {
    return items.map((item, i) => {
        return (
            <li key={i} className={item.disabled ? "disabled" : ""}>
                <a href={item.href || "#"}>{item.title}</a>
            </li>
        );
    });
};

const DefaultItems = () => (
    <div>
        <li><a href="#">Home</a></li>
        <li className="disabled"><a href="#">Products</a></li>
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
