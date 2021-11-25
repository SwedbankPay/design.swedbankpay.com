import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ type, items, id }) => {
    const Arrow = ({ type, mobile, disabled }) => (
        <button className={`arrow-${type}${mobile ? " d-block d-sm-none" : ""}${disabled ? " disabled" : ""}`}>
            <i className="material-icons" aria-label={type} >{"\n"}
                <a></a>
            </i>
        </button>
    );

    return (
        <>
            {type === "example" ?
                <>
                    <nav className="pagination example">
                        <Arrow type="back"/>
                        <div className="example-box"></div>
                        <Arrow type="forward"/>

                    </nav>
                </>
                :
                <>
                    <nav className="pagination" role="navigation" aria-label="Pagination Navigation" id={id}>
                        <Arrow type="start" mobile/>
                        <Arrow type="back"/>
                        <ul>
                            { items.map(({ name, active }, i) => (
                                <li key={i} className={`${active ? " active" : ""}`}>{"\n"}
                                    <a href="#" onClick={e => e.preventDefault()} aria-label={`Go to page ${name}`}>{name}</a>{"\n"}
                                </li>
                            ))}
                        </ul>
                        <span className="mobile">
                            Page 1 of {items.length}
                        </span>
                        <Arrow type="forward" />
                        <Arrow type="end" mobile/>
                    </nav>
                </>
            }
        </>
    );
};

Pagination.propTypes = {
    type: PropTypes.oneOf(["example"]),
    items: PropTypes.array,
    text: PropTypes.string,
    arrows: PropTypes.bool,
    mobileView: PropTypes.bool
};

export default Pagination;

