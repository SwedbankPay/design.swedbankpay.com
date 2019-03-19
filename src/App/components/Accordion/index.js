import React from "react";

const Accordion = ({ items }) => (
    <div className="accordion">
        {items ? items.map(({ title, content }, i) => (
            <div key={i} className="accordion-item">
                <h5>{title}</h5>
                <div className="accordion-content">
                    {content}
                </div>
            </div>
        )) : null}
    </div>
);

export default Accordion;
