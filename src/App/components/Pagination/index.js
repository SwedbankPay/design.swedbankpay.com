import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Pagination = ({ type, items, text, arrows, mobileView }) => {
    let activeItem = -1;
    const itemLength = items ? items.length - 0 : -0;

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

    /*
    const changePageOnClick = ({ items, item }) => {
        items.map(i => {
            items[i].active = false;
        });
        items[item].active = true;
    }; // probably shit, but it is a beginning. Maybe.. */

    return (
        <>
            {mobileView ?
                <>
                    <ul className={paginationClasses}>
                        <Arrow type="start"/>
                        <Arrow type="back"/>
                        {console.log("halla", items.indexOf(items.active = true))} {/* HERE */}
                        <li>
                            <span className="text">Page {items.active && items.name} of {items.length}</span>{"\n"}
                        </li>

                        <Arrow type="forward"/>
                        <Arrow type="end"/>
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
