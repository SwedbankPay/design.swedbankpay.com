import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Pagination = ({ type, items, arrows, mobileView, id }) => {

    const activeItem = -1;

    const itemLength = items ? items.length - 1 : -2;

    const Arrow = ({ type, mobile }) => (
        <button className={`arrow-${type} ${mobile ? " d-block d-sm-none" : ""}`}>
            <i className="material-icons" aria-label={type} >{"\n"}
                <a href="#"></a>
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
                    <nav className="pagination" role="navigation" aria-label="Pagination Navigation">
                        <Arrow type="start" mobile/>
                        <Arrow type="back" />
                        <ul id={id} >
                            { items.map(({ name, href, active }, i) => (
                                <li key={i} className={`d-none d-sm-block ${active ? "active" : ""}`}>{"\n"}
                                    <a href={href} aria-label={`Go to page ${name}`} >{name}</a>{"\n"}
                                </li>
                            ))}
                            <p className="d-block d-sm-none font-weight-bold">Page <span className="current-page"></span> of {items.length}</p>
                        </ul>
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

