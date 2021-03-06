import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ items }) => (
    items.map(({ title, content, id }, i) => (
        <div key={i} className="accordion">{"\n"}
            <button type="button" className="accordion-header" aria-expanded="false" aria-controls={id}>{"\n"}
                {title}
                {"\n"}
            </button>
            <div className="accordion-body" id={id}>
                <p>{content}</p>
            </div>
        </div>
    ))
);

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Accordion;
