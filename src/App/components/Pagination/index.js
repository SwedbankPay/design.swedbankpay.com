import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Pagination = ({ type, items, arrows, mobileView }) => {

    const activeItem = -1;

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
            <li className={`arrow-${type} ${type === "start" || type === "back" ? "disabled" : ""}`} aria-label={type} >{"\n"}
                {disabled ? <span></span> : <a href="#"></a>}{"\n"}
            </li>
        );
    };

    return (
        <>
            {mobileView ?
                <ul className={paginationClasses}>
                    {arrows ? <>
                        <Arrow type="start"/>
                        <Arrow type="back"/>
                    </> : null }
                    <li className="mobileView"><span>Page 1 of {items.length}</span></li>
                    {arrows ? <>
                        <Arrow type="forward"/>
                        <Arrow type="end"/>
                    </> : null }
                </ul>
                :
                <>
                    {type === "example" ?
                        <>
                            <ul className={paginationClasses}>
                                <Arrow type="back"/>
                                <li><div className="example-box"></div></li>
                                <Arrow type="forward"/>
                            </ul>
                        </>
                        :
                        <>
                            <nav role="navigation" aria-label="Pagination Navigation">
                                <ul className={paginationClasses}>
                                    {arrows ? <Arrow type="back" /> : null}
                                    {items ? items.map(({ name, href, active }, i) => (
                                        <li key={i} className={`${active ? "active" : ""}`}>{"\n"}
                                            <a href={href} aria-label={`Go to page ${href}`} >{name}</a>{"\n"}
                                        </li>
                                    )
                                    ) : null}
                                    {arrows ? <Arrow type="forward" /> : null}
                                </ul>
                            </nav>
                        </>
                    }
                </>
            }
        </>
    );
};

Pagination.propTypes = {
    type: PropTypes.oneOf(["simple", "example"]),
    items: PropTypes.array,
    text: PropTypes.string,
    arrows: PropTypes.bool,
    mobileView: PropTypes.bool
};

export default Pagination;

