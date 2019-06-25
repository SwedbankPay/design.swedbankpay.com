import React from "react";

const ExpandablePlaceholder = () => (
    <div className="expandable">
        <div className="expandable-header">
            <h5>Placeholder</h5>
        </div>
        <div className="expandable-content">
            Placeholder text
        </div>
    </div>
);

/* The expandable component acceps either an array or a single object [AW] */
const Expandable = ({ items }) => (
    items
        ? (Array.isArray(items)
            ? items.map(({ title, content }, i) => (
                <div key={i} className="expandable">
                    <div className="expandable-header">
                        <h5>{title}</h5>
                    </div>
                    <div className="expandable-content">
                        {content}
                    </div>
                </div>
            )) :
            <ExpandablePlaceholder />
        )
        : <ExpandablePlaceholder />
);

export default Expandable;

export { ExpandablePlaceholder };
