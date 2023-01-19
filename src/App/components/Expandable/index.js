import React from "react";

const ExpandablePlaceholder = () => (
    <div className="expandable">
        <button className="expandable-header">
            <span>Placeholder title</span>
            <small>Placeholder subtitle</small>
        </button>
        <div className="expandable-body">
            <p>Placeholder text</p>
        </div>
    </div>
);

/* The expandable component acceps either an array or a single object [AW] */
const Expandable = ({ items }) => (
    items
        ? (Array.isArray(items)
            ? items.map(({ title, subtitle, content, id }, i) => (
                <div key={title + i} className="expandable">{"\n"}
                    <button type="button" className="expandable-header" aria-expanded="false" aria-controls={id}>{"\n"}
                        <span className="expandable-headline">
                            {title}
                        </span>{"\n"}
                        <small className="expandable-subtitle">
                            {subtitle}
                        </small>{"\n"}
                    </button>
                    <div className="expandable-body" id={id}>
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
