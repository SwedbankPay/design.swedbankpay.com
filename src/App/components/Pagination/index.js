import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Pagination = ({ type, items, arrows, mobileView }) => {

    let activeItem = -1;

    const itemLength = items ? items.length - 1 : -2;

    const paginationClasses = classnames(
        "pagination",
        type ? `pagination-${type}` : ""
    );

    const Arrow = ({ type }) => {
        let disabled = false;

        if (type === "start" || type === "back") {
            disabled = activeItem === 0;
        } else if (type === "forward" || type === "end") {
            disabled = activeItem === itemLength;
        }

        return (
            <li className={`arrow-${type}`} aria-label={type} >{"\n"}
                {disabled ? <span></span> : <a href="#"></a>}{"\n"}
            </li>
        );
    };

    return (
        <>
            {mobileView ?
                <>
                    <ul className={paginationClasses}>
                        {arrows ? <>
                            <Arrow type="start"/>
                            <Arrow type="back"/>
                        </> : null }
                        <h1>HALLA</h1>
                        {arrows ? <>
                            <Arrow type="forward"/>
                            <Arrow type="end"/>
                        </> : null }
                    </ul>
                </>
                :
                <>
                    <ul className={paginationClasses}>
                        {arrows ? <Arrow type="back" /> : null}
                        {items ? items.map(({ name, href, active }, i) => {
                            if (active) { activeItem = i; }

                            return (
                                <li key={i} className={`${active ? "active" : ""}`}>{"\n"}
                                    <a href={href}>{name}</a>{"\n"}
                                </li>
                            );
                        }) : null}
                        {arrows ? <Arrow type="forward" /> : null}
                    </ul>
                </>
            }
        </>
    );
};

Pagination.propTypes = {
    type: PropTypes.oneOf(["bullets", "simple"]),
    items: PropTypes.array,
    text: PropTypes.string,
    arrows: PropTypes.bool,
    mobileView: PropTypes.bool
};

export default Pagination;

/*
{items ? items.map(({ name, href, active }, i) => {
    if (active) { activeItem = i; }

    return (
        <li key={i}>
            <span>Page {i+1} of {items.length}</span>
        </li>
    );
}) : null
}
*/
