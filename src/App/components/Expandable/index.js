import React from "react";

/* The expandable component acceps either an array or a single object [AW] */
const Expandable = ({ items }) => (
    items ? (Array.isArray(items) ?
        items.map(({ title, content }, i) => (
            <div key={i} className="expandable">
                <div className="expandable-header">
                    <h5>{title}</h5>
                </div>
                <div className="expandable-content">
                    {content}
                </div>
            </div>
        )) :
        <div className="expandable">
            <div className="expandable-header">
                <h5>{items.title}</h5>
            </div>
            <div className="expandable-content">
                {items.content}
            </div>
        </div>
    ) : null
);

export default Expandable;
